import Ember from 'ember';

export default Ember.Controller.extend({
	
	// Progress Bar Value
	progressBarValue: "progress_0",
	checkValue_1: false,
	checkValue_2: false,
	checkValue_3: false,
	checkValue_4: false,
	// ProgressBar Controller #1
	progressBarController_1: Ember.computed('checkValue_1', function() {
		console.log(this.get('checkValue_1'));
		if(this.get('checkValue_1') === true) {
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
	}),
	// ProgressBar Controller #2
	progressBarController_2: Ember.computed('checkValue_2', function() {
		if(this.get('checkValue_2') === true) {
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
