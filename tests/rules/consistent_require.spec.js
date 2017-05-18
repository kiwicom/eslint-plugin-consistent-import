const rule = require("../../src/rules/consistent_imports")
const RuleTester = require("eslint").RuleTester

const parserOptions = {
	ecmaVersion: 6,
	sourceType: "module",
	ecmaFeatures: {
		jsx: true,
	},
}

const importErrors = [
	{
		type: "VariableDeclaration",
		message: "Inconsistent import",
	},
]


const suggestionTests = {
	valid: [
		{
            code: "let BookingDuck = require(dir/dir/BookingDuck)",
            parserOptions,
        },
        {
            code: "var BookingDuck = require(dir/dir/BookingDuck)",
            parserOptions,
        },
		{
			code: "const BookingDuck = require(dir/dir/BookingDuck)",
			parserOptions
		},
	],
	invalid: [
		{
            code: "let BookingDuck = require(dir/dir/Duck)",
            parserOptions,
        },
        {
            code: "var BookingDuck = require(dir/dir/Duck)",
            parserOptions,
        },
		{
			code: "const BookingDuck = require(dir/dir/Duck)",
			parserOptions
		}
	],
}

const ruleTester = new RuleTester()
ruleTester.run("consistent_imports", rule, suggestionTests)
