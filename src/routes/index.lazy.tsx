import { createLazyFileRoute } from "@tanstack/react-router";
import { Carousel } from "../components/carousel/Carousel";
import { usePopularQuery } from "../apis/home/home.queries";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
      <Carousel
        offset={20}
        leftAffix={
          <Carousel.Button direction="left">
            <FaAngleLeft color="#fff" />
          </Carousel.Button>
        }
        rightAffix={
          <Carousel.Button direction="right">
            <FaAngleRight color="#fff" />
          </Carousel.Button>
        }
      >
        {popularMovieData?.results.map((movie) => (
          <Carousel.Item
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              height: "400px",
            }}
            alt={movie.title}
          >
            <Carousel.Item.Title className="custom-title">
              {movie.title}
            </Carousel.Item.Title>
            <Carousel.Item.Overview className="custom-overview">
              {movie.overview}
            </Carousel.Item.Overview>
            <Carousel.Item.VoteAverage className="custom-vote-average">
              <span>평점: {movie.vote_average}</span>
            </Carousel.Item.VoteAverage>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
