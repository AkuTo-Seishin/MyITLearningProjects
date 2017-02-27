function calcage() {
  var m = document.getElementsByName("month")[0].value;
  var d = document.getElementsByName("day")[0].value;
  var y = document.getElementsByName("year")[0].value;
  if(!m.length || !d.length || !y.length) return false;
  var age = ~~((Date.now() - +new Date(y,m,d)) / (31557600000));
  document.getElementsByName("age")[0].innerHTML = 'You are '+age+' years old!';
  var jetzt = new Date();
    jahr = jetzt.getFullYear();
  document.getElementsByName("days2nextbd") [0].innerHTML = 'Your next birthday is in '+daydiff(Date.now(),new Date(jahr,m,d))+' days!';
  return false;
}

  function daydiff(today, nextbd) {
      return Math.round((nextbd-today)/(1000*60*60*24));
  }
