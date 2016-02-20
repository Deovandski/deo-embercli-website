import Ember from 'ember';

export default Ember.Controller.extend({
	emberTutorial: Ember.inject.controller('emberTutorial.installation'),
	checkValue_ubuntu_1: false,
	// ProgressBar Controller #1
	progressBarController_ubuntu_1: Ember.computed('checkValue_ubuntu_1', function() {
		if(this.get('checkValue_ubuntu_1') === true) {
			if(this.get('emberTutorial.progressBarValue') === "progress_0") {
				this.set('emberTutorial.progressBarValue','progress_1');
			}
			else if(this.get('emberTutorial.progressBarValue') === "progress_1") {
				this.set('emberTutorial.progressBarValue','progress_2');
			}
			else if(this.get('emberTutorial.progressBarValue') === "progress_2") {
				this.set('emberTutorial.progressBarValue','progress_3');
			}
			else {
				this.set('emberTutorial.progressBarValue','progress_4');
			}
		}
		else {
			if(this.get('emberTutorial.progressBarValue') === "progress_4") {
				this.set('progressBarValue','progress_3');
			}
			else if(this.get('emberTutorial.progressBarValue') === "progress_3") {
				this.set('progressBarValue','progress_2');
			}
			else if(this.get('emberTutorial.progressBarValue') === "progress_2") {
				this.set('emberTutorial.progressBarValue','progress_1');
			}
			else {
				this.set('emberTutorial.progressBarValue','progress_0');
			}
		} 
	})
});
