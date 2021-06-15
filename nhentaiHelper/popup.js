document.addEventListener("DOMContentLoaded", documentEvents, false);
let sixDigit;

function myAction(input) {
  sixDigit=input.value.match(/\d{6}/);
  if(!sixDigit){return}
  sixDigitLink=`https://nhentai.net/g/${sixDigit}`;
//   alert(sixDigitLink);
   $.ajax({
     crossOrigin:true,
     url: sixDigitLink,
     type: "GET",
     success: function (data) {
        alert('0990')
       $("#content").html($(data).find("#content").html());
     },
   });
  
  // do processing with data
  // you need to right click the extension icon and choose "inspect popup"
  // to view the messages appearing on the console.
}

function documentEvents() {
  document.getElementById("detact").addEventListener("click", function () {
    myAction(document.getElementById("detact_text"));
  });

  // you can add listeners for other objects ( like other buttons ) here
}
