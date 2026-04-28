"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type LiveSystemsData = {
  workflowVisibility: number;
  activeProjects: number;
  liveProjects: number;
  repoProjects: number;
  coreFocus: string[];
  chartValues: number[];
  buildQuality: string[];
  updatedAt: string;
};

const fallbackData: LiveSystemsData = {
  workflowVisibility: 70,
  activeProjects: 5,
  liveProjects: 2,
  repoProjects: 5,
  coreFocus: ["React", "Next.js", "Tailwind CSS"],
  chartValues: [52, 42, 68, 50, 69, 82, 95],
  buildQuality: ["Reliable", "Scalable", "Practical"],
  updatedAt: new Date().toISOString(),
};

function Icon({
  type,
  className = "h-5 w-5",
}: {
  type: "pulse" | "layers" | "target" | "shield" | "stack" | "bolt";
  className?: string;
}) {
  const paths = {
    pulse: (
      <>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M22 12h-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    stack: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 14 8 4 8-4" />
      </>
    ),
    bolt: (
      <>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function FocusBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-semibold text-slate-200">
      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(45,212,191,0.7)]" />
      {label}
    </div>
  );
}

export default function LiveSystemsPanel() {
  const [data, setData] = useState<LiveSystemsData>(fallbackData);
  const [loading, setLoading] = useState(true);

  async function loadLiveSystems() {
    try {
      const response = await fetch("/api/live-systems", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load live systems data");
      }

      const nextData = await response.json();
      setData(nextData);
    } catch (error) {
      console.error("Live systems panel error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLiveSystems();

    const interval = window.setInterval(() => {
      loadLiveSystems();
    }, 30000);

    return () => window.clearInterval(interval);
  }, []);

  const updatedTime = new Date(data.updatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const focusItems =
    data.coreFocus && data.coreFocus.length
      ? data.coreFocus.slice(0, 3)
      : fallbackData.coreFocus;

  const chart = useMemo(() => {
    const values = [...(data.chartValues || [])].slice(0, 7);

    while (values.length < 7) {
      values.push(45 + values.length * 7);
    }

    const width = 420;
    const height = 110;
    const left = 10;
    const top = 10;
    const step = width / (values.length - 1);

    const points = values.map((value, index) => {
      const x = left + index * step;
      const y =
        top + height - (Math.max(0, Math.min(value, 100)) / 100) * height;

      return { x, y };
    });

    const line = points.map((point) => `${point.x},${point.y}`).join(" ");
    const area = `${left},${top + height} ${line} ${left + width},${
      top + height
    }`;

    return { points, line, area };
  }, [data.chartValues]);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-[#061326]/90 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-cyan-300/10" />

        <div className="relative z-10">
          <div className="mb-5 flex items-center border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="ml-auto flex items-center gap-3 text-accent">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(45,212,191,0.8)]" />
              <Icon type="pulse" className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-100">
                Live Systems
              </span>
            </div>
          </div>

          <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/80 p-5">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Workflow Visibility
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  Live portfolio signal
                </p>
              </div>

              <div className="text-right">
                <motion.p
                  key={data.workflowVisibility}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-black tracking-tight text-accent"
                >
                  {loading ? "..." : `+${data.workflowVisibility}%`}
                </motion.p>
                <p className="text-xs text-slate-400">updated data</p>
              </div>
            </div>

            <div className="relative h-36 overflow-hidden rounded-xl border border-white/5 bg-[#04101f]/40 px-3 py-2">
              <svg
                viewBox="0 0 450 145"
                className="h-full w-full"
                role="img"
                aria-label="Workflow visibility trend"
              >
                <defs>
                  <linearGradient id="compactArea" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="rgb(45, 212, 191)"
                      stopOpacity="0.32"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(45, 212, 191)"
                      stopOpacity="0.02"
                    />
                  </linearGradient>
                  <filter id="compactGlow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[25, 50, 75].map((mark) => {
                  const y = 125 - mark;
                  return (
                    <line
                      key={mark}
                      x1="10"
                      y1={y}
                      x2="430"
                      y2={y}
                      stroke="rgba(148,163,184,0.18)"
                      strokeDasharray="4 6"
                    />
                  );
                })}

                <motion.polygon
                  points={chart.area}
                  fill="url(#compactArea)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45 }}
                />

                <motion.polyline
                  points={chart.line}
                  fill="none"
                  stroke="rgb(45, 212, 191)"
                  strokeWidth="3"
                  filter="url(#compactGlow)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                />

                {chart.points.map((point, index) => (
                  <motion.circle
                    key={`${point.x}-${point.y}`}
                    cx={point.x}
                    cy={point.y}
                    r={index === chart.points.length - 1 ? 5.5 : 3.5}
                    fill="#061326"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth={index === chart.points.length - 1 ? 3 : 2.5}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.12 + index * 0.04 }}
                  />
                ))}
              </svg>
            </div>
          </section>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/80 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-accent">
                  <Icon type="layers" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Active Projects
                </h3>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <motion.p
                    key={data.activeProjects}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl font-black leading-none tracking-tight text-white"
                  >
                    {String(data.activeProjects).padStart(2, "0")}
                  </motion.p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
                    {data.repoProjects} repos tracked
                    <br />
                    <span className="ml-5">{data.liveProjects} live builds</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/80 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-accent">
                  <Icon type="target" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Core Focus
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {focusItems.map((focus) => (
                  <FocusBadge key={focus} label={focus} />
                ))}
              </div>
            </section>
          </div>

          <section className="mt-4 rounded-2xl border border-cyan-300/15 bg-[#071a31]/80 p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-accent">
                  <Icon type="shield" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Build Quality
                </h3>
              </div>

              <p className="text-xs text-slate-400">
                Updated {updatedTime}
                <span className="ml-3 inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(45,212,191,0.75)]" />
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {(data.buildQuality || fallbackData.buildQuality)
                .slice(0, 3)
                .map((quality, index) => {
                  const iconTypes: Array<"shield" | "stack" | "bolt"> = [
                    "shield",
                    "stack",
                    "bolt",
                  ];

                  return (
                    <div
                      key={quality}
                      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#051427]/80 p-3 text-center text-slate-100"
                    >
                      <div className="absolute inset-x-8 bottom-0 h-px bg-accent shadow-[0_0_14px_rgba(45,212,191,0.65)]" />

                      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                        <span className="text-accent">
                          <Icon type={iconTypes[index]} className="h-4 w-4" />
                        </span>
                        {quality}
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
