export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/gurunadhmalli/",
    handle: "@gurunadhmalli",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gurunadh-malli-ai",
    handle: "in/gurunadh-malli-ai",
  },
  {
    label: "Email",
    href: "mailto:gurunadhmalli55@gmail.com",
    handle: "gurunadhmalli55@gmail.com",
  },
];

export const email = "gurunadhmalli55@gmail.com";
export const phone = { display: "+91 99083 41691", href: "tel:+919908341691" };
export const resumeUrl = "/resume.pdf";

export type Hero = {
  name: string;
  role: string;
  location: string;
  currently: string;
  headline: string;
  headlineEmphasis: string;
  intro: string;
  photo: string;
};

export const hero: Hero = {
  name: "Gurunadh Malli",
  role: "Founding Engineer – Forward Deployed Engineer",
  location: "Hyderabad, India",
  currently: "Founding Engineer (FDE) at Sagara Global",
  headline: "I build agentic AI systems that",
  headlineEmphasis: "ship to production.",
  intro:
    "Multi-agent workflows, advanced RAG and Model Context Protocol integrations — engineered with the guardrails, observability and security that real products need.",
  photo: "/profile.jpg",
};

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "2", label: "Production AI platforms shipped" },
  { value: "5", label: "LLM providers orchestrated" },
  { value: "7", label: "Vector & graph stores in practice" },
  { value: "<200ms", label: "Real-time ML risk scoring" },
];

export type Summary = {
  profileSummary: string;
  paragraphs: string[];
};

export const summary: Summary = {
  profileSummary:
    "Founding Engineer and Forward Deployed Engineer building production Generative AI and Agentic AI systems, from multi-agent workflows and advanced RAG to Model Context Protocol (MCP) integrations.",
  paragraphs: [
    "As a Founding Engineer and Forward Deployed Engineer, I build production Generative AI and Agentic AI systems — from multi-agent workflows and advanced RAG to Model Context Protocol (MCP) integrations that bring product modules straight into ChatGPT and Claude Desktop.",
    "My work sits where LLMs meet real software: OAuth 2.1-secured connectors, agent harnesses with hooks and skills for safe tool execution, LangSmith tracing to catch regressions before release, and multi-LLM orchestration across AWS Bedrock (Claude), Gemini, OpenAI, Cohere and Groq.",
    "Underneath it all is a solid engineering stack — Django, FastAPI, React/TypeScript and AWS serverless with GitHub Actions CI/CD — plus a grounding in classical ML for real-time decision systems.",
  ],
};

export type Focus = {
  title: string;
  description: string;
};

