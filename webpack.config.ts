import path from "path";

module.exports = {
  resolve: {
    extensions: ["ts", "tsx"],
    alias: {
      app: path.resolve(__dirname, "src/app"),
      widgets: path.resolve(__dirname, "src/widgets"),
    },
  },
};
