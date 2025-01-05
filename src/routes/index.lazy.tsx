import { createLazyFileRoute } from "@tanstack/react-router";
import { CarouselItem } from "../components/carousel/Item";
import { Carousel } from "../components/carousel/Carousel";
import { useGetPopular } from "../apis/home/home.queries";
import { carouselImgStyle } from "../components/carousel/carousel.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: popularMovieData } = useGetPopular({
    language: "ko-KR",
    page: 1,
    region: "KR",
  });
  console.log(popularMovieData);

  return (
    <div className="app-container">
      <Carousel offset={20}>
        {popularMovieData?.results.map((movie: any) => {
          const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
          return (
            <CarouselItem key={movie.id}>
              <img
                className={carouselImgStyle}
                src={imageUrl}
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
          );
        })}
      </Carousel>
    </div>
  );
}
