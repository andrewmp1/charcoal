var Thing = DS.Model.extend({
  text: DS.attr('string'),
  url: DS.attr('string')
});

export = Thing;