Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {

    var users = [
      {
        name: 'Etron',
        password: 'opwAinmFX1AK3',
        email: 'kevin@ki-ai.org',
        roles: ["blogAdmin"]
      }
    ];

    _.each(users, function (user) {

      var id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }

    });

  }

  if ( Letras.find().count() < 1 ) {

    var user = Meteor.users.findOne({ 'profile.name': 'Etron' });

    var letras = [
      {
        userId: user._id,

        es: {
          title: 'Certas Letras',
          body: 'Certas letras son la gluma</br>Otras van al grano.',
        },

        en: {
          title: 'Certain Letters',
          body: 'Certain letters are the chaffe</br>Others cut to the grain.'
        }

      }
    ]
    _.each( letras, function( letra ){
      var _id = Letras.insert({
        userId: letra.userId,
        title: letra.en.title,
        body: letra.en.body
      });

      var tid = Letras.insertTranslations( letra.en, {
        es: letra.es
      });
    })
  }
});
