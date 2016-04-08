import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      answer: this.store.findAll('answer'),
      question: this.store.findAll('question')
    });
  },

  actions: {

    saveAnswer(answerParams) {
      var newAnswer = this.store.createRecord('answer', answerParams);
      newAnswer.saveAnswer();
      this.transitionTo('index');
    },

    saveQuestion(questionParams) {
      var newQuestion = this.store.createRecord('question', questionParams);
      newQuestion.saveQuestion();
      this.transitionTo('index');
    }
  }
});
