module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-dotenv', '@prefresh/snowpack'],
  install: [
    /* ... */
  ],
  installOptions: {
    treeshake: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },

  alias: {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  },
};
