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

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    let newEvents: City[] = events;

    for (let i = 0; i < newEvents.length; i++) {
      if (newEvents[i].city === city) {
        for (let j = 0; j < newEvents[i].events.length; j++) {
          if (newEvents[i].events[j].name === eventPage) {
            if (newEvents[i].events[j].suscription.includes(email))
              return res.json({
                message:
                  "This email has already been added to suscription list",
              });
            newEvents[i].events[j].suscription.push(email);
          }
        }
      }
    }

    fs.writeFileSync(filePath, JSON.stringify({ events: newEvents }));
    // console.log(newEvents);}
    // res.send(newEvents);

    res.status(200).json({
      message: `Your email (${email}) has been added to the suscription list`,
    });
  }
};

export default handler;
