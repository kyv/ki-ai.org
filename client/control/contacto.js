Template.Contacto.onRendered(function () {

  $("#content .header").addClass('fadeOut');
  $("#content .header").removeClass('fadeIn');

  $('#qrcode').qrcode( {
        text: "http://www.ki-ai.org",
        render: 'canvas',
        width: 128,
        height: 128,
        ecLevel: 'H',
        fill: "#910101",
        background: "#fafafa",
        radius: 0.2,
    });;

});