export const focusAreas: Focus[] = [
  {
    title: "Agentic systems",
    description:
      "LangGraph multi-agent workflows, tool calling, human-in-the-loop and agent memory — wrapped in harnesses with hooks, guardrails and audit logs.",
  },
  {
    title: "Retrieval & RAG",
    description:
      "Hybrid dense + BM25 search, re-ranking, query rewriting, GraphRAG and RAGAS evaluation for grounded, cited answers.",
  },
  {
    title: "MCP & secure integrations",
    description:
      "Remote MCP connectors for ChatGPT and Claude Desktop with OAuth 2.1, PKCE, dynamic client registration, scoped tokens and RBAC.",
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  grade: string;
};

export const education: Education = {
  degree: "Bachelor of Electrical and Electronics Engineering",
  school: "Audisankara Institute of Technology",
  location: "Gudur, Andhra Pradesh",
  period: "2022 – 2025",
  grade: "CGPA 8.73 / 10",
};

export type ExperienceProject = {
  name: string;
  tagline: string;
  stack: string[];
  highlights: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  projects: ExperienceProject[];
};

export const experience: Experience[] = [
  {
    role: "Founding Engineer – Forward Deployed Engineer",
    company: "Sagara Global",
    location: "Hyderabad, India",
    period: "Oct 2025 – Present",
    current: true,
    projects: [
      {
        name: "TradeEximOS",
        tagline: "AI Sales, CRM & Marketing Automation Platform",
        stack: [
          "Python",
          "Django",
          "FastAPI",
          "LangChain",
          "LangGraph",
          "LangSmith",
          "MCP",
          "AWS Bedrock",
          "Pinecone",
          "PostgreSQL",
          "Playwright",
        ],
        highlights: [
          "Built a multi-tenant AI Sales Intelligence, CRM and Marketing Automation platform combining LLM assistants, RAG and agentic workflows to automate lead management, opportunity analysis, content generation and campaign execution.",
          "Shipped the Marketing module as a remote MCP connector for ChatGPT and Claude Desktop, secured with OAuth 2.1 (PKCE, dynamic client registration, scoped tokens).",
          "Designed an agent harness with pre/post tool-call hooks for validation, guardrails, permission checks and audit logging, plus modular skills per sales and marketing task.",
          "Implemented LangSmith observability across all agents — tracing runs, tool calls, tokens and latency, with prompt versioning to catch regressions before release.",
          "Built a LangGraph sales assistant on AWS Bedrock (Claude Sonnet & Haiku) delivering next-best actions, multilingual email drafting and scheduling via Microsoft Graph API.",
          "Built a LangGraph Content Strategy Agent and a modular Content Engine (Playwright + LLMs, factory pattern) generating images, HTML, PDFs and PPTs via MCP-orchestrated workflows.",
          "Built a production RAG service with Amazon Titan embeddings, hybrid retrieval (semantic + BM25), metadata filtering, re-ranking and OCR, backed by FastAPI ingestion and Pinecone.",
          "Separated business logic (Django) from AI services (FastAPI); added OAuth2/JWT auth and RBAC across tenants, plus OAuth2 integrations with Outlook, Instagram, Facebook, LinkedIn, Twitter and HubSpot scheduled via Google Cloud Tasks.",
        ],
      },
      {
        name: "Emboss",
        tagline: "AI-Powered HR Management Platform",
        stack: [
          "Python",
          "Django",
          "SQL",
          "React",
          "TypeScript",
          "LangChain",
          "LangGraph",
          "Google Gemini",
        ],
        highlights: [
          "Developed role-based automation and workflow agents with LangChain and LangGraph on Google Gemini, calling multiple HR tools to cut manual effort.",
          "Built scalable Django + SQL APIs for HR workflows with a React and TypeScript frontend for employees, managers and HR admins.",
          "Automated the employee lifecycle — onboarding, documents, attendance, leave and payroll.",
          "Integrated LLM-based resume parsing into structured profiles and smart, context-aware notifications.",
        ],
      },
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Ignitz Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Mar 2025 – Oct 2025",
    projects: [
      {
        name: "Enterprise RAG Chatbot",
        tagline: "& Executive Intelligence Assistant",
        stack: [
          "Python",
          "FastAPI",
          "LangChain",
          "LangGraph",
          "Cohere",
          "Groq",
          "Gemini",
          "Qdrant",
          "FAISS",
          "Neo4j",
          "RAGAS",
        ],
        highlights: [
          "Built an end-to-end RAG chatbot over enterprise construction documents, orchestrating Cohere, Groq and Gemini with complexity-based routing and automatic fallback.",
          "Parsed PDF, DOCX, spreadsheets and scans (OCR) with metadata enrichment; recursive, semantic and parent-child chunking with tuned overlap.",
          "Query rewriting and multi-query expansion; dense + BM25 fused with Reciprocal Rank Fusion; self-query filtering, Cohere Rerank and contextual compression.",
          "Cited, grounded answers with conversational memory, streaming, hallucination guardrails and semantic caching — tuned and evaluated with RAGAS.",
        ],
      },
    ],
  },
];

export type ProjectLinks = {
  github?: string;
  demo?: string;
};

export type Project = {
  category: string;
  title: string;
  context: string;
  summary: string;
  impact: string;
  stack: string[];
  // Nodes for the architecture diagram shown as the card's preview image
  diagram: string[];
  featured?: boolean;
  problem?: string;
  built?: string[];
  // Add public URLs here; buttons only render when a link is set
  links?: ProjectLinks;
};

export const projects: Project[] = [
  {
    category: "MCP · Security",
    title: "Remote MCP Marketing Connector",
    context: "TradeEximOS · Sagara Global",
    summary:
      "Turned the platform's Marketing module into a secure remote MCP connector for ChatGPT and Claude Desktop.",
    problem:
      "Marketers had to leave their AI assistant and switch into the platform to run campaigns, strategies and content workflows.",
    built: [
      "Remote MCP server exposing campaigns, strategy and content as tools",
      "OAuth 2.1 with PKCE, dynamic client registration and scoped tokens",
      "Tenant-aware RBAC enforced on every tool call",
    ],
    impact:
      "Users run campaigns, strategies and content workflows directly from ChatGPT and Claude Desktop.",
    stack: ["MCP", "OAuth 2.1", "FastAPI", "Django", "AWS"],
    diagram: ["ChatGPT / Claude", "OAuth 2.1", "MCP Server", "Marketing"],
    featured: true,
  },
  {
    category: "Agentic AI",
    title: "Agent Harness with Hooks & Skills",
    context: "TradeEximOS · Sagara Global",
    summary:
      "A control layer with pre/post tool-call hooks, permission checks, audit logging and modular skills for every agent.",
    impact: "Safe, auditable tool execution, with regressions caught before release via LangSmith.",
    stack: ["LangGraph", "LangSmith", "Bedrock"],
    diagram: ["Agent", "Pre-hook", "Tool", "Audit"],
  },
  {
    category: "Retrieval · RAG",
    title: "Enterprise RAG Chatbot",
    context: "Ignitz Solutions",
    summary:
      "Hybrid dense + BM25 retrieval fused with RRF, Cohere Rerank and multi-LLM routing over enterprise construction documents.",
    impact: "Cited, grounded answers and executive insights for C-suite leaders, evaluated with RAGAS.",
    stack: ["Qdrant", "FAISS", "Cohere", "Groq", "RAGAS"],
    diagram: ["Query", "Hybrid search", "Rerank", "Answer"],
  },
  {
    category: "Agentic AI",
    title: "LangGraph Sales Assistant",
    context: "TradeEximOS · Sagara Global",
    summary:
      "Reads leads, opportunities and interactions to recommend next-best actions, then drafts and schedules multilingual emails.",
    impact: "Sales teams get decision support and outreach in one assistant.",
    stack: ["LangGraph", "Claude", "Graph API"],
    diagram: ["CRM data", "LangGraph", "Claude", "Outlook"],
  },
  {
    category: "Generative AI",
    title: "AI Content Engine",
    context: "TradeEximOS · Sagara Global",
    summary:
      "A factory-pattern engine with dynamic JSON class loading that renders images, HTML, PDFs and PPTs from agent instructions.",
    impact: "One MCP-orchestrated pipeline for every marketing asset format.",
    stack: ["Playwright", "LLMs", "MCP"],
    diagram: ["Agent", "MCP", "Factory", "Assets"],
  },
  {
    category: "Agentic AI",
    title: "Emboss HR Agents",
    context: "Emboss · Sagara Global",
    summary:
      "Role-based workflow agents on Gemini automating onboarding, attendance, leave and payroll, plus LLM resume parsing.",
    impact: "Less manual HR effort and more accurate operations.",
    stack: ["LangGraph", "Gemini", "Django", "React"],
    diagram: ["Employee", "HR agent", "HR tools", "Payroll"],
  },
  {
    category: "Machine Learning",
    title: "Fraud Detection & Risk Engine",
    context: "Real-time ML",
    summary:
      "Streams card transactions through an XGBoost + Isolation Forest hybrid to approve, block or step-up verify.",
    impact: "Risk scores served in under 200ms with fewer false positives.",
    stack: ["XGBoost", "Scikit-learn", "FastAPI"],
    diagram: ["Transaction", "Features", "Hybrid model", "Decision"],
  },
];

export type ApproachStep = {
  title: string;
  description: string;
  tools: string;
};

export const approach: ApproachStep[] = [
  {
    title: "Understand",
    description: "Sit with users and map the real workflow, data and constraints before writing code.",
    tools: "Discovery · scoping",
  },
  {
    title: "Design",
    description: "Choose agents, retrieval strategy, tools and security boundaries for the problem.",
    tools: "LangGraph · MCP · RAG",
  },
  {
    title: "Build",
    description: "Ship services with clean separation between business logic and AI.",
    tools: "FastAPI · Django · AWS",
  },
  {
    title: "Evaluate",
    description: "Measure faithfulness, relevance and latency, and tune until the numbers hold.",
    tools: "RAGAS · LangSmith",
  },
  {
    title: "Ship & observe",
    description: "Deploy with guardrails, tracing and CI/CD so regressions surface early.",
    tools: "GitHub Actions · tracing",
  },
];

export type SkillIcon = "spark" | "agent" | "search" | "shield" | "database" | "code" | "cloud" | "chart" | "pulse";

export type SkillGroup = {
  category: string;
  icon: SkillIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Generative AI",
    icon: "spark",
    skills: [
      "AWS Bedrock (Claude, Titan)",
      "OpenAI",
      "Google Gemini",
      "Cohere",
      "Groq",
      "Prompt Engineering",
      "Fine-tuning",
    ],
  },
  {
    category: "Agentic AI",
    icon: "agent",
    skills: [
      "LangChain",
      "LangGraph",
      "Google ADK",
      "Multi-Agent Systems",
      "Tool Calling",
      "Agent Harness",
      "Hooks & Skills",
      "Human-in-the-Loop",
      "Agent Memory",
    ],
  },
  {
    category: "RAG",
    icon: "search",
    skills: [
      "Hybrid Search (Dense + BM25)",
      "Re-ranking",
      "Metadata Filtering",
      "Advanced Chunking",
      "Query Rewriting",
      "Multi-Query",
      "Contextual Compression",
      "GraphRAG",
    ],
  },
  {
    category: "MCP & Security",
    icon: "shield",
    skills: [
      "MCP Servers & Clients",
      "Remote MCP Connectors",
      "OAuth 2.1",
      "OAuth2",
      "JWT",
      "RBAC",
    ],
  },
  {
    category: "Vector & Graph DBs",
    icon: "database",
    skills: ["Pinecone", "Qdrant", "Weaviate", "Milvus", "pgvector", "FAISS", "Neo4j"],
  },
  {
    category: "Languages & Frameworks",
    icon: "code",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Django", "FastAPI", "React", "HTML/CSS"],
  },
  {
    category: "AWS Cloud",
    icon: "cloud",
    skills: [
      "Bedrock",
      "Lambda",
      "Lambda Durable Functions",
      "EC2",
      "S3",
      "SQS",
      "SNS",
      "SES",
      "RDS",
      "CloudWatch",
      "SageMaker",
    ],
  },
  {
    category: "Machine Learning",
    icon: "chart",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Scikit-learn",
      "XGBoost",
      "Isolation Forest",
      "Pandas",
      "NumPy",
      "CNN / RNN",
      "Transformers",
      "NLTK / spaCy",
      "OCR",
    ],
  },
  {
    category: "Observability & DevOps",
    icon: "pulse",
    skills: [
      "LangSmith",
      "RAGAS",
      "GitHub Actions",
      "Git",
      "Google Cloud Tasks",
      "Playwright",
      "Postman",
      "Jira",
      "Agile/Scrum",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
