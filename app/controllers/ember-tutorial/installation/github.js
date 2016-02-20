import Ember from 'ember';

export default Ember.Controller.extend({
	emberTutorial: Ember.inject.controller('emberTutorial.installation'),
	checkValue_git_1: false,
	checkValue_git_2: false,
	checkValue_git_3: false,
	// ProgressBar Git Check #1
	progressBarController_git_1: Ember.computed('checkValue_git_1', function() {
		if(this.get('checkValue_git_1') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar Git Check #2
	progressBarController_git_2: Ember.computed('checkValue_git_2', function() {
		if(this.get('checkValue_git_2') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar Git Check #3
	progressBarController_git_3: Ember.computed('checkValue_git_3', function() {
		if(this.get('checkValue_git_3') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	})
});
