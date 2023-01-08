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
    // get input from client side
    const { email, eventPage, city } = req.body;

    // if user input format is not correct, send message to fix it
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    // create a copy of data
    let newEvents: City[] = events;

    // loop through events
    for (let i = 0; i < newEvents.length; i++) {
      if (newEvents[i].city === city) {
        // city name is same as city from client side
        for (let j = 0; j < newEvents[i].events.length; j++) {
          // loop through city events
          if (newEvents[i].events[j].name === eventPage) {
            // event name is same as eventPage
            if (newEvents[i].events[j].suscription.includes(email))
              // email input is already in suscription list
              return res.json({
                message:
                  "This email has already been added to suscription list",
              });
            newEvents[i].events[j].suscription.push(email); // add email if not found
          }
        }
      }
    }

    // rewrite data JSON file to update events
    fs.writeFileSync(filePath, JSON.stringify({ events: newEvents }));

    res.status(200).json({
      message: `Your email (${email}) has been added to the suscription list`,
    });
  }
};

export default handler;
