import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Admin and Super User related
  this.route('test', { path: '/test' });
});

export default Router;
