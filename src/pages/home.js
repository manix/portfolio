const { Anchor } = require("luri-spa");

module.exports = class HomePage extends require("luri-spa").StaticPage {

  title() {
    return "Home";
  }

  props() {
    return {
      id: "page-home",
      html: [
        t("hi"), ".",
        luri.SPAN([
          t("im"), " ", luri.STRONG("Manix"), "."
        ]),
        t("iprogram", { node: "p" }),
        {
          class: "CTA",
          html: [
            new Anchor({
              class: "animated infinite",
              href: "/me",
              html: t("learnMore")
            })
          ]
        }
      ]
    }
  }

}
