"use client";

import { useTranslation } from "react-i18next";
import PortfolioShell from "../components/PortfolioShell";
import Reveal from "../components/Reveal";
import TalkCard from "../components/TalkCard";
import { IconMic } from "../components/Icons";
import { usePortfolioData } from "../hooks/usePortfolioData";

export default function TalksPage() {
  const { t } = useTranslation();
  const { talks } = usePortfolioData();

  return (
    <PortfolioShell>
      <section id="talks">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="icon-badge">
              <IconMic className="h-4 w-4" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-plum">
                {t("talks_title")}
              </h2>
              <p className="mt-1 text-sm text-muted">{t("talks_subtitle")}</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {talks.map((talk, index) => (
            <Reveal key={talk.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <TalkCard
                {...talk}
                eventLabel={t("talks_view_event")}
                linkedinLabel={t("talks_view_linkedin")}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
}
