const path = require("path");

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: path.resolve(__dirname, "tsconfig.json")
    }
};
