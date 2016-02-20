import Ember from 'ember';

export default Ember.Controller.extend({
	emberTutorial: Ember.inject.controller('emberTutorial.installation'),
	checkValue_testing_1: false,
	checkValue_testing_2: false,
	checkValue_testing_3: false,
	// ProgressBar testing Check #1
	progressBarController_testing_1: Ember.computed('checkValue_testing_1', function() {
		if(this.get('checkValue_testing_1') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar testing Check #2
	progressBarController_testing_2: Ember.computed('checkValue_testing_2', function() {
		if(this.get('checkValue_testing_2') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar testing Check #3
	progressBarController_testing_3: Ember.computed('checkValue_testing_3', function() {
		if(this.get('checkValue_testing_3') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	})
});
