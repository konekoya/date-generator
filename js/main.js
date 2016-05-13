var DateGenerator = (function(win) {

  var global = win;
  var doc = document;
  var popup = global.POPUP;
  var date = new Date();
  var currentYear = date.getFullYear();
  var currentMonth = date.getMonth();
  var weekDayArr = ['一', '二', '三', '四', '五', '六', '日'];
  var outPut = doc.querySelector('.output');
  var submitBtn = doc.querySelector('.submit-btn');
  var copyBtn = doc.querySelector('.copy-btn');
  var div = doc.createElement('div');
  var yearPicker = doc.querySelector('.year-picker');
  var monthPicker = doc.querySelector('.month-picker');
  var popupEl = doc.querySelector('.popup');


  function setBackground(colors) {
    // temp solution, should come up a better and rubost one to replace this
    if (colors) {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      doc.body.style.backgroundColor = '#' + randomColor;
    }
  }

  function appendResult() {
    copyBtn.classList.add('btn-is-active');
    outPut.appendChild(div);
    if (!popupEl) {
      popup.init();
    }
  }

  function bindEvents() {

    function handleSubmit(e) {
      var year = Number(yearPicker.value || currentYear);
      yearPicker.value = year;
      var month = Number(monthPicker.options[monthPicker.selectedIndex].value);
      var firstDay = new Date(year, month, 1);
      var lastDay = new Date(year, month + 1, 0);
      var i = -1;
      var len = lastDay.getDate() + 1;
      var count = firstDay.getDay() - 1;
      var span = '';

      div.innerHTML = '';

      // prevent undefined day
      if (count === -1) {
        count = 6;
      }

      // create elements
      for (i = 1; i < len; i++) {
        span = doc.createElement('span');
        span.className = 'item';
        if (count > 6) {
          count = 0;
        }
        span.textContent = (month + 1) + '/' + i + '(' + weekDayArr[count] + ')';
        div.appendChild(span);
        count++;
      }

      // append the result
      if (outPut) {
        appendResult();
      }
      e.preventDefault();
    }

    function handleCopy(e) {
      popupEl = doc.querySelector('.popup');
      if (popupEl) {
        popup.enable();
      }
      e.stopPropagation();
    }

    function onDocClick(e) {
      popupEl = doc.querySelector('.popup');
      if (popupEl) {
        popup.disable();
      }
    }

    submitBtn.addEventListener('click', handleSubmit, false);

    // initialize clipboard
    copyBtn.addEventListener('click', handleCopy);

    doc.addEventListener('click', onDocClick)
  }

  function init() {
    // initialize the clicpboard plugin
    var clipboard = new Clipboard(copyBtn);

    // default values
    yearPicker.value = currentYear;
    monthPicker.value = currentMonth;

    setBackground(['2980B9', '2C3E50', '1695A3', '468966']);
    bindEvents();
  }

  var publicAPI = {
    init: init
  };

  return publicAPI;

}(window));

window.onload = function() {
  DateGenerator.init();
};
