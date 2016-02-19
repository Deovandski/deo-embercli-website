import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
	// Website related
	this.route('header');
	this.route('footer');
	this.route('about');

	// Projects
	this.route('emberTutorial', function() {
		this.route('index', { path: '/' });
		this.route('installation', function() {
			this.route('ubuntuVirtualBox');
			this.route('github');
			this.route('testing');
			this.route('heroku');
		});
	});

	this.route('sassTutorial', function() {
		this.route('index', { path: '/' });
		this.route('installation', function() {
			this.route('windowsDesktop');
			this.route('rails');
			this.route('embercli');
			this.route('osX');
		});
		this.route('importsAndVariables');
		this.route('inheritance');
		this.route('nesting');
		this.route('more');
	});

	this.route('deoSpaceProgram', function() {
		this.route('index', { path: '/' });
		this.route('history');
		this.route('kerbals');
		this.route('missions');
		this.route('achievements');
		this.route('future');
		this.route('copyright');
	});

	// Archive for standalone websites...
	this.route('archives', function() {
		this.route('index', { path: '/' });
		this.route('favVocaloidSongs');
	});
});

export default Router;
