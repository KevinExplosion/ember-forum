import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateQuestionFormHide() {
      this.set('updateQuestionForm', false);
    },

    updateQuestion(question) {
      var questionParams = {
        title: this.get('title'),
        user: this.get('user'),
        subject: this.get('subject'),
        category: this.get('category'),
        body: this.get('body'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, questionParams);
    }
  }
});
