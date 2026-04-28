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

function MiniIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function PulseIcon() {
  return (
    <MiniIcon>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </MiniIcon>
  );
}

function LayersIcon() {
  return (
    <MiniIcon>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </MiniIcon>
  );
}

function TargetIcon() {
  return (
    <MiniIcon>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M22 12h-4" />
    </MiniIcon>
  );
}

function ShieldIcon() {
  return (
    <MiniIcon>
      <path d="M12 3 20 6v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </MiniIcon>
  );
}

function StackIcon() {
  return (
    <MiniIcon>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 14 8 4 8-4" />
    </MiniIcon>
  );
}

function BoltIcon() {
  return (
    <MiniIcon>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </MiniIcon>
  );
}

function FolderIcon() {
  return (
    <div className="relative hidden h-24 w-32 sm:block">
      <div className="absolute right-0 top-6 h-16 w-24 rounded-xl border border-accent/25 bg-accent/10 opacity-40" />
      <div className="absolute right-5 top-3 h-20 w-28 rounded-xl border border-accent/35 bg-accent/15 opacity-70" />
      <div className="absolute right-10 top-1 h-20 w-28 rounded-xl border border-accent/60 bg-gradient-to-br from-accent/35 to-cyan-500/10 shadow-[0_0_30px_rgba(20,184,166,0.25)]">
        <div className="absolute -top-3 left-0 h-5 w-16 rounded-t-xl border border-accent/40 bg-accent/20" />
        <div className="flex h-full items-center justify-center text-3xl font-black text-accent">
          &lt;/&gt;
        </div>
      </div>
    </div>
  );
}

function FocusIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (normalized.includes("next")) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-lg font-black text-white">
        N
      </div>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M6.5 10.5c1.1-2.2 2.7-3.3 4.8-3.3 3.2 0 3.6 2.4 5.2 2.8 1.1.3 2-.1 3-1.2-1.1 2.2-2.7 3.3-4.8 3.3-3.2 0-3.6-2.4-5.2-2.8-1.1-.3-2 .1-3 1.2Zm-2 5.2c1.1-2.2 2.7-3.3 4.8-3.3 3.2 0 3.6 2.4 5.2 2.8 1.1.3 2-.1 3-1.2-1.1 2.2-2.7 3.3-4.8 3.3-3.2 0-3.6-2.4-5.2-2.8-1.1-.3-2 .1-3 1.2Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
      <StackIcon />
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

  const chart = useMemo(() => {
    const values = [...(data.chartValues || [])].slice(0, 7);

    while (values.length < 7) {
      values.push(45 + values.length * 7);
    }

    const chartWidth = 560;
    const chartHeight = 150;
    const left = 42;
    const top = 24;
    const step = chartWidth / (values.length - 1);

    const points = values.map((value, index) => {
      const x = left + index * step;
      const y = top + chartHeight - (Math.max(0, Math.min(value, 100)) / 100) * chartHeight;
      return { x, y, value };
    });

    const line = points.map((point) => `${point.x},${point.y}`).join(" ");
    const area = `${left},${top + chartHeight} ${line} ${left + chartWidth},${top + chartHeight}`;

    return { points, line, area };
  }, [data.chartValues]);

  const labels = ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"];
  const focusItems = data.coreFocus?.length ? data.coreFocus.slice(0, 3) : fallbackData.coreFocus;

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-[#061326]/85 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-cyan-300/10" />

        <div className="relative z-10">
          <div className="mb-5 flex items-center border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.35)]" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.35)]" />
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
            </div>

            <div className="ml-auto flex items-center gap-3 text-accent">
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(45,212,191,0.8)]" />
              <PulseIcon />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-slate-100">
                Live Systems
              </span>
            </div>
          </div>

          <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/85 p-5 shadow-inner">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-50">
                  Workflow Visibility
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  7-day overview <span className="text-slate-500">●</span>
                </p>
              </div>

              <div className="text-right">
                <motion.p
                  key={data.workflowVisibility}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-black tracking-tight text-accent"
                >
                  {loading ? "..." : `+${data.workflowVisibility}%`}
                </motion.p>
                <p className="text-sm text-slate-400">
                  vs last 7 days <span className="text-accent">↗</span>
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <svg
                viewBox="0 0 650 220"
                className="h-[190px] w-full"
                role="img"
                aria-label="Workflow visibility chart"
              >
                <defs>
                  <linearGradient id="syferneticsArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="rgb(45, 212, 191)" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="lineGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[100, 75, 50, 25, 0].map((mark, index) => {
                  const y = 24 + index * 37.5;
                  return (
                    <g key={mark}>
                      <text x="0" y={y + 5} className="fill-slate-400 text-[13px]">
                        {mark}%
                      </text>
                      <line
                        x1="42"
                        y1={y}
                        x2="602"
                        y2={y}
                        stroke="rgba(148,163,184,0.22)"
                        strokeDasharray="4 6"
                      />
                    </g>
                  );
                })}

                <motion.polygon
                  points={chart.area}
                  fill="url(#syferneticsArea)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.polyline
                  points={chart.line}
                  fill="none"
                  stroke="rgb(45, 212, 191)"
                  strokeWidth="3"
                  filter="url(#lineGlow)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />

                {chart.points.map((point, index) => (
                  <motion.circle
                    key={`${point.x}-${point.y}`}
                    cx={point.x}
                    cy={point.y}
                    r={index === chart.points.length - 1 ? 7 : 4.5}
                    fill="#061326"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth={index === chart.points.length - 1 ? 4 : 3}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15 + index * 0.06 }}
                  />
                ))}

                {labels.map((label, index) => (
                  <text
                    key={label}
                    x={42 + index * (560 / 6)}
                    y="207"
                    textAnchor="middle"
                    className="fill-slate-400 text-[13px]"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>
          </section>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/85 p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-accent">
                  <LayersIcon />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Active Projects
                </h3>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <motion.p
                    key={data.activeProjects}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-7xl font-black leading-none tracking-tight text-white"
                  >
                    {String(data.activeProjects).padStart(2, "0")}
                  </motion.p>
                  <p className="mt-5 text-sm text-slate-400">
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
                    {data.repoProjects} repos tracked • {data.liveProjects} live
                  </p>
                </div>

                <FolderIcon />
              </div>
            </section>

            <section className="rounded-2xl border border-cyan-300/15 bg-[#071a31]/85 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-accent">
                  <TargetIcon />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Core Focus
                </h3>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#04101f]/55">
                {focusItems.map((focus, index) => (
                  <div
                    key={focus}
                    className={`flex items-center gap-4 px-4 py-3 ${
                      index !== focusItems.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <FocusIcon label={focus} />
                    <span className="text-base font-semibold text-slate-200">
                      {focus}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-4 rounded-2xl border border-cyan-300/15 bg-[#071a31]/85 p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-accent">
                  <ShieldIcon />
                </span>
                <h3 className="text-lg font-extrabold text-slate-50">
                  Build Quality
                </h3>
              </div>

              <p className="text-sm text-slate-400">
                Updated {updatedTime}
                <span className="ml-3 inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(45,212,191,0.75)]" />
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {(data.buildQuality || fallbackData.buildQuality).slice(0, 3).map((quality, index) => {
                const icons = [<ShieldIcon key="shield" />, <StackIcon key="stack" />, <BoltIcon key="bolt" />];

                return (
                  <div
                    key={quality}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-[#051427]/80 p-4 text-center text-slate-100 shadow-inner"
                  >
                    <div className="absolute inset-x-6 bottom-0 h-px bg-accent shadow-[0_0_18px_rgba(45,212,191,0.85)]" />
                    <div className="flex items-center justify-center gap-3 text-base font-semibold">
                      <span className="text-accent">{icons[index]}</span>
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
