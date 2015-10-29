//THIS IS A GAME ABOUT A NON-PROFIT WHOSE PURPOSE IS TO
//RAISE MONEY TO COMBAT WORLD HUNGER!

//input values range from 1 - 100(max)

// var starvin = new Refugee()
// function Refugee(options) {
// }

//sallyStuther.goRaise(starvin)

function Character(options) {
  var options = options || {};
  this.fundraiserName = options.fundraiserName || "Robert Hernandez";
  this.refugeeName = options.refugeeName || {};
  this.wealth = options.wealth || 0;
  this.health = options.health || 0;
  this.event = new Event({name: "No Events", money: 0});
  this.eventIdea = function (event) {
    this.event = event;
  };

  this.goRaiseMoney = function (recipient) {

    var healthStatus = "";
      if(recipient.health <= 24){
        healthStatus += "poor";
        console.log(healthStatus);
    } else if(recipient.health >= 75) {
        healthStatus += "excellent";
        console.log(healthStatus);
    } else{
        healthStatus += "normal";
        console.log(healthStatus);
    }

    var randomInt = Math.floor(Math.random() * 10);
    if(randomInt <= 4) {
      recipient.wealth = recipient.wealth + this.event.money;
      recipient.health = recipient.health + 15;
      console.log("You're crushing it " + this.fundraiserName +" and have raised " + this.event.money + " dollars for " + recipient.refugeeName + "! Their overall wealth is " + recipient.wealth + " and health is " + healthStatus + ".");
    } else if(recipient.wealth <= 0 || recipient.health <= 0){
            console.log(this.fundraiserName + " your events failed to support the livelihood of " + recipient.refugeeName + ".  They die - Game Over!");
    } else if(randomInt === 5){
            console.log("Jackpot!  Bill Murray arrives at " + this.event.name + " and strokes a blank check. "  + recipient.refugeeName + " now lives in a mansion and is fat and happy - you Win!");
    } else{
          recipient.wealth = recipient.wealth - this.event.money;
          recipient.health = recipient.health - 25;
          console.log(this.fundraiserName + " your event costs ran higher than expected and you were not able to help " + recipient.refugeeName + " . His wealth has dropped and health is " + healthStatus + ".");
        }
};
}


function Event(options) {
  this.name = options.name || "No Events";
  this.money = options.money;
}

var sallyStruthers = new Character({fundraiserName: "Sally Struthers", wealth: 100});
// var sallyStruthers = new Character({fundraiserName: "Sally Struthers", refugeeName: "TukTuk"});
var fundraiserBill = new Character({fundraiserName: "Fundraiser Bill", wealth: 100});
var refugeeIvan = new Character({refugeeName:'Refugee Ivan', wealth: 5, health: 25});
var refugeeTukTuk = new Character({refugeeName:'Refugee Ivan', wealth: 0, health: 10});

// var golfTournament = new Event({money: 30, name: "Golf Tournament"});
// var celebSpeedDating = new Event({money: 15, name: "Celeb Speed Dating"});
// sallyStruthers.evnetIdea(celebSpeedDating);
// fundraiserBill.eventIdea(golfTournament);
