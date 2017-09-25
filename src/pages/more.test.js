describe("Page-More", function() {

  before(function() {
    require("luri-spa").navigate("/more");
  });

  it("Title and Content", function() {
    assert.equal(document.title, "Under construction - spa-quickstart");
    assert(!!document.body.textContent.indexOf("Awaiting development"))
  });

});
