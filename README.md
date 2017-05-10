# express-breadcrumbs
Simple express middleware for implementing route based breadcrumbs.

# Sample Uses
You can simply require the library and use it in your routes as follow:

### Using middleware

```javascript
var breadcrumbs = require('path-to-file');
router.get('/second', breadcrumbs.Middleware(), function(req, res, next) {
	res.render('pages/index', {breadcrumbs: req.breadcrumbs});
   });
```

### Example working with ejs and bootstrap

```javascript
<nav class="breadcrumb">
	<% if(breadcrumbs){ %>
		<% for(var i=0; i<breadcrumbs.length; i++){ %>
				<% if(i == (breadcrumbs.length - 1)){ %>
					<span class="breadcrumb-item active"><%= breadcrumbs[i].name %></span>
				<%} else {%>
					<a class="breadcrumb-item" href="<%= breadcrumbs[i].url %>"><%= breadcrumbs[i].name %></a>
				<% } %>
		<% } %>
	<% } %>
</nav>
```


