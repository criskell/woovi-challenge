import path from "path";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";
import NodemonPlugin from "nodemon-webpack-plugin";

const config: webpack.Configuration = {
  entry: ["./bin/run.ts", "webpack/hot/poll?1000"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new NodemonPlugin(), new webpack.HotModuleReplacementPlugin()],

  target: "node",
  externalsPresets: { node: true },
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?1000"],
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
      allowlist: ["@woovi-challenge"],
    }),
  ],
  mode: "development",
  devtool: "eval-source-map",
  node: {
    __dirname: true,
    __filename: true,
  },

  resolve: {
    extensions: [".ts", "..."],
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [/node_modules/],
        include: [path.join(__dirname, "src"), path.join(__dirname, "..")],
      },
    ],
  },
};

export default config;
