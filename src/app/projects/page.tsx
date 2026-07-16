"use client";

import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import PortfolioShell from "../components/PortfolioShell";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { IconBank, IconFolder, IconShop, IconSpark } from "../components/Icons";
import {
  usePortfolioData,
  type ProjectFilter,
} from "../hooks/usePortfolioData";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const { projectCards } = usePortfolioData();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filtered =
    filter === "all"
      ? projectCards
      : projectCards.filter((p) => p.category === filter);

  const filters: { id: ProjectFilter; label: string; icon: ReactNode }[] = [
    { id: "all", label: t("filter_all"), icon: <IconSpark className="h-3.5 w-3.5" /> },
    { id: "banking", label: t("filter_banking"), icon: <IconBank className="h-3.5 w-3.5" /> },
    { id: "ecommerce", label: t("filter_ecommerce"), icon: <IconShop className="h-3.5 w-3.5" /> },
  ];

  return (
    <PortfolioShell>
      <section id="projects">
        <Reveal>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="icon-badge">
                <IconFolder className="h-4 w-4" />
              </span>
              <h2 className="font-display text-xl font-bold text-plum">
                {t("projects_title")}
              </h2>
            </div>
            <div className="font-ui flex flex-wrap gap-2" role="tablist">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`filter-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                    filter === f.id ? "is-active" : ""
                  }`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.icon}
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {filtered.length === 0 ? (
            <p className="text-muted">{t("projects_empty")}</p>
          ) : (
            filtered.map((item, index) => (
              <Reveal key={`${item.title}-${index}`} delay={((index % 3) + 1) as 1 | 2 | 3}>
                <ProjectCard {...item} />
              </Reveal>
            ))
          )}
        </div>
      </section>
    </PortfolioShell>
  );
}
