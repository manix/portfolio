module.exports = class NotFoundPage extends require("luri-spa").StaticPage {

  title() {
    return "Not found";
  }

  props() {
    return {
      id: "page-not-found",
      style: "display: flex; align-items: center; justify-content: center; flex-direction: column",
      html: [
        {
          style: "font-size: 300%; margin-bottom: 5%;",
          html: ":("
        },
        luri.SPAN("Page not found")
      ]
    }
  }

}
