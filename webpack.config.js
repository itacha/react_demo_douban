const path=require('path')
const HtmlWebPackPlugin=require('html-webpack-plugin')
const htmlPlugin=new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
module.exports={
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module: {  //所有第三方模块的配置规则
        rules: [
          { test: /\.jpg|png|gif|bmp$/, use: 'url-loader' }, // 处理图片
      { test: /\.ttf|svg|eot|woff|woff2$/, use: 'url-loader' }, // 处理字体文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理普通CSS样式表
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] }, // 处理 .scss 样式表的loader
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // babel-loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
        alias: { // 表示别名
          '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
        }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'https://movie.douban.com/',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,     // target是域名的话，需要这个参数，
          secure: true,          // 设置支持https协议的代理
        }
      }
    }
}