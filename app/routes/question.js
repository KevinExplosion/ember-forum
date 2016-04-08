import Ember from 'ember';

export default Ember.Route.extend({
  model(questionParams) {
    return this.store.findRecord('question', questionParams.question_id);
  },

  destroyQuestion(question) {
    var answer_deletions = question.get('answers').map(function(answer) {
      return answer.destroyRecord();
    });
    Ember.RSVP.all(answer_deletions).then(function() {
      return question.destroyRecord();
    });
    this.transitionTo('index');
  },

  saveAnswer(answerParams) {
    var newAnswer = this.store.createRecord('answer', answerParams);
    var question = answerParams.question;

    question.get('answer').addObject(newAnswer);
    newAnswer.saveAnswer().then(function() {
      return question.save();
    });
  }
});
