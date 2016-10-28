featuredPost = new Mongo.Collection('featuredPost')

Template.Home.helpers({
  featured: function () {
    var post = featuredPost.findOne()
    return post;
  }
});
