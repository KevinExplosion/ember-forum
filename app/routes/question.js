import Ember from 'ember';

export default Ember.Route.extend({
  model(questionParams) {
    return this.store.findRecord('question', questionParams.question_id);
  },

  saveAnswer(answerParams) {
    var newAnswer = this.store.createRecord('answer', answerParams);
    var title = answerParams.title;

    question.get('answer').addObject(newAnswer);
    newAnswer.saveAnswer().then(function() {
      return title.save();
    });
  }
});
