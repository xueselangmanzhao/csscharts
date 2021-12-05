import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js', // 打包入口
  output: [{
    file: 'lib/csscharts.js', // 对于 Nodejs，打包成 commonjs
    format: 'cjs',
  },
  {
    file: 'esm/csscharts.js', // 对于浏览器，打包成 ES module
    format: 'es',
  },
  {
    file: 'dist/csscharts.min.js',
    name: 'sp',
    format: 'umd', // 对于 Nodejs 和浏览器，打包成混合模式
  },
  ],
  plugins: [
    babel(), // 使用 babel 插件
  ],
};
