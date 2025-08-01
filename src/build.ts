import Mustache from "mustache";
import template from "../template.html" with { type: "text" };
import { metadata } from "./lib/metadata";

const build = async () => {
  const output = Mustache.render(template as unknown as string, metadata);
  const path = "index.html";
  await Bun.write(path, output);
};

build();
