import dayjs from "dayjs";
import "dayjs/locale/id";
import MealCard from "../cards/meal-card";
import { mealPlan } from "@/lib/static/meal-plan-dummy";

dayjs.locale("id");

export default function MealPlanSection() {
  return (
    <section className="space-y-5">
      <div className="px-3">
        <div className="grid grid-cols-7 gap-2">
          {[...Array(7)].map((_, index) => {
            const dateday = dayjs().add(index, "day");
            const day = dateday.format("ddd");
            const date = dateday.format("DD");
            const isToday = dayjs().isSame(dateday);
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 rounded-full px-1 pb-2 pt-4 text-center font-semibold ${isToday ? "bg-primary-500 text-white" : ""}`}
              >
                <p>{day}</p>
                <p className="w-fit rounded-full bg-white p-2 text-xs font-bold text-primary-500 sm:text-sm">
                  {date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Sarapan</h2>
          <div className="space-y-2">
            {mealPlan.breakfast.map((plan, index) => (
              <MealCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Makan Siang</h2>
          <div className="space-y-2">
            {mealPlan.lunch.map((plan, index) => (
              <MealCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Makan Malam</h2>
          <div className="space-y-2">
            {mealPlan.dinner.map((plan, index) => (
              <MealCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
