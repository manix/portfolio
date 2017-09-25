const { Anchor } = require("luri-spa");
const PageTable = require("../components/page-table");

module.exports = class StuffPage extends require("luri-spa").StaticPage {

  title() {
    return "Stuff";
  }

  animationIn(page) {
    switch (page.constructor.name) {
      case "MePage":
        return "slideInRight";

      case "StuffDetailsPage":
        return "slideInLeft";

      default:
        return super.animationIn();
    }
  }

  animationOut(page) {
    switch (page.constructor.name) {
      case "StuffDetailsPage":
        return "slideOutLeft";
      case "MePage":
        return "slideOutRight";

      default:
        return super.animationOut();
    }
  }

  props() {
    return {
      id: "page-stuff",
      html: new PageTable(new Anchor({
        class: "title",
        html: "Stuff",
        href: "/me"
      }), {
        0: new Anchor({
          html: "*luri",
          href: "/me/stuff/luri",
        }),
        1: new Anchor({
          html: "*guzi",
          href: "/me/stuff/guzi",
        }),
        2: new Anchor({
          html: "*artelugi",
          href: "/me/stuff/artelugi"
        }),
      })
    }
  }

}
