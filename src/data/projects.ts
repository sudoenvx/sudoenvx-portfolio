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
        overview:
            "A real-time analytics dashboard for product, revenue, and cohort performance. The platform consolidates event streams, aggregates KPIs, and surfaces insights for product and growth teams.",
        motivation:
            "Leadership needed a single source of truth for revenue and product usage, but existing reports were slow, inconsistent, and hard to explore. The project focused on building a fast, reliable, and explainable analytics experience.",
        architecture: {
            frontend: ["Next.js application with modular widgets and dynamic layouts."],
            backend: ["API layer for aggregated metrics and cohort queries."],
            database: ["Analytics warehouse for historical data and rollups."],
            infrastructure: ["WebSocket channel for live updates and alerts."],
        },
        engineeringDecisions: [
            "Used typed query builders to keep complex KPI queries consistent across views.",
            "Introduced virtualization and memoized chart layers for stable 60fps interactions.",
            "Adopted a predictable state model to keep filters and comparisons in sync."
        ],
        challenges: [
            {
                challenge: "Rendering 10k+ rows and charts without UI jitter.",
                solution: "Applied list virtualization, memoized chart primitives, and diffed updates per filter change."
            },
            {
                challenge: "Complex cross-widget filters were hard to keep in sync.",
                solution: "Centralized filter state with normalized data and explicit derived selectors."
            }
        ],
        performance: [
            "Optimized chart renders to avoid full reflow on filter changes.",
            "Cached heavy KPI queries with short TTL to keep dashboards responsive."
        ],
        lessons: [
            "Realtime UX depends more on predictable state and throttled updates than raw API speed.",
            "Small, composable widgets make dashboards easier to evolve."
        ],
        futureImprovements: [
            "Add alerting based on KPI thresholds.",
            "Introduce saved dashboards with team-level sharing."
        ],
        gallery: [
            {
                label: "KPI overview",
                image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            },
            {
                label: "Cohort analysis",
                image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            },
            {
                label: "Revenue breakdown",
                image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            }
        ],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

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
        overview:
            "A headless commerce storefront that prioritizes speed, SEO, and a frictionless checkout. The system combines a fast static front end with a cache-aware API layer.",
        motivation:
            "Template-based stores limited control over performance and conversion flows. This project aimed to deliver a custom buying experience while keeping deployment simple.",
        architecture: {
            frontend: ["Next.js storefront with server components and static generation."],
            backend: ["API routes for cart, search, and product hydration."],
            database: ["Shopify backend for catalog, inventory, and orders."],
            infrastructure: ["Edge caching and ISR for global performance."]
        },
        engineeringDecisions: [
            "Combined static generation with cache-aware APIs to keep catalog pages fast.",
            "Implemented a resilient cart sync flow to preserve user intent across devices.",
            "Optimized media with responsive formats to improve mobile performance."
        ],
        challenges: [
            {
                challenge: "Avoiding stale inventory data at checkout.",
                solution: "Validated stock server-side before purchase and refreshed cart state when needed."
            },
            {
                challenge: "Large product imagery slowed first paint on mobile.",
                solution: "Added responsive image sizing and aggressive CDN caching."
            }
        ],
        performance: [
            "ISR combined with edge caching reduced product page TTFB.",
            "Search responses optimized with short-lived caches and indexed queries."
        ],
        lessons: [
            "Headless commerce succeeds when SEO, performance, and UX are designed together.",
            "Small API layers can unlock big improvements in checkout flow control."
        ],
        futureImprovements: [
            "Add personalization and recommendation surfaces.",
            "Introduce a loyalty and rewards system."
        ],
        gallery: [
            {
                label: "Product listing",
                image:
                    "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            },
            {
                label: "Product detail",
                image:
                    "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            },
            {
                label: "Checkout flow",
                image:
                    "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            }
        ],
        image:
            "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

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
        overview:
            "A collaborative task manager built as an offline-first PWA. Users can create, edit, and reorder tasks without connectivity and sync seamlessly when they return online.",
        motivation:
            "Teams needed a lightweight task tracker that remains usable on unstable connections. The goal was to deliver reliability and low-friction collaboration.",
        architecture: {
            frontend: ["Vue.js PWA with local-first storage and optimistic UI."],
            backend: ["Firebase services for realtime sync and auth."],
            database: ["IndexedDB for offline persistence and merge queues."],
            integrations: ["Background sync for retrying updates."]
        },
        engineeringDecisions: [
            "Adopted local-first writes to keep the app responsive offline.",
            "Used conflict resolution rules to preserve user intent.",
            "Designed a minimal task data model to keep sync fast."
        ],
        challenges: [
            {
                challenge: "Concurrent edits causing overwrite conflicts.",
                solution: "Implemented merge rules and surfaced manual resolution when needed."
            },
            {
                challenge: "Service worker edge cases caused stale UI.",
                solution: "Introduced cache invalidation and update prompts on new builds."
            }
        ],
        performance: [
            "Optimistic updates kept interactions instant even during sync retries.",
            "Reduced payload sizes for faster background sync."
        ],
        lessons: [
            "Offline-first UX requires careful state reconciliation and user feedback.",
            "Background sync is most reliable when changes are small and atomic."
        ],
        futureImprovements: [
            "Add real-time presence and activity streams.",
            "Expand analytics for team productivity insights."
        ],
        gallery: [
            {
                label: "Task board",
                image: "https://unsplash.com/photos/RLw-UC03Gwc/download?force=true"
            },
            {
                label: "Task editor",
                image: "https://unsplash.com/photos/RLw-UC03Gwc/download?force=true"
            },
            {
                label: "Offline mode",
                image: "https://unsplash.com/photos/RLw-UC03Gwc/download?force=true"
            }
        ],
        image: "https://unsplash.com/photos/RLw-UC03Gwc/download?force=true",

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
