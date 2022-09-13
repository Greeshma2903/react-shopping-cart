import { defineConfig } from "vite";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        product: ["Work Sans", "sans-serif"],
      },
    },
  },
});
