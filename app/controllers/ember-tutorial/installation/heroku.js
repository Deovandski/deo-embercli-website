import Ember from 'ember';

export default Ember.Controller.extend({
	emberTutorial: Ember.inject.controller('emberTutorial.installation'),
	checkValue_heroku_1: false,
	checkValue_heroku_2: false,
	checkValue_heroku_3: false,
	// ProgressBar heroku Check #1
	progressBarController_heroku_1: Ember.computed('checkValue_heroku_1', function() {
		if(this.get('checkValue_heroku_1') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar heroku Check #2
	progressBarController_heroku_2: Ember.computed('checkValue_heroku_2', function() {
		if(this.get('checkValue_heroku_2') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar heroku Check #3
	progressBarController_heroku_3: Ember.computed('checkValue_heroku_3', function() {
		if(this.get('checkValue_heroku_3') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	})
});
