module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        "no-restricted-syntax": ["off", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
        "guard-for-in": "off",
        "operator-assignment": ["off", "always"],
    },
};
