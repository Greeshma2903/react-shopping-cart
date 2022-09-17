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
  shortcuts: {
    "spn": "text-sm text-slate-400 font-bold tracking-wide",
    "btn-yellow":
      "bg-yellow-500 px-3 py-2 text-slate-900 font-medium tracking-widest rounded hover:bg-yellow-300",
  },
});
