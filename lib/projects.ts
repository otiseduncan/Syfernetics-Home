export const projects = [
  {
    slug: 'ai-threat-detection',
    title: 'AI Threat Detection Engine',
    type: 'API Microservice',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'HuggingFace', 'Docker'],
    summary: 'A self-learning microservice built to detect zero-day threats using NLP and behavior anomaly scoring. Deployed as a secure REST API that integrates into SIEM and SOC environments.',
  },
  {
    slug: 'cyber-dashboard',
    title: 'Network Intrusion Command Dashboard',
    type: 'Internal SaaS Platform',
    stack: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'Socket.io'],
    summary: 'Built a real-time dashboard for monitoring network traffic, threat alerts, and endpoint behaviors. Designed for internal security teams to manage alerts and response playbooks visually.',
  },
  {
    slug: 'devops-secure-pipeline',
    title: 'Secure DevOps CI/CD Pipeline',
    type: 'Automation / Infrastructure',
    stack: ['GitHub Actions', 'Docker', 'SonarQube', 'Terraform', 'AWS'],
    summary: 'Architected a hardened CI/CD pipeline with automated testing, secrets scanning, container image signing, and cloud infrastructure provisioning via Terraform.',
  },
  {
    slug: 'automotive-edge-ai',
    title: 'ADAS-Linked Automotive Diagnostic Agent',
    type: 'Edge AI System',
    stack: ['Python', 'Raspberry Pi', 'CANBus', 'OpenCV', 'Flask'],
    summary: 'Merged automotive diagnostics with AI to read CAN data and ADAS system states. Built a self-hosted web interface to display real-time sensor data, predict failures, and generate fix logs.',
  },
]