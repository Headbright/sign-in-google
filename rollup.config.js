import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue'


export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/hb-sign-in-google.esm.js',
            format: 'es'
        },
        {
            file: 'dist/hb-sign-in-google.common.js',
            format: 'cjs'
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        // https://github.com/vuejs/rollup-plugin-vue/commit/fd3dfb9a4440b13b220fb2dc535506274280fa0c
        commonjs(),
        VuePlugin({css: false})
    ],
    external: [ 'vue-runtime-helpers' ]
}
