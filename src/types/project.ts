export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    role: string;
    timeline: string;
    team: string; // e.g., "Solo", "3 Developers"
    stack: string[]; // Main technologies used

    // Project Story
    overview: string;
    motivation: string;
    architecture: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        infrastructure?: string[];
        integrations?: string[];
    };
    engineeringDecisions: string[];
    challenges: { challenge: string; solution: string }[];
    performance: string[];
    lessons: string[];
    futureImprovements: string[];
    gallery?: { label: string; image?: string }[];

    // Project Narrative
    problemStatement: string;
    solutionOverview: string;

    // Lists
    keyFeatures: { title: string; desc: string }[];
    technicalChallenges: { title: string; desc: string }[];

    // Links
    github?: string;
    demo?: string;
    docs?: string;
    image?: string; // Placeholder for future
}

