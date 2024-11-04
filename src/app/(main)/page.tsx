"use client";

import ArticlesSection from "@/components/home/sections/articles-section";
import ConditionSection from "@/components/home/sections/condition-section";
import HeaderSection from "@/components/home/sections/header-section";
import MealRecommendationSection from "@/components/home/sections/meal-recommendation-section";
import StatsSection from "@/components/home/sections/stats-section";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <ConditionSection />
      <StatsSection />
      <MealRecommendationSection />
      <ArticlesSection />
    </main>
  );
}
