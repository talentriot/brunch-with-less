var View = require('./view').View;
var template = require('./templates/main-layout');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    this.on('route', function(route) {
      this.renderContent(route);
    }, this);
    var Header = require('./main/header'),
      Link = require('models/link');
    var links = new Link.Collection();
    links.initializeHeaderLinks();
    var header = new Header({
      collection: links
    });
    this.setView('header', header, true);
  },
  renderContent: function(page) {
    page = page || 'index';
    var Content = require('./main/' + page);
    var content = new Content();
    this.setView('content', content).render();
  }
});