var Middleware = function() {
	return function(req, res, next) {
		var path = req.originalUrl
		
		var breadCrumbs = path.split('/')

		var index = breadCrumbs.indexOf("")
		while(index !== -1){
			breadCrumbs.splice(index, 1)
			index = breadCrumbs.indexOf("")
		}

		breadCrumbs.splice(0,0,"Home")
		req.breadcrumbs = []

		var urlPath = req.headers.host

		for (var i = 0; i <= breadCrumbs.length - 1; i++) {
			req.breadcrumbs.push({
				name: breadCrumbs[i],
				url: urlPath
			})

			if (breadCrumbs[i+1]) {
				urlPath += "/" + breadCrumbs[i+1]
			}
		}
		next()
	}
}

module.exports = {
	Middleware
}
