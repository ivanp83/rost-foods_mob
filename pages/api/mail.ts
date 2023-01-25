import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "@utils/types";
import errorHandler from "@utils/db.error-handler";
import { isErrnoException } from "@utils/type-gurats";
const sgMail = require("@sendgrid/mail");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: unknown) =>
    res.status(400).json({
      error: errorHandler(error),
    });

  const handleCase: ResponseFuncs = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        sgMail.setApiKey(process.env.SEND_GRID_KEY);
        const msg = {
          to: process.env.NEXT_PUBLIC_EMAIL_TO,
          from: "admin@snack-pellets.ru",
          subject: `${req.body.name} хочет купить у тебя снеки!`,
          text: req.body.message,
          html: `<p>${req.body.message}</p>
          <hr/>
          <p>email клиента: ${req.body.email}</p>`,
        };
        await sgMail.send(msg).then(() => {
          res.status(200).json({
            success: true,
          });
        });
      } catch (error) {
        if (isErrnoException(error) && error.code === "ENOENT") catcher(error);
        console.log(error);
        return res.status(409).json({
          success: false,
        });
      }
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
