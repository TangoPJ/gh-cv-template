import { publish } from "gh-pages";

publish("dist", { nojekyll: false }, (err) => {
  throw new Error(err);
});
