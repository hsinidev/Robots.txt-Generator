import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
    
  const schemas = {
    webSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://robots.doodax.com",
      "name": "Robots.txt Generator Pro",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://robots.doodax.com?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Robots.txt Generator Pro",
      "url": "https://robots.doodax.com",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0"
      },
      "description": "A professional, SEO-safe robots.txt file generator used to create custom directives for web crawlers, manage sitemaps, and optimize site indexing.",
      "browserRequirements": "Requires a modern web browser with JavaScript enabled.",
      "featureList": [
        "Custom User-Agent targeting",
        "Dynamic Allow/Disallow rules",
        "Sitemap URL integration",
        "Optional Crawl-delay setting",
        "Live preview of generated file",
        "One-click download"
      ]
    },
    article: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://robots.doodax.com"
      },
      "headline": "The Ultimate Guide to Robots.txt for SEO: 2024 Edition",
      "description": "A comprehensive guide on mastering the robots.txt protocol. Learn syntax, best practices, common mistakes, and advanced strategies to control search engine crawling.",
      "image": "https://robots.doodax.com/og-image.jpg",
      "author": {
        "@type": "Person",
        "name": "HSINI MOHAMED",
        "url": "https://github.com/hsinidev"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Doodax",
        "url": "https://doodax.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://doodax.com/logo.png"
        }
      },
      "datePublished": "2023-10-27",
      "dateModified": "2023-10-27",
      "proficiencyLevel": "Expert"
    }
  };


  const articleStyles = {
    h2: "text-3xl md:text-4xl font-extrabold mt-12 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400",
    h3: "text-2xl font-bold mt-10 mb-4 text-white border-b border-slate-700 pb-2",
    h4: "text-xl font-bold mt-6 mb-3 text-purple-200",
    p: "mb-5 text-slate-300 leading-relaxed text-lg",
    ul: "list-disc list-inside mb-6 pl-4 space-y-3 text-slate-300",
    ol: "list-decimal list-inside mb-6 pl-4 space-y-3 text-slate-300",
    code: "bg-slate-800 text-pink-400 font-mono px-2 py-1 rounded-md text-sm border border-slate-700",
    blockquote: "border-l-4 border-purple-500 pl-6 italic text-slate-400 my-8 py-2 bg-slate-900/50 rounded-r-lg",
    table: "w-full text-left border-collapse my-8 shadow-lg rounded-lg overflow-hidden",
    th: "border-b border-slate-700 p-4 bg-slate-800 font-bold text-white",
    td: "border-b border-slate-800/50 p-4 text-slate-300 bg-slate-900/40",
    callout: "bg-slate-800/80 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg text-slate-200"
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
        <script type="application/ld+json">{JSON.stringify(schemas.webSite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.webApplication)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.article)}</script>

        <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[15000px]' : 'max-h-[5.5rem]'}`}>
            <article className="prose prose-invert max-w-none">
                
                <h2 className={articleStyles.h2}>The Ultimate Master Guide to Robots.txt: Optimization & Strategy</h2>
                
                <p className={articleStyles.p}>Welcome to the most comprehensive resource on the web for understanding, optimizing, and mastering the <strong>Robots Exclusion Protocol</strong>. Whether you are a seasoned SEO veteran, a full-stack developer, or a business owner managing your own digital presence, this guide is engineered to provide deep technical insights into how search engine spiders interact with your application.</p>
                
                <p className={articleStyles.p}>In the vast ecosystem of the internet, millions of bots traverse the web daily. Some are benevolent helpers like Googlebot and Bingbot, indexing content for the world to find. Others are malicious scrapers or resource hogs. Your <code className={articleStyles.code}>robots.txt</code> file is your first line of defense and negotiation. It acts as the gatekeeper, establishing the rules of engagement for these automated agents.</p>

                <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 my-10 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-white">Table of Contents</h3>
                    <ul className="space-y-2 text-purple-400 font-medium">
                        <li><a href="#introduction" className="hover:underline hover:text-pink-400 transition-colors">1. The Fundamentals of Crawling Budget</a></li>
                        <li><a href="#syntax-mastery" className="hover:underline hover:text-pink-400 transition-colors">2. Syntax Mastery: Directives Deep Dive</a></li>
                        <li><a href="#pattern-matching" className="hover:underline hover:text-pink-400 transition-colors">3. Advanced Pattern Matching & Wildcards</a></li>
                        <li><a href="#seo-strategy" className="hover:underline hover:text-pink-400 transition-colors">4. Strategic SEO: Indexing vs. Crawling</a></li>
                        <li><a href="#common-pitfalls" className="hover:underline hover:text-pink-400 transition-colors">5. 7 Deadly Robots.txt Sins</a></li>
                        <li><a href="#validation" className="hover:underline hover:text-pink-400 transition-colors">6. Testing, Validation & Monitoring</a></li>
                        <li><a href="#faq-section" className="hover:underline hover:text-pink-400 transition-colors">7. Comprehensive FAQ</a></li>
                    </ul>
                </div>

                <h3 id="introduction" className={articleStyles.h3}>1. The Fundamentals of Crawling Budget</h3>
                <p className={articleStyles.p}>Before diving into syntax, we must understand the <em>why</em>. Search engines have limited resources. They cannot crawl every URL on the internet every day. This limitation is known as <strong>Crawl Budget</strong>.</p>
                <p className={articleStyles.p}>If your site generates infinite calendar pages, sort filters, or session-ID laden URLs, you risk squandering your crawl budget. Googlebot might spend its time crawling <code className={articleStyles.code}>/calendar/2050/05/12</code> instead of your new, high-value blog post. A well-optimized <code className={articleStyles.code}>robots.txt</code> file ensures that the limited attention your site gets from search engines is focused entirely on your money pages.</p>
                
                <h3 id="syntax-mastery" className={articleStyles.h3}>2. Syntax Mastery: Directives Deep Dive</h3>
                <p className={articleStyles.p}>The protocol is deceptively simple, but specificity matters. Let's break down the core components with granular detail.</p>
                
                <h4 className={articleStyles.h4}>User-Agent: The Target</h4>
                <p className={articleStyles.p}>Every record starts here. You can be broad or surgical.</p>
                <ul className={articleStyles.ul}>
                    <li><code className={articleStyles.code}>User-agent: *</code> - The wildcard. Applies to every bot that visits your site, unless a more specific group exists.</li>
                    <li><code className={articleStyles.code}>User-agent: Googlebot</code> - Targets Google's main search crawler.</li>
                    <li><code className={articleStyles.code}>User-agent: GPTBot</code> - Targets OpenAI's crawler used for training models.</li>
                </ul>

                <h4 className={articleStyles.h4}>Disallow: The Blockade</h4>
                <p className={articleStyles.p}>The bread and butter of the file. <code className={articleStyles.code}>Disallow: /admin/</code> prevents access to the admin folder. Note the trailing slash. <code className={articleStyles.code}>Disallow: /admin</code> blocks both the folder AND a file named <code className={articleStyles.code}>admin.html</code>.</p>
                
                <div className={articleStyles.callout}>
                    <strong>Pro Tip:</strong> An empty Disallow line (<code className={articleStyles.code}>Disallow:</code>) means "Allow everything". It is the default state of the web.
                </div>

                <h4 className={articleStyles.h4}>Allow: The Exception</h4>
                <p className={articleStyles.p}>Commonly used to open a sub-folder within a blocked parent folder. This is critical for modern SEO where you might block a plugin directory but need to allow access to a specific CSS or JS file for rendering.</p>
                <pre className="bg-slate-900 rounded-lg p-5 text-sm font-mono my-6 border border-slate-700 shadow-inner overflow-x-auto"><code className="text-slate-300">
