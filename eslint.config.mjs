import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-expressions": "off"
        }
    },
    {
        files: ["**/*.test.ts"],
        rules: {
            "prefer-const": "off"
        }
    },
    // Must be after other rules - automatically disables rules that conflicts with prettier
    prettier,
    globalIgnores([
        'proto/**',
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ])
])

export default eslintConfig