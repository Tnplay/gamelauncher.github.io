var Version = ("V 1.0.0");
    var Info = ("Criado por Tnplay")
    var ConsoleLog = ("WeekNews iniciado a todo vapor...")
  var Online = true;
  var On = ("Status: WeekNews ON");
  var Off = ("Status: WeekNews OFF, volte mais tarde");
  var Error = ("Erro critico");
  if (Online === true) {
   window.alert(On);
} else if(Online === false) {
   window.alert(Off);
   //código em fase de testes beta:
   //close.()
   //não usar sem permissão
} else {
  window.alert(Error);
}
window.alert("Versão atual do WeekNews: " + Version);
console.log(ConsoleLog)
if (Online === true) {
  console.log(On);
} else if (Online === false) {
  console.log(Off)
} else {
  console.log(Error + " ao carregar os status do servidor!")
}
document.getElementById("jsinfo").innerHTML = Info + "™";
