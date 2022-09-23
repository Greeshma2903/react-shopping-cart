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
      "bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-300",
    "btn-pad": "px-3 py-2 tracking-widest rounded" 
  },
});
