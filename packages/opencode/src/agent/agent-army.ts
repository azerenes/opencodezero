import type { Info } from "./agent"
import { Permission } from "@/permission"

export const AGENT_ARMY: Record<string, Omit<Info, "options" | "mode" | "native" | "name" | "permission"> & { permission: ReturnType<typeof Permission.fromConfig> }> = {
  "frontend-dev": {
    description: "Specialist in React, Vue, Angular, Tailwind, and modern CSS. Builds responsive UIs with accessibility best practices.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "backend-dev": {
    description: "Specialist in Node.js, Python, Go, Rust, and Java backend services. Designs APIs, databases, and server architecture.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "fullstack-dev": {
    description: "Full-stack developer comfortable with frontend, backend, and everything in between. Handles end-to-end feature implementation.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "devops-engineer": {
    description: "Expert in Docker, Kubernetes, CI/CD, Terraform, and cloud infrastructure (AWS/GCP/Azure). Automates deployments and manages infrastructure as code.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "data-scientist": {
    description: "Specialist in Python data science stack (pandas, numpy, scikit-learn), SQL, and statistical analysis. Builds data pipelines and ML models.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "security-auditor": {
    description: "Security-focused agent that audits code for vulnerabilities, checks OWASP compliance, reviews authentication flows, and suggests security improvements.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "deny", write: "deny" }),
  },
  "code-reviewer": {
    description: "Reviews code for style, correctness, performance, and best practices. Provides detailed feedback and suggests improvements without making changes.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "deny", write: "deny" }),
  },
  "testing-engineer": {
    description: "Writes unit tests, integration tests, and e2e tests. Specializes in testing frameworks (Jest, Vitest, Playwright, Cypress, pytest).",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "documentation-writer": {
    description: "Creates clear, comprehensive documentation. Writes README files, API docs, architecture guides, and inline code comments.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "database-admin": {
    description: "Expert in SQL, NoSQL, schema design, query optimization, migrations, and database administration (PostgreSQL, MySQL, MongoDB, Redis).",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "api-designer": {
    description: "Designs RESTful and GraphQL APIs. Specializes in API contracts, OpenAPI/Swagger specs, request/response models, and error handling.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "mobile-developer": {
    description: "Specialist in React Native, Flutter, and mobile app development. Builds cross-platform mobile applications with native performance.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "performance-engineer": {
    description: "Analyzes and optimizes application performance. Profiles bottlenecks, suggests caching strategies, and improves load times and resource usage.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "refactoring-specialist": {
    description: "Refactors code to improve structure, readability, and maintainability without changing behavior. Applies design patterns and reduces technical debt.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "dependency-manager": {
    description: "Manages project dependencies, updates packages, resolves version conflicts, and migrates breaking changes across ecosystems.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "architecture-advisor": {
    description: "Provides architectural guidance, evaluates trade-offs, designs system diagrams, and recommends technology stacks for projects.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "deny", write: "deny" }),
  },
  "git-workflow-expert": {
    description: "Expert in Git workflows, branching strategies, rebasing, conflict resolution, and CI/CD pipeline integration with version control.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "deny", write: "deny" }),
  },
  "accessibility-expert": {
    description: "Ensures web applications meet WCAG standards. Audits for accessibility issues and implements ARIA patterns, keyboard navigation, and screen reader support.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "prototyping-agent": {
    description: "Rapidly prototypes ideas and proofs-of-concept. Builds working demos quickly with minimal setup and configuration overhead.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "cli-tool-specialist": {
    description: "Builds command-line tools, shell scripts, and terminal applications. Expert in argument parsing, TUI frameworks, and cross-platform compatibility.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "docker-k8s-expert": {
    description: "Specialist in containerization and orchestration. Creates Dockerfiles, docker-compose setups, Kubernetes manifests, and Helm charts.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "ci-cd-engineer": {
    description: "Designs and maintains CI/CD pipelines. Expert in GitHub Actions, GitLab CI, Jenkins, and automated deployment strategies.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "typescript-expert": {
    description: "Deep TypeScript specialist. Designs type systems, writes utility types, and enforces type safety across large codebases.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "python-expert": {
    description: "Python specialist covering Django, FastAPI, Flask, asyncio, pandas, and scientific computing. Writes idiomatic, performant Python code.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "rust-expert": {
    description: "Rust specialist. Writes safe, concurrent systems code. Expert in borrow checker, async Rust, and Cargo ecosystem.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "go-expert": {
    description: "Go specialist. Builds microservices, CLI tools, and concurrent systems. Expert in Go idioms, goroutines, and standard library.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "css-design-expert": {
    description: "CSS and design specialist. Expert in Tailwind, CSS Grid, Flexbox, animations, responsive design, and design system implementation.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "debugging-specialist": {
    description: "Systematic debugger. Analyzes error logs, stack traces, and runtime behavior to identify root causes. Proposes and implements fixes.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "migration-specialist": {
    description: "Handles code and data migrations across versions, frameworks, and platforms. Manages breaking changes and backward compatibility.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
  "design-system-engineer": {
    description: "Builds and maintains design systems. Creates reusable component libraries, defines design tokens, and ensures visual consistency.",
    permission: Permission.fromConfig({ "*": "deny", read: "allow", glob: "allow", grep: "allow", bash: "allow", edit: "allow", write: "allow" }),
  },
}
