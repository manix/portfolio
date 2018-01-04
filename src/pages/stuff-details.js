const { Anchor, DynamicPage, navigate } = require("luri-spa");
const PageTable = require("../components/page-table");

const stuff = {
  "...": {
    "name": "..."
  },
  luri: {
    name: "luri",
    description: [
      { html: "JavaScript library that constructs HTML elements from JS Objects." },
      luri.BR(),
      { html: "Follow-up plugins and extensions were built which expand the functionality of the library." },
      luri.BR(),
      { html: "This very application is built using a framework based on the library." }
    ],
    external_res: luri.A({
      html: "*github",
      href: "https://github.com/luri/lib",
      target: "_blank"
    })
  },
  guzi: {
    name: "guzi",
    description: [
      "Coming soon.."
    ]
  },
  artelugi: {
    name: "Artelugi.com",
    description: [
      "A presentational website for a german dance/art agency."
    ],
    external_res: luri.A({
      html: "*artelugi.com",
      href: "http://artelugi.com",
      target: "_blank"
    }),
    preview: luri.IMG({
      style: "width: 100%;",
      src: "/" + require("../images/artelugi.png"),
      onload: e => e.target.parentNode.style.padding = "0"
    })
  }
};

module.exports = class StuffDetailsPage extends DynamicPage {

  constructor() {
    super();

    this.on("navigated", function(segments, app) {
      if (stuff[segments.stuff]) {
        app.setTitle(app.determineTitle(this));
      } else {
        navigate("/me/stuff");
      }
    });
  }

  unload() {
    this.segments.stuff = "...";
    this.reconstruct();
  }

  title() {
    try {
      return stuff[this.segments.stuff].name;
    } catch (e) {
      return "...";
    }
  }

  animationIn(page) {
    switch (page.constructor.name) {
      case "StuffPage":
        return "slideInRight";

      default:
        return super.animationIn();
    }
  }

  animationOut(page) {
    switch (page.constructor.name) {
      case "StuffPage":
        return "slideOutRight";

      default:
        return super.animationOut();
    }
  }

  staticProps() {
    return {
      id: "page-stuff-details",
      html: new PageTable(new Anchor({
        class: "title",
        html: "...",
        href: "/me/stuff"
      }), stuff["..."])
    }
  }

  dynamicProps() {
    let key = this.segments.stuff;

    return Promise.resolve({
      id: "page-stuff-details",
      html: new PageTable(new Anchor({
        class: "title",
        html: stuff[key].name,
        href: "/me/stuff"
      }), stuff[key])
    });
  }

}
