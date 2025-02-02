"use client";

import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { getPopular } from "./apis/home/home.api";
import { PopularResponse } from "./apis/home/home.type";
import { Button, Carousel } from "@repo/ui";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  const req = {
    language: "ko-KR",
    page: 1,
    region: "KR",
  };

  const popularMovieData: PopularResponse = await getPopular(req);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turbo.build/repo/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
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
            {popularMovieData?.results.map((movie: any) => (
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
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}
