import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-in');
  this.route('sign-out');
  this.route('sign-up');
});

export default Router;
