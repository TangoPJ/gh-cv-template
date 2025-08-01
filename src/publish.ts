import { publish } from "gh-pages";

publish("dist", (err) => {
  throw new Error(err);
});
