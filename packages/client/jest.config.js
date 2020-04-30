// module.exports = {
//     preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
//     testMatch: ["**/*.(spec|test|unit).ts"]
// };

module.exports = {
    testMatch: ["**/*.(spec|test|unit).ts"],
    moduleFileExtensions: [
        "js",
        "json",
        "ts",
        // tell Jest to handle *.vue files
        "vue"
    ],
    transform: {
        // process TypeScript files
        "^.+\\.ts$": "ts-jest",
        // process *.vue files with vue-jest
        ".*\\.(vue)$": "vue-jest"
    },
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    // serializer for snapshots
    snapshotSerializers: ["jest-serializer-vue"]
};
