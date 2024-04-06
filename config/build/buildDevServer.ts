import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return {
    port: options.port || 3000,
    open: {
      app: "Google Chrome",
    },
    historyApiFallback: true,
    hot: true,
  };
};
