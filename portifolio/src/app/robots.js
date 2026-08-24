const siteUrl = "https://kayque-dev.vercel.app";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
        },

        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}