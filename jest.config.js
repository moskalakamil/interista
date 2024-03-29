const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
