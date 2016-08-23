// LIST ALL FUNCTION FOR ALL CARDS
var allCards = [];
allCards["100"] =	function(){ $.fn.fullpage.moveTo('2');}
allCards["101"] = function(){$.fn.fullpage.moveTo('3');}

var connection = new WebSocket('ws://localhost:1338');

connection.onopen = function(){
    console.log("open connection");
}

connection.onmessage = function(message){
  try {
       var json = JSON.parse(message.data);
   } catch (e){
      alert("BAD JSON");
      return;
   }
   var cardID = json.message.replace(/(\r\n|\n|\r)/gm,"");
   if(allCards[cardID]!=undefined){
     allCards[cardID]();
   }
   console.log(cardID);
}

connection.onerror = function(error){
  alert("PROBLEM WITH SERVER");
}