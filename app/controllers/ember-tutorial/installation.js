import Ember from 'ember';

export default Ember.Controller.extend({
	
	// Progress Bar Values
	progressBarValue: "progress_0",
	progressBarValueNumber: 0,
	checkValue_main_1: false,
	
	//
	progressBarValueMaker: Ember.computed('progressBarValueNumber', function() {
		if(this.get('progressBarValueNumber') <= 0) {
			this.incrementProperty('progressBarValueNumber');
			this.incrementProperty('progressBarValueNumber'); //Compensate for initial false values...
		}
		if(this.get('progressBarValueNumber') === 0) {
			this.set('progressBarValue','progress_0');
		}
		else if(this.get('progressBarValueNumber') === 12) {
			this.set('progressBarValue','progress_12');
		}
		else {
			this.set('progressBarValue','progress_' + this.get('progressBarValueNumber'));
			console.log(this.get('progressBarValueNumber'));
		}
	}),

	// ProgressBar Checker #1
	progressBarController_main_1: Ember.computed('checkValue_main_1', function() {
		if(this.get('checkValue_main_1') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	})
});
