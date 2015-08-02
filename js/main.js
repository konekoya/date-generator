(function() {

  var DateGenerator = function() {
    var doc = document;
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var monthArr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    var weekDayArr = ['一', '二', '三', '四', '五', '六', '日'];
    var i = -1;
    var len = lastDay.getDate() +1;
    var count = firstDay.getDay() - 1;
    var span = '';
    var frag = doc.createDocumentFragment();
    var outPut = doc.querySelector('.output');
    var submitBtn = doc.querySelector('.submit-btn');
    var yearPicker = '';
    var monthPicker = '';

    submitBtn.addEventListener('click', function(e){
      yearValue = doc.querySelector('.year-picker').value;
      monthPicker = doc.querySelector('.month-picker');
      monthValue = monthPicker.options[monthPicker.selectedIndex].text;
      e.preventDefault();
    }, false);

    for (i = 1; i < len; i++) {
        span = doc.createElement('span');
        span.className = 'item';
        if (count > 6) {
          count = 0;
        }
        span.textContent = ( month + 1 ) + '/' + i + '(' + weekDayArr[count] + ')';
        frag.appendChild(span);
        count ++;
    }

    if (outPut) {
      outPut.appendChild(frag);
    }
  };

  window.onload = function() {
    var dateG = new DateGenerator();
  };

}());
