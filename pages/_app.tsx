import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Events Blog</title>
        <meta
          name="description"
          content="Blog about touristic activities in cities around the world while season"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-200 w-full h-full min-h-screen">
        <header className="bg-slate-300 h-16 p-1.5">
          <nav className="flex items-center justify-between">
            <Link href="/" passHref>
              <Image
                alt="Events Blog"
                width={100}
                height={10}
                src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
                className="w-10 h-10 m-1 mx-3 hover:scale-105 transition-all cursor-pointer"
              />
            </Link>
            <div className="w-80 flex justify-evenly">
              <Link href="/" passHref>
                <span className="font-semibold text-lg hover:text-white transition-all hover:text-xl">
                  Home
                </span>
              </Link>
              <Link href="/events" passHref>
                <span className="font-semibold text-lg hover:text-white transition-all hover:text-xl">
                  Events
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className="font-semibold text-lg hover:text-white transition-all hover:text-xl">
                  About us
                </span>
              </Link>
            </div>
          </nav>
        </header>
        <div className="px-16">
          <Component {...pageProps} />
        </div>
        <footer className="flex justify-center mt-10">
          <div className="bottom-0 relative mb-3">
            <p className="text-center font-medium">
              Copyright © 2019 by Events Blog <br />
              All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
