Meteor.methods({

  'documentAllLanguanges': function( docId ){
    check(docId, String);
    var result = Letras.findOne(docId);
    return result;
  }

});
