export const projects = [
  {
    slug: 'syfernetics-home',
    title: 'Syfernetics Home (Legacy Site)',
    type: 'Cybersecurity / Portfolio Website',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    summary:
      'The first-generation Syfernetics site — a static HTML/CSS/JS portfolio built to introduce the Syfernetics brand and services.',
    github: 'https://github.com/otiseduncan/Syfernetics-Home',
    demo: 'https://otiseduncan.github.io/Syfernetics-Home/',
    problem:
      'Syfernetics needed an initial online presence to showcase services in cybersecurity and IT, but had limited resources and needed something quick and lightweight.',
    approach:
      'Built a responsive static site using HTML, CSS, and vanilla JS, deployed to GitHub Pages for free hosting. Designed a clean, cyber-inspired look to introduce the brand.',
    results:
      'Delivered a working website with no hosting costs. Provided a foundation to evolve into a modern Next.js site later on.',
  },
  {
    slug: 'my-favorite-sweet-tea',
    title: 'My Favorite Sweet Tea',
    type: 'Web Project / Personal Showcase',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    summary:
      'A fun, lightweight project demonstrating front-end styling and deployment skills with a branded theme.',
    github: 'https://github.com/otiseduncan/myfavoritesweettea',
    demo: 'https://otiseduncan.github.io/myfavoritesweettea/',
    problem:
      'Needed a small, creative project to practice frontend styling, layout control, and GitHub Pages deployment.',
    approach:
      'Designed a themed single-page site with CSS styling, custom typography, and playful branding. Deployed to GitHub Pages to practice CI/CD.',
    results:
      'Successfully deployed a live project to GitHub Pages, proving front-end workflow skills. Became a showcase piece in the portfolio.',
  },
  {
    slug: 'ai-threat-detection',
    title: 'AI Threat Detection Engine',
    type: 'API Microservice',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'HuggingFace', 'Docker'],
    summary:
      'A self-learning microservice designed to detect zero-day threats using NLP and anomaly scoring. Built as a secure REST API for SIEM/SOC integration.',
    problem:
      'Traditional intrusion detection systems struggled to keep up with zero-day and AI-powered attacks.',
    approach:
      'Developed a Python microservice with FastAPI and HuggingFace models for NLP-based anomaly detection. Containerized with Docker for easy deployment.',
    results:
      'Created an extensible, AI-driven threat engine that integrates with SOC pipelines, reducing detection time and providing proactive defense.',
  },
  {
    slug: 'cyber-dashboard',
    title: 'Network Intrusion Command Dashboard',
    type: 'Internal SaaS Platform',
    stack: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'Socket.io'],
    summary:
      'A real-time dashboard for monitoring traffic, visualizing intrusion attempts, and managing incident response.',
    problem:
      'IT teams lacked a single pane of glass for intrusion attempts and needed better visualization tools.',
    approach:
      'Built a full-stack Next.js/Node.js dashboard with WebSocket updates via Socket.io. Added visual threat heatmaps, alert feeds, and response workflows.',
    results:
      'Improved visibility for IT teams, helping reduce mean-time-to-response (MTTR) and making incidents easier to manage.',
  },
  {
    slug: 'devops-secure-pipeline',
    title: 'Secure DevOps CI/CD Pipeline',
    type: 'Automation / Infrastructure',
    stack: ['GitHub Actions', 'Docker', 'SonarQube', 'Terraform', 'AWS'],
    summary:
      'A hardened CI/CD pipeline with static analysis, secrets scanning, container signing, and automated rollback for safer deployments.',
    problem:
      'Clients were deploying insecure code and misconfigured infrastructure due to lack of automated checks.',
    approach:
      'Architected a GitHub Actions pipeline with static code analysis (SonarQube), secret scanning, Docker image signing, and Terraform infra provisioning with policies enforced.',
    results:
      'Reduced deployment risk by automating checks. Increased developer confidence and compliance with industry standards.',
  },
  {
    slug: 'automotive-edge-ai',
    title: 'ADAS-Linked Automotive Diagnostic Agent',
    type: 'Edge AI System',
    stack: ['Python', 'Raspberry Pi', 'CANBus', 'OpenCV', 'Flask'],
    summary:
      'An edge AI project merging automotive diagnostics with ADAS systems. Captures CAN data, predicts failures, and displays insights in a web UI.',
    problem:
      'Modern vehicles have complex ADAS systems but lack predictive diagnostics accessible to technicians.',
    approach:
      'Built a Raspberry Pi edge device to read CANBus data, applied ML models for anomaly detection, and built a Flask-based dashboard for visualization.',
    results:
      'Enabled predictive maintenance for ADAS-equipped vehicles, improving safety and reducing downtime for fleets.',
  },
  {
    slug: 'network-hardening',
    title: 'Enterprise Network Hardening',
    type: 'IT / Infrastructure Security',
    stack: ['Cisco', 'pfSense', 'VLANs', 'Active Directory', 'SIEM'],
    summary:
      'Designed and deployed secure enterprise-grade network environments with VLAN segmentation and centralized authentication.',
    problem:
      'Enterprises had flat networks, misconfigured AD, and lacked visibility into lateral movement.',
    approach:
      'Implemented pfSense firewalls, VLAN segmentation, and Active Directory integration with proper role-based access. Connected logs into SIEM for monitoring.',
    results:
      'Reduced lateral movement risk, enforced least-privilege access, and improved audit readiness.',
  },
  {
    slug: 'red-team-pentest',
    title: 'Red Team Engagement – External Pen Test',
    type: 'Cybersecurity / Offensive Testing',
    stack: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Hydra'],
    summary:
      'Simulated adversarial attacks against client infrastructure to uncover vulnerabilities in perimeter defenses and web applications.',
    problem:
      'Clients wanted to validate that perimeter defenses and apps could withstand real-world attacks.',
    approach:
      'Performed recon with Nmap, brute-forced with Hydra, exploited weaknesses using Metasploit, and tested apps with Burp Suite. Delivered a remediation roadmap.',
    results:
      'Found critical vulnerabilities (misconfigured firewalls, outdated libs). Helped prevent a potential breach and cut risk exposure significantly.',
  },
  {
    slug: 'active-directory-simulation',
    title: 'Active Directory Attack Simulation',
    type: 'Red Team / Internal Security',
    stack: ['BloodHound', 'Mimikatz', 'PowerShell', 'Windows Server'],
    summary:
      'Executed a red team exercise simulating privilege escalation and lateral movement in an AD environment.',
    problem:
      'Organizations often underestimate how quickly AD misconfigs can lead to full domain compromise.',
    approach:
      'Mapped AD graph with BloodHound, exploited weak Kerberos configs using Mimikatz, and showed lateral movement paths with PowerShell scripts.',
    results:
      'Client remediated AD misconfigs, enforced strong Kerberos policies, and reduced internal compromise risk.',
  },
  {
    slug: 'secure-remote-work',
    title: 'Secure Remote Work Infrastructure',
    type: 'IT / Cloud & Networking',
    stack: ['OpenVPN', 'WireGuard', 'Azure AD', 'MFA', 'Endpoint Security'],
    summary:
      'Built a secure remote work solution with VPN tunneling, MFA, and endpoint monitoring.',
    problem:
      'During remote work expansion, teams lacked secure access and MFA enforcement.',
    approach:
      'Architected VPN (WireGuard/OpenVPN) with centralized auth via Azure AD. Integrated MFA and endpoint security monitoring.',
    results:
      'Enabled secure global access for 50+ users with zero incidents in first year.',
  },
]