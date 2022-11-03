function checkform() {
  var a = document.getElementById('long');
  var b = document.getElementById('longp');
  var answer = "Phuong trinh: " + a + "x + " + b + "= 0 <br>";
  
  if (a === 0 && b === 0){
      answer += "vo so nghiem"
      document.getElementById('longxp') = answer;
  }
  if (a === 0 && b !== 0){
      answer += "vo nghiem"
      document.getElementById('longxp') = answer;
  }
  if (a !== 0){
      answer += "co nghiem la: " + (-b / a)
      document.getElementById('longxp') = answer;
  }
}