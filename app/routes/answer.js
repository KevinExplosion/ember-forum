import Ember from 'ember';

export default Ember.Route.extend({
  model(answerParams) {
    return this.store.findRecord('answer', answerParams.answer_id);
  },

  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },

    updateAnswer(answer, answerParams) {
      Object.keys(answerParams).forEach(function(key) {
        if(answerParams[key]!==undefined) {
          answer.set(key,answerParams[key]);
        }
      });
      answer.saveAnswer();
      this.transitionTo('index');
    }
  }
});
