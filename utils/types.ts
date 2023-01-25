import { Dispatch, SetStateAction } from "react";

export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}
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
  titleH3: [string];
  titleH4First: string;
  titleH4Sec: string;
  quoteSec: string;
  subTitle: string;
  subTitleSec: string;
  content: [string];
  textContent: string;
  textContentSub: string;
  contentList: [string];
  contentListSec: [string];
  priceList: string;
  contentListArray: [
    {
      to: string;
      text: string;
    }
  ];
}
export type Product = {
  _id: string;
  pageId: string;
  amount: string[];
  price: string[];
  mainParams: { title: string; data: string[] };
  duffleParams: { title: string; data: string[] };
  palletParams: { title: string; data: string[] };
  title: string;
  subTitle: string;
  shipping: string;
  picture: string;
};
export type AccordionParams = { title: string; data: string[] };
export interface IAccordion {
  index: number;
  title?: string;
  details: AccordionParams;
  expanded: number | null;
  setExpanded: Dispatch<SetStateAction<number | null>>;
}

export enum EmailStatus {
  SUCCESS = "success",
  ERROR = "error",
  IDLE = "",
}

export type NavLink = {
  name: string;
  to: string;
};
