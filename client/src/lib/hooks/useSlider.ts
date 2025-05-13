import { useState, useEffect, useCallback } from "react";

export function useSlider(
  slidesCount: number,
  autoplayTime: number = 5000,
  autoplay: boolean = false
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
  }, [slidesCount]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesCount) % slidesCount);
  }, [slidesCount]);

  // Set up autoplay
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(goToNextSlide, autoplayTime);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNextSlide, autoplayTime]);

  // Pause on hover or interaction
  const pauseAutoplay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (autoplay) {
      setIsAutoPlaying(true);
    }
  }, [autoplay]);

  return {
    currentIndex,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    pauseAutoplay,
    resumeAutoplay,
  };
}
