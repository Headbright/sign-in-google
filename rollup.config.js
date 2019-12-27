import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

export default {
    input: 'src/HbGoogleSignInButton.vue',
    output: {
        format: 'esm',
        file: 'dist/HbGoogleSignInButton.js'
    },
    plugins: [
        commonjs(),
        VuePlugin({ template: { optimizeSSR: true } })
    ]
}
