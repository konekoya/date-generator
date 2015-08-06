(function() {

  var DateGenerator = function() {
    var doc = document;
    var date = new Date();
    var currentYear = date.getFullYear();
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
    var copyBtn = doc.querySelector('.copy-btn');
    var temp = '';

    submitBtn.addEventListener('click', function(e) {
      year = Number(doc.querySelector('.year-picker').value || currentYear)
      month = doc.querySelector('.month-picker');
      month = Number(month.options[month.selectedIndex].value);
      firstDay = new Date(year, month, 1);
      lastDay = new Date(year, month + 1, 0);
      len = lastDay.getDate() + 1;
      count = firstDay.getDay() - 1;
      div.innerHTML = '';
      copyBtn.classList.remove('hide');

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
