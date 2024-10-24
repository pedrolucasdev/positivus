"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { StarButton, useStarButton } from "./CarouselStar";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Testmonial } from "../Testimonials";

type PropType = {
  slides: Testmonial[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onStarButtonClick } =
    useStarButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla h-full w-full  flex flex-col">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide border border-green rounded-[45px] relative bubble"
            >
              <span className="flex embla__slide__content text-white">
                {slide.quote}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full mt-[24px] justify-center">
        <div className="flex flex-col w-[606px] pl-20">
          <p className="text-green text-[20px] font-medium testimonial-author">
            {slides[selectedIndex].author}
          </p>
          <p className="text-white testimonial-position">
            {slides[selectedIndex].position}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-auto justify-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="flex items-center ml-[189px] mr-[189px]">
          {scrollSnaps.map((_: number, index: number) => (
            <StarButton
              key={index}
              onClick={() => onStarButtonClick(index)}
              selectedIndex={selectedIndex}
              index={index}
            />
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default Carousel;
