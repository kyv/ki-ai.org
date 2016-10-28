Meteor.publish("featuredPost", function() {
  var sub = this;
  var cur = Post.find( { published: true }, { limit: 1, sort: { publishedAt: -1 } } );
  Mongo.Collection._publishCursor( cur, sub, "featuredPost" );
  return sub.ready();
});

TAPi18n.publish("featuredLetra", function() {
  var sub = this;
  var cur = Letras.i18nFind( { limit: 1 } );
  TAPi18n.Collection._publishCursor( cur, sub, "featuredLetra" );
  return sub.ready();
});

TAPi18n.publish("letras", function () {
    return Letras.i18nFind();
});
