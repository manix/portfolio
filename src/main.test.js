require("mocha-jsdom")({
  url: "http://localhost"
});
global.luri = require("luri");
global.History = require("history");
global.assert = require("assert");

describe("Main", function() {

  it("Setup", function() {
    require("../dist/main");

    assert.equal(document.title, "Home - spa-quickstart");
  });

});
