module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mocks CSS modules
    },
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // Transforms JavaScript/JSX with Babel
    },
    transformIgnorePatterns: [
      '/node_modules/', // Ignore transforming node_modules
    ],
  };
  