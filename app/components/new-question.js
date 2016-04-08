import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    saveQuestion() {
      var questionParams = {
        title: this.get('title'),
        user: this.get('user'),
        subject: this.get('subject'),
        category: this.get('category'),
        body: this.get('body'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', questionParams);
    }
  }
});
