var AmpersandView = require('ampersand-view'),
  _ = require('underscore');

module.exports = AmpersandView.extend({
  bindings: {
    'model.name': [
      {
        hook: 'name'
      },
      {
        hook: 'url',
        type: 'attribute',
        name: 'title'
      }
    ],
    'model.avatar_url': {
      type: 'attribute',
      name: 'src',
      hook: 'avatar'
    },
    'model.travis_badge_url': {
      type: 'attribute',
      name: 'src',
      hook: 'travis_badge_url'
    },
    'model.github_url': {
      type: 'attribute',
      name: 'href',
      hook: 'url'
    },
    'model.description': {
      hook: 'description'
    },
    'model.size': {
      hook: 'size'
    },
    'model.last_commit_at_string': {
      hook: 'last_commit_at'
    },
    'model.last_activity_at_string': {
      hook: 'last_activity_at'
    },
    'model.created_at_string': {
      hook: 'created_at'
    },
    'model.open_issues': {
      hook: 'open_issues'
    },
    'model.stargazers': {
      hook: 'stargazers'
    },
  },
  listeners: {
    // Short hand for `this.listenTo` in `initialize`.
    //
    // Example:
    // 'change:rendered': 'onRendered'
  },
  initialize: function() {
    this._initListeners();
  },
  _initListeners: function(){
    _.each(this.listeners, function(handlerName, eventName){
      this.listenTo(this, eventName, function(){
        _.defer(this[handlerName].bind(this));
      }.bind(this));
    }, this);
  }
});
