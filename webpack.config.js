module.exports = {
 entry: './greeter.ts',
 output: {
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     }
   ]
 },
 devtool: 'inline-source-map',
};