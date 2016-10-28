// languange selector for add form
//<div class="form-inline">
//  <select name="language">
//    {{#each supportedLangs }}
//      <option value={{this}} {{ selectedLang this }} > {{this}}</option>
//    {{/each}}
//  </select>
//</div>

Template.Letras.onCreated(function() {

  this.state = new ReactiveDict();
  this.translation = new ReactiveDict();
  this.letras = new ReactiveVar();
  this.translation.set('state', false);
  this.swiper;

  TAPi18n.subscribe('letras');
  this.state.set('editing', false);
  this.state.set('slide', 0);
  var letras = Letras.find();
  this.letras.set(letras);
  var d = _.first(letras.fetch());
  if (d) {
    console.log(letras.fetch());
    console.log(d)

  }

  //this.state.set('letras', Letras.find())

});

Template.Letras.helpers({

  letras: function () {
    return Template.instance().letras.get();
  },

  instance: function () {
    return Template.instance()
  },

  selectedLang: function ( lang ) {
    return ( lang === TAPi18n.getLanguage() ) ? 'selected': '';
  },

  translation: function () {
    return Template.instance().translation;
  },

  autocomplete_settings: function () {
    return {
      position: "top",
      limit: 5,
      rules: [
        {
          collection: Letras,
          field: "title",
          template: Template.letraPill
        }
      ]
    };
  },

});

//EditableText.saveOnFocusout=false;
//EditableText.trustHTML=false;

Template.Letras.events({

  'autocompleteselect input': function(event, template, doc) {
      console.log("selected ", doc);
      template.translation.set('state', true);
      template.translation.set('orig-body', doc.body);
      template.translation.set('orig-title', doc.title);
      Meteor.call('documentAllLanguanges', doc._id, function(error, result){
        if (error) console.log(error)
        let doc = result.i18n.es;
        template.translation.set('trans-body', doc.body);
        template.translation.set('trans-title', doc.title);
      });
  },

  'click button.letra-add': function (event, template) {
    event.preventDefault();
    const target = event.target;
    console.log(target);
    console.log("add letra");

    title = template.find("input[name=title]");
    body = template.find("textarea[name=body]");
    lang = template.find("select[name=language]");
    
    if (lang) {
      id = Letras.insertTranslations({born: 1856, name: "Nikola Tesla"}, {
      es: {
          name: "尼古拉·特斯拉"
        }
      });
    } else {
      Letras.insert({
        title: title.value,
        body: body.value
      });
    }

  },

  'click .letras-add': function (event, template) {
    event.preventDefault();
    console.log("add");
    Router.go('/letras/ID#edit');
    template.state.set('editing', true);
  },

  'click button.translation-add': function (event, template) {
    event.preventDefault();
    const target = event.target;
    console.log(target);
    console.log("add letra");

    title = template.find("input[name=title]");
    body = template.find("textarea[name=body]");
    lang = template.find("select[name=language]");

    console.log(title.value,body.value,lang.value);
  },

  'click .letras-translate': function (event, template) {
    event.preventDefault();
    console.log("add");
    template.state.set('translation', true);
  },

  'click .letras-next': function (event, template) {
    event.preventDefault();
    var swiper = template.swiper;
    console.log(swiper);
    //swiper.slideTo(1, 400);
  }

});

Template.Letras.onRendered(function () {

  $("#content .header").addClass('fadeOut');
  $("#content .header").removeClass('fadeIn');
  this.$('[data-toggle="tooltip"]').tooltip();

  this.swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    nextButton: '.swiper-next-button',
    prevButton: '.swiper-prev-button',
    observer: true,
    hashnav: true,
    shortSwipes: false
  });

});
