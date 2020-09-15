  function sd_() {
      var a_a = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
      a_a.open('get', 'http://192.168.1.47:3000/play/new', true);
      a_a.send();
      a_a.onreadystatechange = function () {
          if (a_a.readyState == 4) {
              if (a_a.status == 200) {
                  var ss_ = JSON.parse(a_a.responseText)
                  console.log(ss_.books)
                  // ss2
                  var int_ = doT.template(scrs.innerText);
                  ul_s.innerHTML = int_(ss_.books)
console.log(ss_)
              }
          }
      }
  }
  sd_();