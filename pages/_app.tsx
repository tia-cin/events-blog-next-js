import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="bg-slate-300 h-16 p-1.5">
        <nav className="flex items-center justify-between">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
            className="w-10 h-10 m-1 mx-3 hover:scale-105 transition-all cursor-pointer"
          />
          <div className="w-80 flex justify-evenly">
            <a
              href="/"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              Home
            </a>
            <a
              href="/events"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              Events
            </a>
            <a
              href="/about"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              About Us
            </a>
          </div>
        </nav>
      </header>
      <Component {...pageProps} className="bg-slate-200 w-full h-screen" />
    </>
  );
}
