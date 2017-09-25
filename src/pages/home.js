require("./home.scss");
const { Anchor } = require("luri-spa");

module.exports = class HomePage extends require("luri-spa").StaticPage {

  title() {
    return "Home";
  }

  props() {
    return {
      id: "page-home",
      html: [
        luri.H1("Hi."),
        luri.H1(["I'm ", luri.STRONG("Manix"), "."]),
        luri.P("I program stuff."),
        {
          class: "CTA",
          html: [
            new Anchor({
              class: "animated infinite",
              href: "/me",
              html: "Learn more"
            })
          ]
        }
      ]
    }
  }

}
