var App = require('ghost-app'),
   	QuieroPlanear;

QuieroPlanear = App.extend({

		activate: function () {
		    console.log('QuieroPlanear: activate()');
		    this.ghost.helpers.register('disqus_subdomain', this.handleDisqusSubdomain);
		},
		handleDisqusSubdomain: function() {
				var disqus_subdomain = process.env.DISQUS_SUBDOMAIN
		    return(disqus_subdomain);
		}
		
});

module.exports = QuieroPlanear;