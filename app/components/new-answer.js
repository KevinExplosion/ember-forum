import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    answerFormHide() {
      this.set('addNewAnswer', false);
    },

    saveAnswer() {
      var answerParams = {
        title: this.get('title'),
        user: this.get('user'),
        subject: this.get('subject'),
        category: this.get('category'),
        body: this.get('body'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', answerParams);
    }
  }
});
