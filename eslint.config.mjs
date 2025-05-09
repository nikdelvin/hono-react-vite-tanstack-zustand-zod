/* eslint-disable */
import eslint from '@eslint/js'
import baseConfig from '@hono/eslint-config'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    baseConfig,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js', '*.mjs']
                },
                tsconfigRootDir: import.meta.dirname
            }
        }
    }
)
