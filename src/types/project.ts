export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    role: string;
    timeline: string;
    team: string; // e.g., "Solo", "3 Developers"
    stack: string[]; // Main technologies used

    // Project Narrative
    problemStatement: string;
    solutionOverview: string;

    // Lists
    keyFeatures: { title: string; desc: string }[];
    technicalChallenges: { title: string; desc: string }[];

    // Links
    github?: string;
    demo?: string;
    image?: string; // Placeholder for future
}

