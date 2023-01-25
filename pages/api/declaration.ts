import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();
import { ResponseFuncs } from "@utils/types";
import errorHandler from "@utils/db.error-handler";
import { isErrnoException } from "@utils/type-gurats";
const fs = require("fs");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: unknown) =>
    res.status(400).json({
      error: errorHandler(error),
    });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        var file = fs.createReadStream("static/declaration.pdf");
        var stat = fs.statSync("static/declaration.pdf");
        res.setHeader("Content-Length", stat.size);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=declaration.pdf"
        );
        file.pipe(res);
      } catch (error) {
        if (isErrnoException(error) && error.code === "ENOENT") catcher(error);
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
