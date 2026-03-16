"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";

type GalleryShot = {
  label: string;
  image?: string;
};

type ProjectGalleryProps = {
  gallery: GalleryShot[];
  projectName: string;
};

export function ProjectGallery({ gallery, projectName }: ProjectGalleryProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative">
      {/* overflow-hidden wrapper is the critical fix — clips slides to container bounds */}
      <div style={{ overflow: "hidden", width: "100%", minWidth: 0 }}>
        <Swiper
          modules={[Keyboard, A11y]}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {gallery.map((shot, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-sm overflow-hidden shadow bg-card"
                style={{
                  opacity: activeIndex === index ? 0.9 : 0.9,
                  transform: activeIndex === index ? "scale(1)" : "scale(1)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                {/* Window chrome bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-card-hover/90 border-b border-foreground/10">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                  <span className="text-[10px] text-text-muted uppercase tracking-[2px] ml-2 truncate">
                    {shot.label}
                  </span>
                  <span className="ml-auto text-[10px] text-text-muted tabular-nums shrink-0">
                    {index + 1} / {gallery.length}
                  </span>
                </div>

                {/* Image */}
                <div className="h-auto bg-card-hover">
                  {shot.image ? (
                    <img
                      src={shot.image}
                      alt={shot.label}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-text-muted text-[12px] uppercase font-medium">
                      Preview coming soon
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-4">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: activeIndex === index ? "20px" : "6px",
                height: "6px",
                backgroundColor:
                  activeIndex === index
                    ? "var(--color-primary, #6366f1)"
                    : "var(--color-foreground, currentColor)",
                opacity: activeIndex === index ? 1 : 0.2,
              }}
            />
          ))}
        </div>

        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous slide"
            className="flex items-center justify-center w-8 h-8 rounded-full  bg-secondary text-secondary-text
              hover:border-primary hover:bg-secondary/80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next slide"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-text
              hover:border-primary hover:bg-secondary/80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}