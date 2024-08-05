import kaboom from "kaboom";
import { scale } from "./constants";

const kaboomContext = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  scale,
  letterbox: true,
  global: false,
});

export { kaboomContext };
