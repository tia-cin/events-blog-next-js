import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === "POST") {
    const { email, eventPage, city } = req.body;

    res.status(200).json({ message: "Correct" });
  }
};

export default handler;
