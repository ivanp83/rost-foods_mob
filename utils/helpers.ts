import { NavLink } from "./types";
import navLinks from "../public/data.json";
export const getCurrentLink = (links: NavLink[], descriptor: string) =>
  links.filter((word) => word.name !== descriptor);

export const getLinks = (to: string) => {
  const index = navLinks.findIndex((link) => link.to === to);
  let prev;
  let next;
  if (index - 1 >= 0) {
    prev = navLinks[index - 1];
  }
  if (index + 1 < navLinks.length && index !== -1) {
    next = navLinks[index + 1];
  }
  if (index + 1 >= navLinks.length) {
    next = navLinks[0];
  }

  return { prev, next };
};
