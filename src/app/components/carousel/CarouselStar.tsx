"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

type UseStarButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onStarButtonClick: (index: number) => void;
};

export const useStarButton = (
  emblaApi: EmblaCarouselType | undefined
): UseStarButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onStarButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onStarButtonClick,
  };
};

type StarButtonPropsType = ComponentPropsWithRef<"button"> & {
  selectedIndex: number;
  index: number;
};

export const StarButton: React.FC<StarButtonPropsType> = (props) => {
  const { index, selectedIndex, ...restProps } = props;

  return (
    <button
      type="button"
      className={index == 0 ? "" : "ml-[20px]"}
      {...restProps}
    >
      <Image
        src={
          selectedIndex == index ? "/images/star_green.svg" : "/images/star.svg"
        }
        width={14}
        height={14}
        alt="star"
      ></Image>
    </button>
  );
};
