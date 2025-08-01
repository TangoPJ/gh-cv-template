import { publish } from "gh-pages";

publish("dist", { nojekyll: true }, (err) => {
  throw new Error(err);
});
