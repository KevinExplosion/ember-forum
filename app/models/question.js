import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async:true })
});
