import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionDetailed: false,
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
