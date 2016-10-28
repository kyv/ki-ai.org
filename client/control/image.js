Meteor.startup(function () {
  Session.setDefault("mixed", false);
});

Template.imagesSlider.onRendered(function () {

  $("#slider").flexslider({
    animation: "slide"
  });

  $("#content .header").addClass('fadeIn')
  .removeClass('fadeOut');

});

Template.Image.helpers({
  mixed: function () {
    return Session.get("mixed");
  }
});

Template.imagesSlider.helpers({

  images: function () {
    var list = [];
    for (var i = 2; i <= 4; i++) {
      var img = "/pajaros-" + i +".jpg";
      list.push({url: img});
    }
    return list;
  }

});
