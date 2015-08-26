(function() {

  var DateGenerator = function() {
    var doc = document;
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth();
    var year = '';
    var month = '';
    var firstDay = '';
    var lastDay = '';
    var weekDayArr = ['一', '二', '三', '四', '五', '六', '日'];
    var i = -1;
    var len = '';
    var count = '';
    var span = '';
    var outPut = doc.querySelector('.output');
    var submitBtn = doc.querySelector('.submit-btn');
    var div = doc.createElement('div');
    var yearPicker = doc.querySelector('.year-picker');
    var monthPicker = doc.querySelector('.month-picker');
    var colors = ['2980B9', '2C3E50', '1695A3', '468966'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // set up default settings
    yearPicker.value = currentYear;
    monthPicker.value = currentMonth;
    doc.body.style.backgroundColor = '#' + randomColor;

    submitBtn.addEventListener('click', function(e) {
      year = Number(yearPicker.value || currentYear);
      yearPicker.value = year;
      month = Number(monthPicker.options[monthPicker.selectedIndex].value);
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      len = lastDay.getDate() + 1;
      count = firstDay.getDay() - 1;
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
          span.textContent = ( month + 1 ) + '/' + i + '(' + weekDayArr[count] + ')';
          div.appendChild(span)
          count ++;
      }

      // append the result
      if (outPut) {
        outPut.appendChild(div);
      }

      e.preventDefault();
    }, false);

  };

  window.onload = function() {
    var dateG = new DateGenerator();
  };

}());
