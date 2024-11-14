import { useRef, useEffect } from "react";

export default function useScrollWheelCard() {
  const scrollPopularContainerRef = useRef(null);
  const scrollUpcomingContainerRef = useRef(null);
  const scrollTopRatedContainerRef = useRef(null);

  useEffect(() => {
    const scrollPopularContainer = scrollPopularContainerRef.current;
    const scrollUpcomingContainer = scrollUpcomingContainerRef.current;
    const scrollTopRatedContainer = scrollTopRatedContainerRef.current;

    const handleScroll = (container) => (e) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    if (scrollPopularContainer) {
      scrollPopularContainer.addEventListener("wheel", handleScroll(scrollPopularContainer));
    }

    if (scrollUpcomingContainer) {
      scrollUpcomingContainer.addEventListener("wheel", handleScroll(scrollUpcomingContainer));
    }

    if (scrollTopRatedContainer) {
      scrollTopRatedContainer.addEventListener("wheel", handleScroll(scrollTopRatedContainer));
    }
    

    return () => {
      if (scrollPopularContainer) {
        scrollPopularContainer.removeEventListener("wheel", handleScroll(scrollPopularContainer));
      }
      if (scrollUpcomingContainer) {
        scrollUpcomingContainer.removeEventListener("wheel", handleScroll(scrollUpcomingContainer));
      }
      if (scrollTopRatedContainer) {
        scrollTopRatedContainer.removeEventListener("wheel", handleScroll(scrollTopRatedContainer));
      }
    };
  }, []);

  return { scrollPopularContainerRef, scrollUpcomingContainerRef, scrollTopRatedContainerRef };
}
