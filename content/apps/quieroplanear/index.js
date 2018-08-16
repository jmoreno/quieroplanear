var App = require('ghost-app'),

   	QuieroPlanear;

QuieroPlanear = App.extend({

		activate: function () {
		    console.log('QuieroPlanear: activate()');
		    this.ghost.helpers.register('disqus_subdomain', this.handleDisqusSubdomain);
		}
		
		handleDisqusSubdomain: function() {
				disqus_subdomain = process.env.DISQUS_SUBDOMAIN;
		    return('quieroplanear');
		}
		
});

module.exports = QuieroPlanear;