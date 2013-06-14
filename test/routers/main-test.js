describe('Main Router', function() {
  var MainRouter = require('routers/main');
  var router = new MainRouter();
  it('should route to main correctly', function() {
    "/".should.route.to(new MainRouter(), "index");
  });
  it('should route to docs correctly', function() {
    "/docs".should.route.to(new MainRouter(), "docs");
  });
});
