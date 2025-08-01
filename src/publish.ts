import { publish } from "gh-pages";

await publish("dist", { nojekyll: true, history: false }, (err) => {
  throw new Error(err);
});
