import js from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import globals from "globals"
import tseslint from "typescript-eslint"

const config = [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    prettierConfig,
    {
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: false,
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrors: "none",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-invalid-void-type": "off",
            "@typescript-eslint/restrict-plus-operands": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
        },
    },
    {
        ignores: ["dist/*"],
    },
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                project: true,
                tsconfigDirName: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.js"],
        ...tseslint.configs.disableTypeChecked,
    },
]

export default config
