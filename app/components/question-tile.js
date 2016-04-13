import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionDetailed: false,

  questionAndUser: Ember.computed('question.title', 'question.user', function() {
    return this.get('question.title') + '. Submitted by: ' + this.get('question.user');
  }),

  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    updateQuestion(question, questionParams) {
      this.sendAction('updateQuestion', question, questionParams);
    },

    questionShow: function() {
      this.set('isQuestionDetailed', true);
    },

    questionHide: function() {
      this.set('isQuestionDetailed', false);
    }
  }
});
