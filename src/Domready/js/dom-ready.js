//Test for DOM readiness; Show current date
jQuery(function($) {
  var date = new Date();
  window.alert(`¡El DOM está listo! The current session between client and server has begun on ${date}`);
});
