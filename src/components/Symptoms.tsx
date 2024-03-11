import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import SymptomCard from "./SymptomCard";

import EmblaCarousel from "./ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { symptomsCardsData } from "../constants";

const Symptoms = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="mx-0">
      <h2 className="my-8 text-center text-3xl font-medium">Our Symptoms</h2>
      <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
        symptomsCardsData={symptomsCardsData}
      />
      <div className="mt-6"></div>
    </section>
  );
};

export default Symptoms;
