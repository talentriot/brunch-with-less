describe('Main Page', function() {
  var MainLayout = require('views/main-layout');
  var mainLayout = new MainLayout();
  var view, headerEl, layoutEl;

  view = mainLayout.render().view;
  view.trigger('route', require('views/main/index'));
  beforeEach(function() {
    layoutEl = view.$el;
    headerEl = layoutEl.find('header');
  });
  describe('Layout', function() {
    it('should have a jquery wrapped $el', function() {
      expect(mainLayout).to.have.property('$el');
    });
    it('layout should be rendered', function() {
      mainLayout.__manager__.should.have.property('hasRendered')
        .that.equals(true);
    });
    it('$el should be able to find a child element', function() {
      expect(headerEl).to.have.length(1);
    });
    it('there should be a link back to the homepage', function() {
      expect(layoutEl.find('a[href="/"]')).to.have.length.of.at.least(1);
    });
    it('there should be content', function() {
      expect(layoutEl.find('content').text()).to.have.length.of.at.least(2);
    });
  });
  describe('Header', function() {
    it('should display 4 links', function() {
      expect(headerEl.find('ul li')).to.have.length(4);
    });
    it('expect external links to have target=_blank', function() {
      expect(headerEl.find('a[target="_blank"]')).to.have.length.of.at.least(1);
    });
    it('should have a logo', function() {
      expect(headerEl.find('img')).to.have.length(1);
    });
  });
});
