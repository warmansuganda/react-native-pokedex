module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@services': './src/services',
          '@theme': './src/theme',
          '@configs': './src/configs',
        },
      },
    ],
  ],
};
