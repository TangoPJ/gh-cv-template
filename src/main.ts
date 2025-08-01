import Mustache from "mustache";
import { metadata } from "./lib/metadata";

const render = () => {
  console.log("Running...");
  const template = document.querySelector("#app")!;
  const htmlContent = template.innerHTML;
  const rendered = Mustache.render(htmlContent, metadata);
  template.innerHTML = rendered;
};

render();
