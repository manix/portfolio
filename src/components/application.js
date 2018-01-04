const NotFoundPage = require("../pages/not-found");
const animate = require("css-animate").default;

module.exports = class Application extends require("luri-spa").Application {

  notFound() {
    return new NotFoundPage;
  }

  determineTitle(def) {
    return super.determineTitle(def) + " - " + require("../../package.json").name;
  }

  navigate(location) {
    if (this.ref.children.length > 1) {
      console.log("Prevented redirect.");
      return;
    }

    return super.navigate(location);
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

    animate(oldPage, animOut);
    animate(newPage, animIn).then(() => {
      
      this.ref.removeChild(oldPage);

      try {
        oldPage.luri.unload();
      } catch (e) {

      }

      done();
    });
    this.ref.appendChild(newPage);
  }
}
