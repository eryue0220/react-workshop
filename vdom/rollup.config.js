import babel from 'rollup-plugin-babel'
import * as path from 'path'

export default {
    moduleName: 'vd',
    entry: path.join(__dirname, 'src/index.js'),
    dest: path.join(__dirname, 'dist/vdom.js'),
    format: 'umd',
    sourceMap: false,
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}