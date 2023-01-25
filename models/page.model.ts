import mongoose from "mongoose";
export interface IPage {
  name: string;
  mainImage: string;
  mainImageMob: string;
  mainTextContent: string;
  textAbout: string;
  title: string;
  header: string;
  description: string;
  quote: string;
  titleH2First: string;
  titleH2Sec: string;
  titleH2Third: string;
  titleH3: string[];
  titleH4First: string;
  titleH4Sec: string;
  quoteSec: string;
  subTitle: string;
  subTitleSec: string;
  content: string[];
  textContent: string;
  textContentSub: string;
  contentList: string[];
  contentListSec: string[];
  priceList: string;
  contentListArray: [
    {
      to: string;
      text: string;
    }
  ];
}
const pageSchema = new mongoose.Schema(
  {
    name: String,
    mainImage: String,
    mainImageMob: String,
    mainTextContent: String,
    textAbout: String,
    title: String,
    header: String,
    description: String,
    quote: String,
    titleH2First: String,
    titleH2Sec: String,
    titleH2Third: String,
    titleH3: [String],
    titleH4First: String,
    titleH4Sec: String,
    quoteSec: String,
    subTitle: String,
    subTitleSec: String,
    content: [String],
    textContent: String,
    textContentSub: String,
    contentList: [String],
    contentListSec: [String],
    priceList: String,
    contentListArray: [
      {
        to: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

export const Page =
  mongoose.models.Page || mongoose.model<IPage>("Page", pageSchema);
