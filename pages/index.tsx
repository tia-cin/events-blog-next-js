import Head from "next/head";

export default function Home() {
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
      <main className="grid grid-cols-3 mx-16 gap-8">
        <a href="/events/bali">
          <section className="bg-slate-200  rounded-xl p-2 my-5">
            <div>
              <h2 className="text-lg font-medium">Events in Bali</h2>
              <p>
                Deserunt cillum elit mollit quis nisi qui voluptate cillum
                proident excepteur exercitation amet ad. Cillum do eu veniam
                officia amet deserunt eiusmod ea aliquip ullamco. Veniam
                consequat adipisicing esse elit occaecat nostrud aliquip labore.
                Reprehenderit eu culpa minim aute aute anim labore. Dolor ipsum
                fugiat velit consectetur ut qui laborum nostrud Lorem et. Aute
                eiusmod occaecat tempor anim duis ullamco duis labore esse
                cupidatat amet.
              </p>
            </div>
            <button className="border-2 border-gray-900 w-full rounded font-light text-xl my-1">
              Read More
            </button>
          </section>
        </a>
        <a href="/events/miami">
          <section className="bg-slate-200  rounded-xl p-2 my-5">
            <div>
              <h2 className="text-lg font-medium">Events in Miami</h2>
              <p>
                Occaecat enim consequat deserunt sit exercitation amet. Irure in
                anim laboris dolor ea quis anim irure nisi enim sint Lorem amet
                quis. Proident consequat ea excepteur do duis excepteur anim
                duis. Nisi officia ad pariatur sit nostrud incididunt aliquip
                minim nulla velit nostrud elit ullamco et. Aliqua Lorem magna
                fugiat culpa exercitation elit cupidatat proident deserunt minim
                dolore. Sit eu excepteur elit aliqua officia duis in.
              </p>
            </div>
            <button className="border-2 border-gray-900 w-full rounded font-light text-xl my-1">
              Read More
            </button>
          </section>
        </a>
        <a href="/events/tokyo">
          <section className="bg-slate-200  rounded-xl p-2 my-5">
            <div>
              <h2 className="text-lg font-medium">Events in Tokyo</h2>
              <p>
                Incididunt sunt id duis exercitation voluptate ea cillum do.
                Laborum sint reprehenderit cupidatat id occaecat magna commodo
                nulla. Velit eu dolore aliquip dolore non cillum magna. Ad magna
                id dolor commodo. Culpa voluptate est culpa amet ea mollit eu
                est eu ad duis eu duis minim.
              </p>
            </div>
            <button className="border-2 border-gray-900 w-full rounded font-light text-xl my-1">
              Read More
            </button>
          </section>
        </a>
      </main>
      <footer className="flex justify-center">
        <div className="bottom-0 fixed mb-3">
          <p className="text-center font-medium">
            Copyright © 2019 by Events Blog <br />
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
