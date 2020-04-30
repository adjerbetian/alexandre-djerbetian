const path = require("path");

module.exports = {
    overrides: [
        {
            files: ["*.ts", "*.vue"],
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
                project: path.resolve(__dirname, "tsconfig.json")
            },
            extends: ["plugin:vue/essential", "@vue/typescript"],
            rules: {
                "import/no-unresolved": "off"
            }
        }
    ]
};
