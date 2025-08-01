import { publish } from "gh-pages";

await publish("dist", { nojekyll: true }, (err) => {
  throw new Error(err);
});
