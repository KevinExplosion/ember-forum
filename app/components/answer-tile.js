import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerDetailed: false,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    
    answerShow: function() {
      this.set('isAnswerDetailed', true);
    },

    answerHide: function() {
      this.set('isAnswerDetailed', false);
    }
  }
});
