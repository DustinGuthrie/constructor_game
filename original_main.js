//THIS IS A GAME ABOUT A NON-PROFIT WHOSE PURPOSE IS TO
//RAISE MONEY TO COMBAT WORLD HUNGER!

//input values range from 1 - 100(max)

// var starvin = new Refugee()
// function Refugee(options) {
// }

//sallyStuther.goRaise(starvin)
var clickedSection = "";
var userData = "";
// var playerName = document.getElementById("donorName").val;
// console.log(playerName);

$(document).ready(function () {

// $('section').first().addClass('active-section');

$('.button').on('click',function (event){
    // event.preventDefault();
    clickedSection = "." + $(this).attr('rel');
    // console.log($(this));
    console.log(clickedSection);
    if (clickedSection === '.golf') {
      $('.row').removeClass('active-section');
      $('#golfSection').addClass('active-section');
    } else if(clickedSection === '.startGame'){
      // playerName = document.getElementsByName("donorName").val;
      // console.log(playerName);

        // donorName = document.getElementById('#donorName');
          // playerName = document.getElementById('#donorName textarea');
          // console.log(playerName);
        $('.row').removeClass('active-section');
        $('#golf1').addClass('active-section');
      } else if(clickedSection === '.driver'){
        $('.row').removeClass('active-section');
        $('#golf1').addClass('active-section');
      } else if(clickedSection === '.iron'){
        $('.row').removeClass('active-section');
        $('#golf1').addClass('active-section');
      } else {
      console.log("nothing happened");
}

//
// $('form').on('submit', function (event) {
//   clickedSection = "." + $(this).attr('rel');
//   if (clickedSection === '.startGame') {
//     console.log(clickedSection);
//     playerName = document.getElementById('#donorName');
//     console.log(playerName);
//
//     $('.row').removeClass('active-section');
//     $('#golf1').addClass('active-section');
//   } else {
//       console.log("nothing happend");
//     }
//   });


  // var newPlayer = ({
  //   donorName: $('#donorName').val(),
  //   recipientName: $('#recipientName').val,
  //   donationAmount: $('#donationAmount').val
  });
//   todoData.push(newListItem);
//   var todoId = todoData.indexOf(newListItem);
//   // newListItem.id = todoId;
//   page.loadTemplate($('.all'), newListItem, $('#listTmpl').html());
//   $('aside textarea').val('');
//
// });

function Donor(options) {
  options = options || {};
  this.donorName = options.donorName || "Robert Hernandez";
  this.donationAmount = options.donationAmount || 0;

  this.event = new Event({name: "No Events", money: 0});
  this.eventIdea = function (event) {
    this.event = event;
  };

  function Recipient(options) {
    options = options || {};
    this.recipientName = options.recipientName || {};
    this.health = options.health || 0;
    this.wealth = options.wealth || 0;
  }

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
      console.log("You're crushing it " + this.donorName +" and have raised " + this.event.money + " dollars for " + recipient.recipientName + "! Their overall wealth is " + recipient.wealth + " and health is " + healthStatus + ".");
    } else if(recipient.wealth <= 0 || recipient.health <= 0){
            console.log(this.donorName + " your events failed to support the livelihood of " + recipient.recipientName + ".  They die - Game Over!");
    } else if(randomInt === 5){
            console.log("Jackpot!  Bill Murray arrives at " + this.event.eventName + " and strokes a blank check. "  + recipient.recipientName + " now lives in a mansion and is fat and happy - you Win!");
    } else{
          recipient.wealth = recipient.wealth - this.event.money;
          recipient.health = recipient.health - 25;
          console.log(this.donorName + " your event costs ran higher than expected and you were not able to help " + recipient.recipientName + " . His wealth has dropped and health is " + healthStatus + ".");
        }
};
}


function Event(options) {
  this.eventName = options.eventName || "No Events";
  this.money = options.money;
  // this.mission = options.mission;

}

// var sallyStruthers = new Donor({donorName: "Sally Struthers", wealth: 100});
// var sallyStruthers = new Character({fundraiserName: "Sally Struthers", refugeeName: "TukTuk"});
// var fundraiserBill = new Donor({donorName: "Fundraiser Bill", wealth: 100});
// var refugeeIvan = new Recipient({recipientName:'Refugee Ivan', wealth: 5, health: 25});
// var refugeeTukTuk = new Recipient({recipientName:'Refugee Ivan', wealth: 0, health: 10});

// var golfTournament = new Event({money: 30, name: "Golf Tournament"});
// var celebSpeedDating = new Event({money: 15, name: "Celeb Speed Dating"});
// sallyStruthers.evnetIdea(celebSpeedDating);
// fundraiserBill.eventIdea(golfTournament);

// });
});
