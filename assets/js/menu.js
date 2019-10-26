window.navigation = window.navigation || {},
function(n) {
    navigation.menu = {
      constants: {
        sectionTemplate: '.section-template',
        contentContainer: '#wrapper',
        startSectionMenuItem: '#welcome-menu',
        startSection: '#dashboard'
      },

      importSectionsToDOM: function() {
        const links = document.querySelectorAll('link[rel="import"]')
        Array.prototype.forEach.call(links, function (link) {
          console.log(link)
          let template = link.import.querySelector(navigation.menu.constants.sectionTemplate)
          console.log(template)
          let clone = document.importNode(template.content, true)
          console.log(clone)
          document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)
          // console.log(navigation.menu.constants.contentContainer)
          console.log(document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)+"R")
          
        })
      },
//
      setMenuOnClickEvent: function () {
        document.body.addEventListener('click', function (event) {
          if (event.target.dataset.section) {
            navigation.menu.hideAllSections()
            navigation.menu.showSection(event)
          }
        })
      },

      showSection: function(event) {
        const sectionId = event.target.dataset.section
        $('#' + sectionId).show()
        $('#' + sectionId + ' section').show()
      },

      showStartSection: function() {
        $(this.constants.startSectionMenuItem).click()
        $(this.constants.startSection).show()
        $(this.constants.startSection + ' section').show()
      },

      hideAllSections: function() {
        $(this.constants.contentContainer + ' section').hide()
      },

      init: function() {
        this.importSectionsToDOM()
        this.setMenuOnClickEvent()
        this.showStartSection()
      }
    };

    n(function() {
        navigation.menu.init()
    })

}(jQuery);
