import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,

  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    updateAnswerFormHide() {
      this.set('updateAnswerForm', false);
    },

    updateAnswer(answer) {
      var answerParams = {
        title: this.get('title'),
        author: this.get('author'),
        subject: this.get('subject'),
        category: this.get('category'),
        body: this.get('body'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, answerParams);
    }
  }
});
