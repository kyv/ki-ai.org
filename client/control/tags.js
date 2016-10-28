Template.Tags.helpers({
  tags: function () {
    var posts = _.map(Tag.first().tags, function(string){
      return s.trim(string)
    })
    return _.uniq( posts );
  }
});
