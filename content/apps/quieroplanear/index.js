var App = require('ghost-app'),

   	MyApp;

MyApp = App.extend({

		activate: function () {
		    console.log('QuieroPlanear: activate()');
		    this.ghost.helpers.register('disqus_subdomain', this.handleDisqusSubdomain);
		}
		
		handleDisqusSubdomain: function() {
		    return('quieroplanear');
		}
		
});

module.exports = MyApp;