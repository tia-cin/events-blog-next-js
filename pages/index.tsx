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
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about">About Us</a>
        </nav>
      </header>
      <main>
        <a href="">
          <section>
            <img />
            <h2>Events in Bali</h2>
            <p>
              Deserunt cillum elit mollit quis nisi qui voluptate cillum
              proident excepteur exercitation amet ad. Cillum do eu veniam
              officia amet deserunt eiusmod ea aliquip ullamco. Veniam consequat
              adipisicing esse elit occaecat nostrud aliquip labore.
              Reprehenderit eu culpa minim aute aute anim labore. Dolor ipsum
              fugiat velit consectetur ut qui laborum nostrud Lorem et. Aute
              eiusmod occaecat tempor anim duis ullamco duis labore esse
              cupidatat amet.
            </p>
          </section>
        </a>
        <a href="">
          <section>
            <img />
            <h2>Events in Miami</h2>
            <p>
              Occaecat enim consequat deserunt sit exercitation amet. Irure in
              anim laboris dolor ea quis anim irure nisi enim sint Lorem amet
              quis. Proident consequat ea excepteur do duis excepteur anim duis.
              Nisi officia ad pariatur sit nostrud incididunt aliquip minim
              nulla velit nostrud elit ullamco et. Aliqua Lorem magna fugiat
              culpa exercitation elit cupidatat proident deserunt minim dolore.
              Sit eu excepteur elit aliqua officia duis in.
            </p>
          </section>
        </a>
        <a href="">
          <section>
            <img />
            <h2>Events in Tokyo</h2>
            <p>
              Incididunt sunt id duis exercitation voluptate ea cillum do.
              Laborum sint reprehenderit cupidatat id occaecat magna commodo
              nulla. Velit eu dolore aliquip dolore non cillum magna. Ad magna
              id dolor commodo. Culpa voluptate est culpa amet ea mollit eu est
              eu ad duis eu duis minim.
            </p>
          </section>
        </a>
      </main>
      <footer>
        <p>
          Copyright © 2019 by Events Blog <br />
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
