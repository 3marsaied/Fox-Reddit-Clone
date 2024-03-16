/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};

/*
preset:

Specifies the preset configuration to use with Jest. In this case, 'ts-jest' indicates that the ts-jest preset should be used. This preset is designed for projects using TypeScript, providing seamless integration with Jest.
testEnvironment:

Specifies the test environment to use when running tests. Here, 'node' indicates that the tests will run in a Node.js environment. This is suitable for testing code that interacts with Node.js APIs.
coverageDirectory:

Specifies the directory where coverage reports generated by Jest will be stored. In this configuration, coverage reports will be saved in the 'coverage' directory.
collectCoverageFrom:

Specifies the files from which Jest should collect coverage information. Here, it's set to collect coverage from all files in the 'src' directory with .js or .ts extensions.
coverageThreshold:

Specifies the coverage thresholds for the project. In this configuration, the global coverage thresholds for branches, functions, lines, and statements are all set to 0, indicating that no minimum coverage is required. Adjust these thresholds according to your project's requirements.
moduleNameMapper:

Specifies mappings between module paths and file paths. In this configuration, it maps paths starting with 'src/' to the corresponding paths within the 'src' directory. This allows Jest to resolve imports from the 'src' directory correctly during testing.
moduleDirectories:

Specifies additional directories to be searched for modules. In this configuration, it includes both 'node_modules' and 'src', allowing Jest to resolve modules from both the 'node_modules' directory and the 'src' directory.
Overall, this jestconfig file sets up Jest for testing TypeScript code ('ts-jest' preset), configures coverage reporting, sets coverage thresholds, and specifies module resolution settings to ensure proper test execution and coverage analysis in a TypeScript project.


 */
