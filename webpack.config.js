const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/indeex.html', // Caminho para o template original
      inject: 'body',
    }),
  ],
  output: {
    filename: 'assets/[name]-[contenthash].js', // Gera arquivos com hash
    path: __dirname + '/dist',
    clean: true, // Limpa a pasta dist antes do build
    publicPath: '/', // Garante que os caminhos permaneçam absolutos
  },
};