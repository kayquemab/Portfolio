const siteUrl = "https://kayque-dev.vercel.app";

export default function sitemap() {
    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/projetos`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/certificados`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}