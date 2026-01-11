import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-24 space-y-8">
      
      <ProjectCard
        title="MC Stats: Hypixel Minecraft Player Analytics Platform"
        stack="Next.js · TypeScript · Tailwind · Flask · Redis"
        description={
            <>
            <p>
                A data-driven analytics platform for competitive statistics, featuring live aggregation, game-mode breakdowns, and performance insights.
            </p>
            </>
        }
        image={
            <video
            src="/projects/mc-stats-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-md"
            />
        }
        tags={["software", "web", "data"]}
        github="https://github.com/evhuh/mc-stats"
      />

      <ProjectCard
        title="inki: Real-time Annotating with Friends"
        stack="Next.js · React · TypeScript · Supabase (Postgres, Realtime) · Agile · CI/CD"
        description={
            <>
            <p>
                Scalable web platform for real-time collaborative annotation and discussion, integrating Supabase Realtime for live updates and presence tracking.
            </p>
            <p className="mt-3">
                Designed RESTful APIs and enforced role-based access control for secure document sharing and multi-user editing on a cloud-hosted Supabase backend.
            </p>
            </>
        }
        tags={["software", "web"]}
        github="https://github.com/yale-swe/f25-inki"
      />

      <ProjectCard
        title="DouDiZhu Recurrent Learning Bot "
        stack="Python · PyTorch · Stable Baselines3 · Gymnasium"
        description={
            <>
            <p>
                Designed and implemented a custom 1v1 Dou Dizhu environment for a multi-stage PPO reinforcement learning pipeline with PyTorch neural networks via Stable Baselines3 framework, action masking, reward tuning, and baseline agents.
            </p>
            <p className="mt-3">
                Trained agents through a staged curriculum, with automated benchmarking against baseline agents achieving an 86.4% win-rate.
            </p>
            </>
        }
        tags={["ml"]}
        github="https://github.com/evhuh/doudizhu-rl"
      />

      {/* <ProjectCard
        title="Single-Cycle CPU in Minecraft"
        stack="Digital Logic · Computer Architecture · Redstone"
        description="Designed and implemented a single-cycle processor in Minecraft to explore instruction execution, datapaths, and control logic."
        tags={["hardware", "systems", "education"]}
      /> */}
    </main>
  );
}
