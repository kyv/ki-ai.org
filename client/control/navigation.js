featuredLetra = new Mongo.Collection('featuredLetra')

Template.headNav.helpers({
  featured: function () {
    return featuredLetra.findOne()
  }
});

Template.headNav.events({
  'click .toggleLang': function(event, template) {
      event.preventDefault();
      var lang = TAPi18n.getLanguage();
      if (lang === 'en') {
        TAPi18n.setLanguage("es");
      }
      if (lang === 'es') {
        TAPi18n.setLanguage("en");
      }
  }
});

Template.headNav.helpers({

  language: function() {
    return TAPi18n.getLanguage();
  }

})
