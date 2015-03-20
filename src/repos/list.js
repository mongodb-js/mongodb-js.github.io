var AmpersandView = require('ampersand-view'),
  RepoListItemView = require('./list-item.js');

module.exports = AmpersandView.extend({
  template: '<div class="list-group" data-hook="repo-list"></div>',
  render: function() {
    this.renderWithTemplate();
    this.renderCollection(this.collection, RepoListItemView, this.queryByHook('repo-list'));
  }
});
