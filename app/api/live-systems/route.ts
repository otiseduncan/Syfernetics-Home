import { NextResponse } from "next/server";
import { projects } from "../../../data/projects";

export async function GET() {
  const totalProjects = projects.length;

  const projectsWithRepo = projects.filter((project) => Boolean(project.repoUrl));
  const projectsWithLiveUrl = projects.filter((project) =>
    Boolean(project.liveUrl)
  );

  const workflowVisibility =
    totalProjects > 0
      ? Math.round(
          ((projectsWithRepo.length + projectsWithLiveUrl.length) /
            (totalProjects * 2)) *
            100
        )
      : 0;

  const stackCounts = new Map<string, number>();

  projects.forEach((project) => {
    const stack = Array.isArray(project.stack) ? project.stack : [];

    stack.forEach((item) => {
      stackCounts.set(item, (stackCounts.get(item) || 0) + 1);
    });
  });

  const coreFocus = Array.from(stackCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  const chartValues = projects.slice(0, 8).map((project, index) => {
    const stack = Array.isArray(project.stack) ? project.stack : [];

    const repoWeight = project.repoUrl ? 20 : 5;
    const liveWeight = project.liveUrl ? 20 : 5;
    const stackWeight = Math.min(stack.length * 8, 40);
    const positionWeight = 10 + index * 3;

    return Math.min(repoWeight + liveWeight + stackWeight + positionWeight, 95);
  });

  while (chartValues.length < 8) {
    chartValues.push(35 + chartValues.length * 7);
  }

  return NextResponse.json({
    workflowVisibility,
    activeProjects: totalProjects,
    liveProjects: projectsWithLiveUrl.length,
    repoProjects: projectsWithRepo.length,
    coreFocus:
      coreFocus.length > 0
        ? coreFocus
        : ["Web Apps", "Dashboards", "Workflow Tools"],
    chartValues,
    buildQuality: ["Reliable", "Scalable", "Practical"],
    updatedAt: new Date().toISOString(),
  });
}
