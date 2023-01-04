import { NextPage } from "next";
import React from "react";

const Events: NextPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <main>
        <a href="/events/bali">
          <section>
            <img />
            <h2>Events in Bali</h2>
          </section>
        </a>
        <a href="/events/miami">
          <section>
            <img />
            <h2>Events in Miami</h2>
          </section>
        </a>
        <a href="/events/tokyo">
          <section>
            <img />
            <h2>Events in Tokyo</h2>
          </section>
        </a>
      </main>
    </div>
  );
};

export default Events;
