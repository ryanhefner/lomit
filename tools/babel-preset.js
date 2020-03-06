const BABEL_ENV = process.env.BABEL_ENV;
const building = BABEL_ENV != undefined && BABEL_ENV !== 'cjs';

const plugins = ['@babel/plugin-proposal-object-rest-spread'];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    'babel-plugin-dev-expression'
  );
}

module.exports = () => {
  return {
    presets: [
      ['@babel/preset-env', {
        'loose': true,
        'modules': building ? false : 'commonjs',
      }],
    ],
    plugins: plugins,
  };
};
