import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Website related
  this.route('header');
  this.route('footer');
  this.route('about');

  // Projects related
});

export default Router;
