import Ember from 'ember';

export default Ember.Controller.extend({
	
	// Progress Bar Values
	progressBarValue: "progress_0",
	progressBarValueNumber: 0,
	checkValue_1: false,
	checkValue_2: false,
	checkValue_3: false,
	checkValue_4: false,
	checkValue_5: false,
	checkValue_6: false,
	checkValue_7: false,
	checkValue_8: false,
	checkValue_9: false,
	checkValue_10: false,
	checkValue_11: false,
	checkValue_12: false,
	setup_complete: false,
	
	// Append progressBarValueNumber into the #id for progress_X
	progressBarValueMaker: Ember.computed('progressBarValueNumber', function() {
		console.log(this.get('progressBarValueNumber'));
		// DirtyFix for onLoad() to reset value to 0 in order for ProgressBar to value.
		// To prevent CPU spike, value is only set on -12
		if (this.get('progressBarValueNumber') < 0) {
			if (this.get('progressBarValueNumber') === -12) {
				this.set('progressBarValueNumber','0');
				this.set('progressBarValue','progress_' + this.get('progressBarValueNumber'));
			}
		}
		else{
			// Set setup_complete to true when the user finishes the guide.
			if(this.get('progressBarValueNumber') === 12) {
				this.set('setup_complete',true);
			}
			else {
				this.set('setup_complete',false);
			}
			this.set('progressBarValue','progress_' + this.get('progressBarValueNumber'));
		}
	}),

	/*	ProgressBar Boolean Watchers
		Must be separated into individual computed property otherwise a
		value change will trigger multiple checkers that will cause
		progressBarValueMaker() to go out of bonds.

		Hooks:
		#1  = Ubuntu/Virtual Box & Ubuntu 14.04
		#2  = Ubuntu/Overall Dependencies
		#3  = Ubuntu/Project Dependecies
		#4  = Git/How to use versioning
		#5  = Git/Create an account
		#6  = Git/Clone and setup project
		#7  = Testing/Project Tests
		#8  = Testing/TravisCI
		#9  = Testing/CodeClimate
		#10 = Heroku/Setup Acct
		#11 = Heroku/Hook Github Project
		#12 = Heroku/Live Website test
	*/
	
	// ProgressBar Boolean Watcher #1
	checkValue_1_watcher: Ember.computed('checkValue_1', function() {
		if(this.get('checkValue_1') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #2
	checkValue_2_watcher: Ember.computed('checkValue_2', function() {
		if(this.get('checkValue_2') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #3
	checkValue_3_watcher: Ember.computed('checkValue_3', function() {
		if(this.get('checkValue_3') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #4
	checkValue_4_watcher: Ember.computed('checkValue_4', function() {
		if(this.get('checkValue_4') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #5
	checkValue_5_watcher: Ember.computed('checkValue_5', function() {
		if(this.get('checkValue_5') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #6
	checkValue_6_watcher: Ember.computed('checkValue_6', function() {
		if(this.get('checkValue_6') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #7
	checkValue_7_watcher: Ember.computed('checkValue_7', function() {
		if(this.get('checkValue_7') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #8
	checkValue_8_watcher: Ember.computed('checkValue_8', function() {
		if(this.get('checkValue_8') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #9
	checkValue_9_watcher: Ember.computed('checkValue_9', function() {
		if(this.get('checkValue_9') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #10
	checkValue_10_watcher: Ember.computed('checkValue_10', function() {
		if(this.get('checkValue_10') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #11
	checkValue_11_watcher: Ember.computed('checkValue_11', function() {
		if(this.get('checkValue_11') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
	// ProgressBar Boolean Watcher #12
	checkValue_12_watcher: Ember.computed('checkValue_12', function() {
		if(this.get('checkValue_12') === true) {
			this.incrementProperty('progressBarValueNumber');
		}
		else {
			this.decrementProperty('progressBarValueNumber');
		}
	}),
});
