var App = require('ghost-app'),
   	QuieroPlanear;

QuieroPlanear = App.extend({

		activate: function () {
		    console.log('QuieroPlanear: activate()');
		    this.app.helpers.register('disqus_subdomain', this.handleDisqusSubdomain);
		    this.app.helpers.register('is_there_any_disqus_subdomain', this.handleIsThereAnyDisqusSubdomain);
		},
		handleDisqusSubdomain: function() {
				var disqus_subdomain = process.env.DISQUS_SUBDOMAIN
		    return(disqus_subdomain);
		},
		handleIsThereAnyDisqusSubdomain: function(options) {
				return (/^\s*$/.test(process.env.DISQUS_SUBDOMAIN)) ? options.inverse(this) : options.fn(this);
		}
		
});

module.exports = QuieroPlanear;