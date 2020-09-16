 function sd_(a,b,c,d) {
      var a_a = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
      a_a.open(d, 'http://192.168.1.47:3000'+a, true);
      a_a.send();
      a_a.onreadystatechange = function () {
          if (a_a.readyState == 4) {
              if (a_a.status == 200) {
                  var ss_ = JSON.parse(a_a.responseText)
                  for(var i=0;i<ss_.length;i++){
                          var int_ = doT.template(b.innerText);
                        c.innerHTML = int_(ss_[i])
                      console.log(ss_[i])
                  } 
              }
          }
      }
  }
