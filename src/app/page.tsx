"use client";

import PortfolioShell from "./components/PortfolioShell";
import ExperienceCard from "./components/ExperienceCard";
import Reveal from "./components/Reveal";
import { IconBriefcase } from "./components/Icons";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { experienceCards } = usePortfolioData();

  return (
    <PortfolioShell>
      <section id="experience">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="icon-badge">
              <IconBriefcase className="h-4 w-4" />
            </span>
            <h2 className="font-display text-xl font-bold text-plum">
              {t("experience_title")}
            </h2>
          </div>
        </Reveal>
        <div className="space-y-5">
          {experienceCards.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <div className="timeline-item">
                <ExperienceCard {...item} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
}
