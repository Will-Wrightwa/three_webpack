const path = require('path')

module.exports = {

  context: path.join(__dirname, 'src'),
  entry:{
    app: './app/app1.js',
    three: './three/app.js',
  },

  output:{
    path: path.join(__dirname , 'dist'),
    filename: '[name].bundle.js'
  },

  module:{
    loaders: [
      {
        test:/\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      }

    ]
  },
  devServer:{
    inline: true
  }
};
