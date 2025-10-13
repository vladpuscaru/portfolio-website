import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectHighlight from "../../components/ProjectHighlight/ProjectHighlight.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import styles from "./PageProjects.module.sass";
import type { Project } from "../../common/types.ts";
import { Link } from "react-router"; // If you use react-router-dom, switch import accordingly

const chunk = <T, >(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

interface PageProjectsProps {
  projects: Project[];
  highlight: Project;
}

const emblaOptions: EmblaOptionsType = {
  align: "start",
  dragFree: false,
  loop: true,
  skipSnaps: false,
  containScroll: "trimSnaps",
};

const PageProjects = ({ projects, highlight }: PageProjectsProps) => {
  const columns = useMemo(() => chunk(projects, 2), [projects]);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType | null) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", () => onSelect(emblaApi));
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);

  return (
    <div className={styles.PageProjects}>
      <ProjectHighlight project={highlight} />

      <div className={styles.projectsContainer}>
        <div className={styles.toolbar}>
          <SearchBar />
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={scrollPrev}
              aria-label="Previous column"
              disabled={!canPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={scrollNext}
              aria-label="Next column"
              disabled={!canNext}
            >
              ›
            </button>
          </div>
        </div>

        <section className={styles.projectsFeed} aria-label="Projects carousel">
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {columns.map((col, idx) => (
                <div key={idx} className={styles.embla__slide} role="group" aria-roledescription="slide" aria-label={`Column ${idx + 1} of ${columns.length}`}>
                  <div className={styles.projectColumn}>
                    {col.map((project) => (
                      <div key={project.id} className={styles.projectCard}>
                        <Link to={`/projects/${project.id}`} className={styles.projectLink} aria-label={`Open project ${project.title}`}>
                          <figure className={styles.media}>
                            {/* Use a fixed aspect ratio for tidy, stable layout */}
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                            />
                            <figcaption className={styles.caption}>
                              <span className={styles.title}>{project.title}</span>
                              {project?.subtitle && <span className={styles.subtitle}>{project.subtitle}</span>}
                            </figcaption>
                          </figure>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {scrollSnaps.length > 1 && (
          <div className={styles.dots} role="tablist" aria-label="Project pages">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                className={idx === selectedIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Go to page ${idx + 1}`}
                onClick={() => scrollTo(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageProjects;