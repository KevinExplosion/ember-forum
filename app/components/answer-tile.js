import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerDetailed: false,
  actions: {
    answerShow: function() {
      this.set('isAnswerDetailed', true);
    },

    answerHide: function() {
      this.set('isAnswerDetailed', false);
    }
  }
});
