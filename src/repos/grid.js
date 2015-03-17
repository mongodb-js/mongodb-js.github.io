var AmpersandView = require('ampersand-view'),
  RepoGridItemView = require('./grid-item.js');

module.exports = AmpersandView.extend({
  template: '<div data-hook="repo-grid"></div>',
  render: function() {
    this.renderWithTemplate();
    this.renderCollection(this.collection, RepoGridItemView, this.queryByHook('repo-grid'));
  }
});
