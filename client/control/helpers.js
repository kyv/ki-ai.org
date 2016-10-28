UI.registerHelper("currentRouteName",function(){
  return Router.current() ? Router.current().route.getName(): "";
});

UI.registerHelper("isAdminUser",function(){
  return Roles.userIsInRole(Meteor.user(), ['blogAdmin']);
});

UI.registerHelper("currentLang",function(){
  return TAPi18n.getLanguage();
});

UI.registerHelper("supportedLangs",function(){
  var l =  TAPi18n.getLanguages();
  return _.keys(l);
});
