window.localization = window.localization || {},
function(n) {
    localization.translate = {

      menu: function() {
        $('#welcome-menu').text(i18n.__('Dashboard'));
        $('#whoweare-menu').text(i18n.__('Who we are'));
        $('#whatwedo-menu').text(i18n.__('What we do'));
        $('#getintouch-menu').text(i18n.__('Print'));

      },

      welcome: function() {
        $('#welcome .inner p').text(i18n.__('Hopefully this helps someone to get up to speed with electron.'));
        $('#learn-more-button').text(i18n.__('Learn more'));
      },

      init: function() {
        this.welcome();
        this.menu();
      }
    };

    n(function() {
        localization.translate.init();
    })

}(jQuery);
