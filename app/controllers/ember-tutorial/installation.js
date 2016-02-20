import Ember from 'ember';

export default Ember.Controller.extend({
	
	// Progress Bar Values
	progressBarValue: "progress_0",
	progressBarValueNumber: 0,
	checkValue_main_1: false,
	
	//
	progressBarValueMaker: Ember.computed('progressBarValueNumber', function() {
		if(this.get('progressBarValueNumber') < 0) {
			this.set('progressBarValueNumber', 3); //Compensate for initial false values...
		}
		else if(this.get('progressBarValueNumber') === 0) {
			this.set('progressBarValue','progress_0');
		}
		else if(this.get('progressBarValueNumber') === 3) { //Compensate for sub_route changes...
			this.set('progressBarValue','progress_5');
			this.set('progressBarValueNumber', 5);
		}
		else if(this.get('progressBarValueNumber') === 7) { //Compensate for sub_route changes...
			this.set('progressBarValue','progress_8');
			this.set('progressBarValueNumber', 8);
		}
		else if(this.get('progressBarValueNumber') === 10) { //Go to 12 because why not?
			this.set('progressBarValue','progress_12');
			this.set('progressBarValueNumber', 11);
		}
		else if(this.get('progressBarValueNumber') === 11) { 
			this.set('progressBarValue','progress_12');
			this.set('progressBarValueNumber', 11);
		}
		else if(this.get('progressBarValueNumber') === 12) {
			this.set('progressBarValue','progress_12');
		}
		else if(this.get('progressBarValueNumber') > 12) {
			this.set('progressBarValue','progress_12');
			this.set('progressBarValueNumber', 12);
		}
		else {
			this.set('progressBarValue','progress_' + this.get('progressBarValueNumber'));
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
