const { Anchor, StaticPage } = require("luri-spa");
const PageTable = require("../components/page-table");

module.exports = class MePage extends StaticPage {

  title() {
    return "Me";
  }

  animationIn(page) {
    switch (page.constructor.name) {
      case "StuffPage":
      case "ContactsPage":
        return "slideInLeft";
      default:
        return super.animationIn();
    }
  }

  animationOut(page) {
    switch (page.constructor.name) {
      case "StuffPage":
      case "ContactsPage":
        return "slideOutLeft";
      default:
        return super.animationOut();
    }
  }

  formatDate(date) {
    function twoDigits(d) {
      if (0 <= d && d < 10) return "0" + d.toString();
      if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
      return d.toString();
    }
    return date.getUTCFullYear() + "-" + twoDigits(1 + date.getUTCMonth()) + "-" + twoDigits(date.getUTCDate()) + " " + twoDigits(date.getUTCHours()) + ":" + twoDigits(date.getUTCMinutes()) + ":" + twoDigits(date.getUTCSeconds());
  }

  props() {
    return {
      id: "page-me",
      html: new PageTable(new Anchor({
        class: "title",
        html: "Me",
        href: "/"
      }), {
        name: '"Maxim"',
        nickname: '"Manix"',
        gender: '"m"',
        height: "0.186",
        weigth: "75",
        created_at: "1993-09-05 13:04:05",
        updated_at: this.formatDate(new Date),
        birth_location: "[43.858561, 25.961836]",
        displacement_driver: '"Limbs"',
        motivation_driver: '"Invention"',
        life_driver: '"Logic"',
        intolerances: '"Ignorance"',
        education: '"Mechanical Engineering"',
        occupation: '"Programming"',
        built_stuff: new Anchor({
          href: "/me/stuff",
          html: "*stuff[]"
        }),
        contacts: new Anchor({
          href: "/me/contacts",
          html: "*contact[]"
        })
      })
    }
  }

}
