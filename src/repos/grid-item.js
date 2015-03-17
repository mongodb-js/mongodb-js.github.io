var ItemView = require('./item'),
  $ = require('jquery'),
  popoverTpl = require('./popover.jade');

require('bootstrap/js/tooltip');
require('bootstrap/js/popover');

module.exports = ItemView.extend({
  listeners: {
    'change:rendered': '_initPopover'
  },
  _initPopover: function(){
    this.$a = $('[data-toggle="popover"]', this.el);
    this.$a.popover({
      html: true,
      trigger: 'hover',
      container: 'body',
      placement: 'auto right',
      content: popoverTpl(this.model)
    });
  },
  template: require('./grid-item.jade')
});
