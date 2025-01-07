import { createLazyFileRoute } from "@tanstack/react-router";
import { CarouselItem } from "../components/carousel/Item";
import { Carousel } from "../components/carousel/Carousel";
import { usePopularQuery } from "../apis/home/home.queries";
import { carouselImgStyle } from "../components/carousel/carousel.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: popularMovieData } = usePopularQuery({
    language: "ko-KR",
    page: 1,
    region: "KR",
  });

  return (
    <div className="app-container">
      <Carousel offset={20}>
        {popularMovieData?.results.map((movie) => (
          <CarouselItem key={movie.id}>
            <img
              className={carouselImgStyle}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bottom: 0,
                left: 0,
                color: "#fff",
                width: "100%",
              }}
            >
              {movie.title}
            </p>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
