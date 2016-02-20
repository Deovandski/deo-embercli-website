import Ember from 'ember';

export default Ember.Controller.extend({
	emberTutorial: Ember.inject.controller('emberTutorial.installation'),
	checkValue_ubuntu_1: false,
	checkValue_ubuntu_2: false,
	checkValue_ubuntu_3: false,
	// ProgressBar Ubuntu Check #1
	progressBarController_ubuntu_1: Ember.computed('checkValue_ubuntu_1', function() {
		if(this.get('checkValue_ubuntu_1') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar Ubuntu Check #2
	progressBarController_ubuntu_2: Ember.computed('checkValue_ubuntu_2', function() {
		if(this.get('checkValue_ubuntu_2') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	}),
	// ProgressBar Ubuntu Check #3
	progressBarController_ubuntu_3: Ember.computed('checkValue_ubuntu_3', function() {
		if(this.get('checkValue_ubuntu_3') === true) {
			this.incrementProperty('emberTutorial.progressBarValueNumber');
		}
		else {
			this.decrementProperty('emberTutorial.progressBarValueNumber');
		}
	})
});