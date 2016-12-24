var Version = ("V 1.0.0");
    var Info = ("Criado por Tnplay");
  var Online = false;
  var On = ("Status: WeekNews ON");
  var Off = ("Status: WeekNews OFF, volte mais tarde");
  var Error = ("Erro critico");
  if (Online === true) {
   window.alert(On);
} else if(Online === false) {
   window.alert(Off);
    window.location.replace("https://tnplay.github.io/error404.github.io/");
   //código em fase de testes beta:
   //close.()
   //não usar sem permissão
} else {
  window.alert(Error);
}
window.alert("Versão atual do WeekNews: " + Version);
document.getElementById("jsinfo").innerHTML = Info + "™";
