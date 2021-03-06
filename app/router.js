import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-in');
  this.route('sign-out');
  this.route('sign-up');
  this.route('answer', {path: '/answer/:answer_id'});
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
