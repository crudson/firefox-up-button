var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var url = require('sdk/url');

var button = buttons.ActionButton({
  id: 'up-buton',
  label: 'Go up',
  icon: './go-up.png',
  onClick: goUp
});

function goUp() {
  var u = url.URL(tabs.activeTab.url);
  var bits = u.path.replace(/\/+$/, '').split('/');
  if (bits.length == 2) {
    tabs.activeTab.url = u.origin;
  } else if (bits.length > 2) {
    tabs.activeTab.url = u.origin + bits.slice(0, -1).join('/');
  }
}
