import BudgetSection from "@/components/planner/sections/budget-section";
import HeaderSection from "@/components/planner/sections/header-section";
import MealPlanSection from "@/components/planner/sections/meal-plan-section";

export default function PlannerPage() {
  return (
    <main className="space-y-5">
      <HeaderSection />
      <BudgetSection />
      <MealPlanSection />
    </main>
  );
}
