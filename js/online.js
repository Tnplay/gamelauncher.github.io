  var Version = ("V 1.0.0");
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
  //usar apenas com permissão
} else {
  window.alert(Error);
}
window.alert("Verso atual do WeekNews: " + Version);
