/* Resources */
require("./index.html");
require("./main.scss");

/* lib */
const luri = require("luri");
const Application = require("./lib/application");

/* Components */


/* Pages */
const HomePage = require("./pages/home");
const MePage = require("./pages/me");
const StuffPage = require("./pages/stuff");
const StuffDetailsPage = require("./pages/stuff-details");
const ContactsPage = require("./pages/contacts");
const ComposePage = require("./pages/compose");
const MorePage = require("./pages/more");

let app = new Application({
  "/": new HomePage,
  "/me": new MePage,
  "/me/stuff": new StuffPage,
  "/me/stuff/:stuff": new StuffDetailsPage,
  "/me/contacts": new ContactsPage,
  "/me/contacts/compose": new ComposePage,
  "/more": new MorePage
}, require("history").createBrowserHistory());

let root = luri.construct({
  id: "app-wrapper",
  html: [
    app
  ]
});

app.start();

document.body.appendChild(root);

module.exports = app;
