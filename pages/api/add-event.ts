import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { cwd } from "process";
import path from "path";
import { City } from "../../types";

// create path from project base path to the data file
const buidPath = () => path.join(cwd(), "data", "data.json");

// get content of the file and return it as object
const extractData = (file: string) => {
  const data = fs.readFileSync(file);
  return JSON.parse(data.toString("utf8"));
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  // get location of data JSON
  const filePath = buidPath();
  // get data from prev constant
  const { events } = extractData(filePath);

  // data not found, send message
  if (!events) return res.status(404).json({ message: "Events not found" });

  if (method === "POST") {
    const { name, description, image, city } = req.body;

    // if user input format is not correct, send message to fix it
    if (!name || !description || !image || !city) {
      res.status(422).json({ message: "Please submit data requested" });
    }

    // create a copy of data
    // create a copy of data
    let newEvents: City[] = events;

    // loop through events
    for (let i = 0; i < newEvents.length; i++) {
      // city name is same as city from client side
      if (newEvents[i].city === city) {
        newEvents[i].events.push({
          name: name.toLocaleLowerCase().split(" ").join("-"),
          description,
          image,
          suscription: [],
        });
      }
    }

    fs.writeFileSync(filePath, JSON.stringify({ events: newEvents }));
    // res.send(newEvents);

    res.status(200).json({
      message: `Event ${name} in ${city} has been added to our events`,
    });
  }
};

export default handler;
