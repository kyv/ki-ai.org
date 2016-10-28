Blog.config({
  blogIndexTemplate: 'myBlogIndexTemplate',
  blogShowTemplate: 'myShowBlogTemplate'
});

Template.myBlogIndexTemplate.onRendered(function () {

  $("#content .header").addClass('fadeIn')
  .removeClass('fadeOut');

});
