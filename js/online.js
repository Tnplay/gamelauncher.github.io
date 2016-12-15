  var Version = ("V 1.0.0");
  var Online = true;
  var On = ("Status: WeekNews ON");
  var Off = ("Status: WeekNews OFF, volte mais tarde");
  var Error = ("Erro critico");
  if (Online === true) {
   console.log(On);
} else if(Online === false) {
   console.log(Off);
} else {
  console.log(Error);
}
console.log("Verso atual do WeekNews: " + Version);