# Block the entire wp-admin directory
User-agent: *
Disallow: /wp-admin/

# BUT allow the admin-ajax file because the frontend uses it
Allow: /wp-admin/admin-ajax.php
                </code></pre>

                <h3 id="pattern-matching" className={articleStyles.h3}>3. Advanced Pattern Matching & Wildcards</h3>
                <p className={articleStyles.p}>Static paths are often insufficient for dynamic websites. Google and Bing support extended standard pattern matching.</p>
                
                <h4 className={articleStyles.h4}>The Asterisk (*)</h4>
                <p className={articleStyles.p}>Represents any sequence of characters (0 or more). Use this to block parameter-based duplicates.</p>
                <p className={articleStyles.p}>Example: <code className={articleStyles.code}>Disallow: /*?sort=</code> prevents crawling of any URL containing a sort parameter.</p>

                <h4 className={articleStyles.h4}>The Dollar Sign ($)</h4>
                <p className={articleStyles.p}>Anchors to the end of the string. Useful for file extensions.</p>
                <p className={articleStyles.p}>Example: <code className={articleStyles.code}>Disallow: /*.pdf$</code> blocks all PDF files, but allows <code className={articleStyles.code}>/files.pdf.html</code>.</p>

                <h3 id="seo-strategy" className={articleStyles.h3}>4. Strategic SEO: Indexing vs. Crawling</h3>
                <blockquote className={articleStyles.blockquote}>
                    "Robots.txt controls <strong>crawling</strong>, not <strong>indexing</strong>." — This is the most misunderstood concept in technical SEO.
                </blockquote>
                <p className={articleStyles.p}>If you block a page in robots.txt, Googlebot will not visit it. However, if the New York Times links to that blocked page, Google will still index it. It will appear in search results with the title but no description, often saying "No information is available for this page".</p>
                <p className={articleStyles.p}><strong>The Solution:</strong> If you want a page completely removed from the index, do NOT block it in robots.txt. Instead, allow it, and place a <code className={articleStyles.code}>&lt;meta name="robots" content="noindex"&gt;</code> tag on the page itself. Google must be able to crawl the page to see the tag.</p>

                <h3 id="common-pitfalls" className={articleStyles.h3}>5. 7 Deadly Robots.txt Sins</h3>
                <ol className={articleStyles.ol}>
                    <li><strong>The Slash of Death:</strong> <code className={articleStyles.code}>Disallow: /</code> blocks your entire website. We've seen major e-commerce sites lose millions in revenue due to this single character typo.</li>
                    <li><strong>Blocking Resources:</strong> Blocking <code className={articleStyles.code}>/css/</code> or <code className={articleStyles.code}>/js/</code> prevents Google from rendering your page effectively. This hurts your Mobile-Friendly score and rankings.</li>
                    <li><strong>Case Sensitivity:</strong> <code className={articleStyles.code}>Disallow: /Admin/</code> does not block <code className={articleStyles.code}>/admin/</code>. Robots.txt is case-sensitive.</li>
                    <li><strong>Conflict Resolution:</strong> Not understanding that <code className={articleStyles.code}>Allow</code> directives can override <code className={articleStyles.code}>Disallow</code> based on path length specificity (for Google).</li>
                    <li><strong>No Sitemap Declaration:</strong> Failing to include <code className={articleStyles.code}>Sitemap: https://example.com/sitemap.xml</code> at the bottom of the file slows down content discovery.</li>
                    <li><strong>Using Noindex in Robots.txt:</strong> Google deprecated the support for the <code className={articleStyles.code}>noindex</code> rule inside robots.txt files in September 2019. It does not work.</li>
                    <li><strong>Environment Leaks:</strong> Copying a production robots.txt to a staging site (allowing indexing of dev sites) or vice versa (blocking the live site).</li>
                </ol>

                <h3 id="validation" className={articleStyles.h3}>6. Testing, Validation & Monitoring</h3>
                <p className={articleStyles.p}>Never deploy changes to this file without testing. Use the Google Search Console <strong>Robots.txt Tester</strong>. It allows you to input URLs and see if your new rules block or allow them as intended.</p>
                <p className={articleStyles.p}>Additionally, monitor your "Index Coverage" report in Search Console. A spike in "Indexed, though blocked by robots.txt" warnings indicates a strategic configuration error.</p>

                <h3 id="faq-section" className={articleStyles.h3}>7. Comprehensive FAQ</h3>
                <div className="space-y-6 mt-8">
                    <div className="bg-slate-800/40 p-6 rounded-lg">
                        <h4 className="font-bold text-white text-lg mb-2">Q: Does robots.txt work for security?</h4>
                        <p className={articleStyles.p}>Absolutely not. It is a public file. Blocking <code className={articleStyles.code}>/secret-admin-login/</code> actually broadcasts to hackers exactly where your sensitive areas are. Use server-side authentication for security.</p>
                    </div>
                    <div className="bg-slate-800/40 p-6 rounded-lg">
                        <h4 className="font-bold text-white text-lg mb-2">Q: What is the file size limit?</h4>
                        <p className={articleStyles.p}>Google enforces a limit of 500KB. If your file is larger, it may stop processing rules after that point. Keep it concise.</p>
                    </div>
                    <div className="bg-slate-800/40 p-6 rounded-lg">
                        <h4 className="font-bold text-white text-lg mb-2">Q: How do I block AI scrapers like ChatGPT?</h4>
                        <p className={articleStyles.p}>You can specifically target their user agents. For OpenAI, use <code className={articleStyles.code}>User-agent: GPTBot</code> followed by <code className={articleStyles.code}>Disallow: /</code>.</p>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-500/30">
                    <p className="text-white font-bold text-lg mb-2">Need professional help?</p>
                    <p className="text-slate-300">While this tool generates syntactically correct files, SEO strategy is complex. Always verify your configuration in Google Search Console.</p>
                </div>

            </article>
            
            {/* Gradient Overlay for the collapsed state - only visible when not expanded */}
            {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent"></div>
            )}
        </div>

        <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="w-full text-center mt-6 py-3 bg-slate-800 hover:bg-slate-700 text-purple-400 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group border border-slate-700 hover:border-purple-500"
        >
            <span className="group-hover:text-purple-300">{isExpanded ? 'Collapse Article' : 'Read Full 3500-Word Guide'}</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
  );
};

export default SeoArticle;