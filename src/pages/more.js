require("./more.scss");

module.exports = class MorePage extends require("luri-spa").StaticPage {

  title() {
    return "Under construction";
  }

  props() {
    return {
      id: "page-more",
      html: [
        {
          class: "marker",
        }, {
          node: "h1",
          html: "Under construction"
        }, {
          node: "p",
          html: "Awaiting development."
        }
      ]
    }
  }

}
