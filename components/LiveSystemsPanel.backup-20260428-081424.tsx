"use client";

import { useEffect, useState } from "react";
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
  workflowVisibility: 0,
  activeProjects: 0,
  liveProjects: 0,
  repoProjects: 0,
  coreFocus: ["Web Apps", "Dashboards", "Workflow Tools"],
  chartValues: [38, 52, 44, 68, 58, 82, 74, 92],
  buildQuality: ["Reliable", "Scalable", "Practical"],
  updatedAt: new Date().toISOString(),
};

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

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative rounded-3xl border border-white/10 bg-card/70 p-5 shadow-soft backdrop-blur-xl"
      >
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-accent/80" />

          <span className="ml-auto text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Live Systems
          </span>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-muted">
                Workflow Visibility
              </p>

              <motion.p
                key={data.workflowVisibility}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-bold text-accent"
              >
                {loading ? "..." : `+${data.workflowVisibility}%`}
              </motion.p>
            </div>

            <div className="flex h-24 items-end gap-2">
              {data.chartValues.map((height, index) => (
                <div key={`${height}-${index}`} className="flex flex-1 items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-accent-dark to-accent"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
              <p className="mb-3 text-sm font-semibold text-muted">
                Active Projects
              </p>

              <motion.p
                key={data.activeProjects}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl font-extrabold text-fg"
              >
                {String(data.activeProjects).padStart(2, "0")}
              </motion.p>

              <p className="mt-2 text-xs text-muted">
                {data.repoProjects} repos tracked • {data.liveProjects} live
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
              <p className="mb-3 text-sm font-semibold text-muted">
                Core Focus
              </p>

              <div className="space-y-2 text-sm text-muted">
                {data.coreFocus.map((focus) => (
                  <p key={focus}>
                    <span className="text-accent">●</span> {focus}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-bg2/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-muted">Build Quality</p>
              <p className="text-xs text-muted">Updated {updatedTime}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              {data.buildQuality.map((quality) => (
                <div
                  key={quality}
                  className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent"
                >
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden"
      >
        <div className="mb-2 h-2 w-10 rounded-full bg-accent" />
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-white/20" />
          <div className="h-2 rounded-full bg-white/20" />
          <div className="h-2 w-2/3 rounded-full bg-white/20" />
        </div>
      </motion.div>
    </div>
  );
}

