(function(win) {
  
  var global = win;
  var doc = document;
  var body = doc.body;

  function create(options) {
    var options = options || {};
    var box = doc.createElement('div');
    box.className = 'popup';
    box.textContent = options.txt || 'Copied!';
    body.appendChild(box)
  }

  function destory(el) {
    var el = doc.querySelector('.popup');
    if (el) {
      body.removeChild(el);
    }
  }

  function init() {
    create();
  }

  global.POPUP = {
    init: init,
    create: create,
    destory: destory
  };


}(window));