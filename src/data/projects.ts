import { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "project-one",
        name: "Enterprise SaaS Dashboard",
        shortDescription: "I built a high-performance analytics dashboard for real-time product and revenue monitoring.",
        role: "Frontend Engineer",
        timeline: "Jan 2024 - Mar 2024",
        team: "Solo Project",
        stack: ["React", "TypeScript", "Next.js", "D3.js", "Tailwind"],

        problemStatement: "I wanted to visualize large event streams and KPI trends without lag, even when users applied multiple filters at once.",
        solutionOverview: "I built the dashboard with Next.js and TypeScript, used D3 for custom charts, and added virtualization plus web workers to keep interactions smooth.",

        keyFeatures: [
            { title: "Live KPI Updates", desc: "WebSocket pipeline for near real-time chart and table updates." },
            { title: "Custom Dashboard Views", desc: "Configurable widgets and saved filter presets for different workflows." },
            { title: "Drill-Down Analytics", desc: "Click-through views from high-level charts into detailed row data." },
            { title: "Export Tools", desc: "CSV and PDF export for quick reporting." }
        ],
        technicalChallenges: [
            { title: "Large dataset rendering", desc: "Rendering 10k+ rows caused frame drops. I solved it with list virtualization and memoized chart layers." },
            { title: "Complex UI state", desc: "Cross-widget filters became difficult to synchronize. I introduced a predictable store structure with normalized state." }
        ],

        github: "#",
        demo: "#"
    },
    {
        id: "project-two",
        name: "E-Commerce Platform",
        shortDescription: "I built a headless e-commerce storefront focused on speed, SEO, and smooth checkout flows.",
        role: "Fullstack Developer",
        timeline: "Aug 2023 - Dec 2023",
        team: "Solo Project",
        stack: ["Next.js", "Shopify API", "Redis", "Vercel"],

        problemStatement: "I wanted more control than template-based stores usually allow, while still keeping pages very fast and SEO-friendly.",
        solutionOverview: "I used Next.js static generation for product pages, added cache-aware server logic for cart and search, and optimized assets for fast mobile performance.",

        keyFeatures: [
            { title: "Headless Storefront", desc: "Custom frontend powered by the Shopify Storefront API." },
            { title: "Fast Product Search", desc: "Search with smart matching and quick response times." },
            { title: "Persistent Cart", desc: "Cart state remains consistent across sessions and devices." },
            { title: "SEO Foundation", desc: "Metadata, structured content, and optimized routing for discoverability." }
        ],
        technicalChallenges: [
            { title: "Inventory consistency", desc: "I needed to prevent stale stock states during high traffic. I used server validation before final checkout updates." },
            { title: "Media performance", desc: "Large product images slowed first paint. I added responsive image sizing and aggressive caching." }
        ],

        github: "#",
        demo: "#"
    },
    {
        id: "project-three",
        name: "Task Management App",
        shortDescription: "I built a collaborative task manager with offline-first behavior and reliable sync.",
        role: "Frontend Developer",
        timeline: "May 2023 - July 2023",
        team: "2 Developers",
        stack: ["Vue.js", "Firebase", "PWA", "IndexedDB"],

        problemStatement: "I wanted the app to remain fully usable with unstable internet and then sync changes safely once the connection returned.",
        solutionOverview: "I built a PWA with local persistence in IndexedDB and background sync flows to merge offline edits with cloud state.",

        keyFeatures: [
            { title: "Offline-First Tasks", desc: "Users can create, edit, and reorder tasks with no connection." },
            { title: "Real-Time Updates", desc: "Changes sync instantly when collaborators are online." },
            { title: "Background Sync", desc: "Queued local changes are retried automatically when network access returns." }
        ],
        technicalChallenges: [
            { title: "Merge conflicts", desc: "Concurrent edits could overwrite user intent. I added conflict rules and manual resolution prompts for important fields." },
            { title: "PWA reliability", desc: "Service worker lifecycle edge cases caused stale UI. I tightened cache invalidation and update prompts." }
        ],

        github: "#"
    }
];
