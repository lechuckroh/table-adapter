/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "reports/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  resetModules: true,
  restoreMocks: true,
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
};
