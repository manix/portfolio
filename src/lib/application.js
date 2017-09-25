const NotFoundPage = require("../pages/not-found");

module.exports = class Application extends require("luri-spa").Application {

  notFound() {
    return new NotFoundPage;
  }

  determineTitle(def) {
    return super.determineTitle(def) + " - " + require("../../package.json").name;
  }

  render(location) {
    if (this.ref.children.length > 1) {
      this.ref.firstChild.onanimationend();
      this.ref.firstChild.onanimationend();
    }

    super.render(location);
  }

  renderComponent(definition, done) {
    let animIn, animOut,
      oldPage = this.ref.firstChild,
      newPage = luri.construct(definition);

    if (oldPage === newPage) {
      return done();
    }

    try {
      animOut = oldPage.luri.animationOut(newPage.luri);
    } catch (e) {
      animOut = "zoomOut";
    }

    try {
      animIn = definition.animationIn(oldPage.luri);
    } catch (e) {
      animIn = "fadeIn";
    }

    oldPage.onanimationend = () => {
      oldPage.onanimationend = null;
      oldPage.classList.remove("animated", animOut);

      this.ref.removeChild(oldPage);

      try {
        oldPage.luri.unload();
      } catch (e) {

      }

      done();
    };
    oldPage.classList.add("animated", animOut);

    newPage.onanimationend = () => {
      newPage.onanimationend = null;
      newPage.classList.remove("animated", animIn);
    }
    newPage.classList.add("animated", animIn);
    this.ref.appendChild(newPage);
  }
}
