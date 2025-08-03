# Google Analytics Setup Guide

## 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Create Account"
3. Follow the setup wizard:
   - Account name: "Luke Stevens Portfolio" (or your preference)
   - Property name: "lstevens.dev"
   - Industry: "Technology"
   - Business objectives: Select relevant options

## 2. Get Your Measurement ID

1. After creating the property, you'll get a **Measurement ID** 
2. It will look like: `G-XXXXXXXXXX`
3. Copy this ID - you'll need it for your environment variables

## 3. Add to Environment Variables

Add this line to your `.env.local` file:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
(Replace G-XXXXXXXXXX with your actual measurement ID)

## 4. Verify Setup

Once added, your portfolio will automatically start tracking:
- Page views
- User sessions
- Traffic sources
- User demographics
- Custom events

## 5. View Analytics Data

- **Google Analytics**: Visit analytics.google.com to see detailed reports
- **Vercel Analytics**: Check your Vercel dashboard under the "Analytics" tab

Both will provide different but complementary insights about your portfolio's performance.
