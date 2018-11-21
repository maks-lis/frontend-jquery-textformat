module.exports = {
	use: [
		'@atomspace/eslint',
		['@neutrinojs/web', {
			html: {
				template: './src/index.html',
				inject: true
			},
			devServer: {
				open: false
			}
		}],
		'@neutrinojs/jest'
	]
} 