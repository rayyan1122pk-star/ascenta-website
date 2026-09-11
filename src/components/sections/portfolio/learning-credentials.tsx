"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { credentials } from "@/config/credentials";

export function LearningCredentials() {
  return (
    <Section id="credentials" className="relative">
      <SectionHeading
        badge="Credentials & Learning"
        title={
          <>
            Where I Learned.{" "}
            <span className="font-display italic text-primary">How I Applied It.</span>
          </>
        }
        description="True engineering competence comes from practical execution. Here is how rigorous academic and professional training was translated directly into live production systems."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {credentials.map((cred, idx) => (
          <motion.div
            key={cred.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-xl transition-all duration-300 hover:border-primary/40 hover:bg-[#221716] sm:p-8"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{cred.period}</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-primary">
                {cred.institution}
              </h3>
              <p className="mt-0.5 font-mono text-xs text-accent font-medium">{cred.focus}</p>

              {/* What I Learned */}
              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-[#140D0C] p-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  What I Learned:
                </span>
                <p className="mt-1.5 text-xs text-white/85 leading-relaxed">
                  {cred.whatILearned}
                </p>
              </div>

              {/* How I Applied It */}
              <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.06] p-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  How I Applied It:
                </span>
                <p className="mt-1.5 text-xs text-[#F5EFE6] leading-relaxed font-medium">
                  {cred.howIAppliedIt}
                </p>
              </div>
            </div>

            {/* Key Skill Badges */}
            <div className="mt-6 border-t border-white/[0.08] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Core Competencies:
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cred.keySkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
