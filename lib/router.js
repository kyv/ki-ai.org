Router.configure({
  layoutTemplate: 'Layout',
  fastRender: true
});

Router.route('/', {
  name: "home",
  waitOn: function () {
    return Meteor.subscribe('featuredPost');
  },
  action: function () {
    this.render('Home');
  }
});

Router.route('/tic', function () {
  this.render('TIC');
});

Router.route('/imagen', function () {
  this.render('Image', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('/sobre', function () {
  this.render('About');
});

Router.route('/letras', function () {
  this.render('Letras');
});

Router.route('/letras/:_id', function () {
  this.render('Letras');
});

Router.route('/contacto', function () {
  this.render('Contacto', {
  });
});

Router.route('/audio', function () {
  this.render('Audio', {
  });
});

Router.route('/tag', {
  waitOn: function () {
    return Meteor.subscribe('postTags');
  },
  action: function () {
    this.render('Tags');
  }
});

Router.route('/admin', function () {
  this.render('adminTemplate', {
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['blogAdmin'])) {
            console.log('redirecting');
            this.redirect('/');
        }
    }
  });
});

if (Meteor.isClient) {

  var defaults = {
    title: 'ki-ail.org',                 // Will apply to <title>, Twitter and OpenGraph.
    suffix: null,
    separator: '|',

    description: 'Rock & Roll',        // Will apply to meta, Twitter and OpenGraph.
    image: 'http://ki-ail.org/logo.png',   // Will apply to Twitter and OpenGraph.

    meta: {
      keywords: ['kung', 'fu', 'ki', 'ai', 'sonoro']
    },

    twitter: {
      card: 'ki ai',
      creator: '@handle'
      // etc.
    },

    og: {
      site_name: 'Ki-ai.org',
      image: '/logo.png'
      // etc.
    }
  };

  Router.plugin('bodyClasses');

}
