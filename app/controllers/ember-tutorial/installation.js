import Ember from 'ember';

export default Ember.Controller.extend({
	
	// Progress Bar Value
	progressBarValue: "progress_0",
	checkValue_main_1: false,
	// ProgressBar Controller #1
	progressBarController_main_1: Ember.computed('checkValue_main_1', function() {
		if(this.get('checkValue_main_1') === true) {
			if(this.get('progressBarValue') === "progress_0") {
				this.set('progressBarValue','progress_1');
			}
			else if(this.get('progressBarValue') === "progress_1") {
				this.set('progressBarValue','progress_2');
			}
			else if(this.get('progressBarValue') === "progress_2") {
				this.set('progressBarValue','progress_3');
			}
			else {
				this.set('progressBarValue','progress_4');
			}
		}
		else {
			if(this.get('progressBarValue') === "progress_4") {
				this.set('progressBarValue','progress_3');
			}
			else if(this.get('progressBarValue') === "progress_3") {
				this.set('progressBarValue','progress_2');
			}
			else if(this.get('progressBarValue') === "progress_2") {
				this.set('progressBarValue','progress_1');
			}
			else {
				this.set('progressBarValue','progress_0');
			}
		} 
	})
});
