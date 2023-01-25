import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();
import { ResponseFuncs } from "@utils/types";
import errorHandler from "@utils/db.error-handler";
import { isErrnoException } from "@utils/type-gurats";
import { Product } from "@models/product.model";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: unknown) =>
    res.status(400).json({
      error: errorHandler(error),
    });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { name } = req.query;
      try {
        Product.find({}).exec(function (err, page) {
          if (err) throw new Error(err.message);
          return res.end(JSON.stringify(page));
        });
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
