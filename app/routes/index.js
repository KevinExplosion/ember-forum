import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer');
  },

  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(answerParams) {
      var newAnswer = this.store.createRecord('answer', answerParams);
      newAnswer.saveAnswer();
      this.transitionTo('index');
    }
  }
});
