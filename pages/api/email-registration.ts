import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { cwd } from "process";
import path from "path";
import { City, Event } from "../../types";

const buidPath = () => path.join(cwd(), "data", "data.json");

const extractData = (file: string) => {
  const data = fs.readFileSync(file);
  return JSON.parse(data.toString("utf8"));
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const filePath = buidPath();
  const { events } = extractData(filePath);

  if (!events) return res.status(404).json({ message: "Events not found" });

  if (method === "POST") {
    const { email, eventPage, city } = req.body;
    const newEvents = events.map((c: City) =>
      c.events.map((ev: Event) => {
        if (c.city === city && ev.name === eventPage) {
          if (ev.suscriptions.includes(email)) {
            res
              .status(201)
              .json({ message: "This email has already been suscribed" });
          }
          return {
            ...ev,
            suscriptions: [...ev.suscriptions, email],
          };
        }
        return c;
      })
    );

    fs.writeFileSync(filePath, JSON.stringify({ events: newEvents }));

    res.status(200).json({
      message: `Your email (${email}) has been added to the suscription list`,
    });
  }
};

export default handler;
