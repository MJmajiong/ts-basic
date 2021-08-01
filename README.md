amd cmd require.js  sea.js
node commonjs  commonjs2
es module
umd  兼容以上三种

 /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
 启用模块的转译在commonjs 和es模块中，默认包含allowSyntheticDefaultImports（具体的语法看src下面的common.ts和es6.ts）
