module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@context': './src/context',
          '@services': './src/services',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
