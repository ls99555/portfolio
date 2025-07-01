#!/bin/bash

# SEO Health Check Script for Luke Stevens Portfolio
# Run this script to check key SEO elements

echo "🔍 SEO Health Check for lstevens.dev"
echo "=================================="
echo ""

# Check if site is live
echo "📡 Checking site availability..."
if curl -s -o /dev/null -w "%{http_code}" https://lstevens.dev | grep -q "200"; then
    echo "✅ Site is live and responding"
else
    echo "❌ Site is not responding"
fi
echo ""

# Check sitemap
echo "🗺️  Checking sitemap..."
if curl -s https://lstevens.dev/sitemap.xml | grep -q "<urlset"; then
    echo "✅ Sitemap is accessible"
    SITEMAP_URLS=$(curl -s https://lstevens.dev/sitemap.xml | grep -c "<url>")
    echo "   📊 Found $SITEMAP_URLS URLs in sitemap"
else
    echo "❌ Sitemap not accessible"
fi
echo ""

# Check robots.txt
echo "🤖 Checking robots.txt..."
if curl -s https://lstevens.dev/robots.txt | grep -q "Sitemap:"; then
    echo "✅ Robots.txt is properly configured"
else
    echo "❌ Robots.txt issues detected"
fi
echo ""

# Check meta tags on homepage
echo "🏷️  Checking meta tags..."
HTML=$(curl -s https://lstevens.dev)

if echo "$HTML" | grep -q "<title>"; then
    TITLE=$(echo "$HTML" | grep -o "<title>[^<]*</title>" | sed 's/<[^>]*>//g')
    echo "✅ Title tag found: $TITLE"
    if [ ${#TITLE} -gt 60 ]; then
        echo "⚠️  Title is long (${#TITLE} chars) - consider shortening"
    fi
else
    echo "❌ No title tag found"
fi

if echo "$HTML" | grep -q 'name="description"'; then
    DESC=$(echo "$HTML" | grep -o 'name="description" content="[^"]*"' | sed 's/name="description" content="//g' | sed 's/"//g')
    echo "✅ Meta description found"
    if [ ${#DESC} -gt 160 ]; then
        echo "⚠️  Description is long (${#DESC} chars) - consider shortening"
    fi
else
    echo "❌ No meta description found"
fi

if echo "$HTML" | grep -q 'property="og:'; then
    echo "✅ Open Graph tags found"
else
    echo "❌ No Open Graph tags found"
fi
echo ""

# Check HTTPS and security headers
echo "🔒 Checking security..."
HEADERS=$(curl -s -I https://lstevens.dev)

if echo "$HEADERS" | grep -q "HTTP/2 200"; then
    echo "✅ HTTPS working with HTTP/2"
elif echo "$HEADERS" | grep -q "HTTP/1.1 200"; then
    echo "✅ HTTPS working with HTTP/1.1"
else
    echo "❌ HTTPS issues detected"
fi

if echo "$HEADERS" | grep -q "Content-Security-Policy"; then
    echo "✅ Content Security Policy header found"
else
    echo "⚠️  Content Security Policy header missing"
fi
echo ""

# Check page speed (basic)
echo "⚡ Basic performance check..."
START_TIME=$(date +%s%N)
curl -s -o /dev/null https://lstevens.dev
END_TIME=$(date +%s%N)
DURATION=$((($END_TIME - $START_TIME) / 1000000))
echo "   📊 Basic load time: ${DURATION}ms"

if [ $DURATION -lt 1000 ]; then
    echo "✅ Fast loading time"
elif [ $DURATION -lt 2000 ]; then
    echo "⚠️  Moderate loading time"
else
    echo "❌ Slow loading time - check Core Web Vitals"
fi
echo ""

echo "📋 Next Steps:"
echo "1. Check Google Search Console for detailed reports"
echo "2. Use PageSpeed Insights for comprehensive performance analysis"
echo "3. Monitor Core Web Vitals regularly"
echo "4. Submit sitemap to Google Search Console if not done"
echo ""
echo "🎯 For detailed SEO analysis, see: GOOGLE_SEARCH_CONSOLE_GUIDE.md"
