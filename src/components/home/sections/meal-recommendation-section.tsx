import { Button } from "@/components/shared/button";
import CardMealPlan from "@/components/shared/cards/card-meal-plan";
import { mealRecommendation } from "@/lib/static/meal-recommendation-dummy";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

export default function MealRecommendationSection() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <section className="py-5">
      <div className="flex items-center justify-between gap-5">
        <h2 className="px-3 text-xl font-bold">Menu Hari Ini</h2>
        <Link href={"/plan"}>
          <Button variant={"outline"}>Selengkapnya</Button>
        </Link>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        slidesPerView={2}
        className="px-3 py-2"
      >
        {mealRecommendation.map((meal) => (
          <SwiperSlide key={meal.id} className="h-full">
            <CardMealPlan {...meal} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end gap-2 px-3 pt-2">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="shadow"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size={"icon"}
          variant={"secondary"}
          className="shadow"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </section>
  );
}
