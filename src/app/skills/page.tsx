"use client";

import { useTranslation } from "react-i18next";
import PortfolioShell from "../components/PortfolioShell";
import Reveal from "../components/Reveal";
import {
  IconCertificate,
  IconGraduation,
  IconSpark,
} from "../components/Icons";
import { usePortfolioData } from "../hooks/usePortfolioData";

export default function SkillsPage() {
  const { t } = useTranslation();
  const { skillGroups, education, certifications } = usePortfolioData();

  return (
    <PortfolioShell>
      <section id="skills" className="space-y-12">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="icon-badge">
                <IconSpark className="h-4 w-4" />
              </span>
              <h2 className="font-display text-xl font-bold text-plum">
                {t("skills_title")}
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="rounded-2xl border border-line bg-surface-strong/70 p-5 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="icon-badge">{group.icon}</span>
                    <h3 className="font-display text-base font-bold text-plum">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="tag-pill rounded-full px-3 py-1 text-[11px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="icon-badge">
                <IconGraduation className="h-4 w-4" />
              </span>
              <h2 className="font-display text-xl font-bold text-plum">
                {t("education_title")}
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-3">
            {education.map((item) => (
              <Reveal key={item.title}>
                <li className="rounded-xl border border-line bg-surface/60 px-4 py-3 transition hover:border-accent/40">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="font-ui mt-1 text-[11px] text-muted">{item.meta}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="icon-badge">
                <IconCertificate className="h-4 w-4" />
              </span>
              <h2 className="font-display text-xl font-bold text-plum">
                {t("certifications_title")}
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-3">
            {certifications.map((item) => (
              <Reveal key={item.title}>
                <li className="rounded-xl border border-line bg-surface/60 px-4 py-3 transition hover:border-accent/40">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="font-ui mt-1 text-[11px] text-muted">{item.meta}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PortfolioShell>
  );
}
