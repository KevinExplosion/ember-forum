import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  subject: DS.attr(),
  answers: DS.hasMany('answer', { async:true })
});
