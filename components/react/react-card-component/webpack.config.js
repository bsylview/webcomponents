module.exports = {
  output: {
    filename: "react-card-component.js"   
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
        {
          test: /\.css$/i,
          use: [
            {
              loader: "to-string-loader"
            },
            {
              loader: "css-loader"
            }
          ]

        }
    ]
  }
};


