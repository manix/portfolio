const { Anchor, StaticPage } = require("luri-spa");
const PageTable = require("../components/page-table");

module.exports = class ContactsPage extends StaticPage {

  title() {
    return "Contacts";
  }

  animationIn(page) {
    switch (page.constructor.name) {
      case "MePage":
        return "slideInRight";
      case "ComposePage":
        return "slideInLeft";
      default:
        return super.animationIn();
    }
  }

  animationOut(page) {
    switch (page.constructor.name) {
      case "MePage":
        return "slideOutRight";
      case "ComposePage":
        return "slideOutLeft";
      default:
        return super.animationOut();
    }
  }

  props() {
    return {
      id: "page-contacts",
      html: new PageTable(new Anchor({
        class: "title",
        html: "Contacts",
        href: "/me"
      }), {
        0: new Anchor({
          href: "https://github.com/manix",
          html: "*github",
          target: "_blank"
        }),
        1: new Anchor({
          href: "https://www.linkedin.com/in/maxim-maximov-519b09107/",
          html: "*linkedin",
          target: "_blank"
        }),
        2: new Anchor({
          href: "https://facebook.com/Manixchy",
          html: "*facebook",
          target: "_blank"
        }),
        3: new Anchor({
          href: "/me/contacts/compose",
          html: "*send_message"
        })
      })
    }
  }

}
