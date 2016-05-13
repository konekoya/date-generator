(function(win) {
  
  var global = win;
  var doc = document;
  var body = doc.body;

  function create(options) {
    var options = options || {};
    var box = doc.createElement('div');
    box.className = 'popup popup-is-disabled';
    box.textContent = options.txt || 'Copied!';
    body.appendChild(box)
  }

  function destory(el) {
    var el = doc.querySelector('.popup');
    if (el) {
      body.removeChild(el);
    }
  }

  function enable() {
    var el = doc.querySelector('.popup');
    if (el) {
      el.classList.remove('popup-is-disabled');
      el.classList.add('popup-is-active');
    }
  }

  function disable() {
    var el = doc.querySelector('.popup');
    if (el) {
      el.classList.remove('popup-is-active');
      el.classList.add('popup-is-disabled');
    }
  }

  function init() {
    create();
  }

  // public APIs
  global.POPUP = {
    init: init,
    create: create,
    destory: destory,
    enable: enable,
    disable: disable
  };

}(window));