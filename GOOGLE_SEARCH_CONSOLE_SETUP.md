# Google Search Console Setup Guide

## Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property"

## Step 2: Add Your Website
1. Choose "URL prefix" (not Domain)
2. Enter your full URL: `https://lstevens.dev`
3. Click "Continue"

## Step 3: Verify Ownership
1. Google will show several verification methods
2. **Choose "HTML tag" method** (recommended)
3. Copy the `content` value from the meta tag
4. Example: `<meta name="google-site-verification" content="abc123xyz456" />`
5. You only need the content value: `abc123xyz456`

## Step 4: Update Your Environment Variables
1. Open your `.env.local` file
2. Add: `NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123xyz456`
3. Replace `abc123xyz456` with your actual verification code

## Step 5: Deploy and Verify
1. Deploy your changes to production
2. Return to Google Search Console
3. Click "Verify" button
4. ✅ You should see "Ownership verified"

## Step 6: Submit Your Sitemap
1. In Google Search Console, go to "Sitemaps"
2. Add sitemap URL: `https://lstevens.dev/sitemap.xml`
3. Click "Submit"

## Step 7: Monitor Performance
After verification, you can:
- Monitor search performance
- Check indexing status
- View search queries
- Monitor Core Web Vitals
- Submit URLs for indexing

## Additional Setup (Optional)
- Set up Google Analytics integration
- Configure Google Ads linking
- Set up email notifications for issues

## Troubleshooting
- Make sure your verification code is correctly added to `.env.local`
- Ensure your site is deployed with the verification code
- The verification tag must be in the `<head>` section (which it is)
- It may take a few minutes for verification to work

## Security Note
The verification code is safe to be public (it's in the HTML source), but we're using an environment variable for easy management across different environments.
