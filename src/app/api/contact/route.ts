import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Type assertion for process.env
declare const process: NodeJS.Process & { env: NodeJS.ProcessEnv };

// Simple in-memory rate limiting (for production, use Redis or similar)
const submissions = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3; // 3 submissions per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(ip);

  if (!userSubmissions || now - userSubmissions.lastReset > RATE_WINDOW) {
    submissions.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userSubmissions.count >= RATE_LIMIT) {
    return false;
  }

  userSubmissions.count++;
  return true;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ensure the API key is set in your environment variables on Vercel as RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 },
      );
    }

    const { firstName, lastName, email, message } = await req.json();

    // Enhanced validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 },
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    // Length validation
    if (firstName.length > 50 || lastName.length > 50 || message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Input too long.' },
        { status: 400 },
      );
    }

    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner'];
    const messageText = message.toLowerCase();
    if (spamKeywords.some(keyword => messageText.includes(keyword))) {
      return NextResponse.json(
        { success: false, error: 'Message flagged as potential spam.' },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: 'Contact Form <luke@lstevens.dev>',
      to: 'luke@lstevens.dev',
      subject: `Contact Form Submission from ${firstName} ${lastName} <${email}>`,
      replyTo: email,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error for debugging (optional)
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
