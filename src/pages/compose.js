require("./compose.scss");

const { Anchor, StaticPage, Form } = require("luri-spa");
const { Control, controls: c } = require("luri-form");
const PageTable = require("../components/page-table");

function validate(form) {
  let e = form.elements,
    err = {};

  if (!e.name.value) {
    err.name = "What is your name?";
  }

  if (!e.email.value) {
    err.email = "To whom should I reply?";
  }

  if (!e.message.value) {
    err.message = "Don't be shy, say something.";
  }

  return err;
}

module.exports = class ComposePage extends StaticPage {

  title() {
    return "Compose";
  }

  animationIn(page) {
    switch (page.constructor.name) {
      case "ContactsPage":
        return "slideInRight";
      default:
        return super.animationIn();
    }
  }

  animationOut(page) {
    switch (page.constructor.name) {
      case "ContactsPage":
        return "slideOutRight";
      default:
        return super.animationOut();
    }
  }

  props() {


    return [
      new Form({
        id: "page-compose",
        method: "POST",
        action: "/send",
        html: new PageTable(new Anchor({
          class: "title",
          html: "Compose",
          href: "/me/contacts"
        }), {
          your_name: new Control(c.text("name"), false),
          your_email: new Control(c.email("email"), false),
          your_message: new Control(c.textarea("message"), false),
          send: luri.BUTTON({ type: "submit", html: "Send" })
        })
      }, validate)
    ];
  }
}
