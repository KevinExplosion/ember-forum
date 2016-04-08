import Ember from 'ember';

export default Ember.Route.extend({
  model(questionParams) {
    return this.store.findRecord('question', questionParams.question_id);
  }
});
