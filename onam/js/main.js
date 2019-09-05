var $zero = $(".main_cont");
var $one = $(".one");
var $two = $(".two");
var $three = $(".three");
var $four = $(".four");
var $five = $(".five");
var $six = $(".six");
var y;
var j = 1;
var fruits =
{
queue:
[]
};

function ans(x) {

  switch (x) {
    case 0:
      var tl0 = new TimelineMax();
      tl0.to($zero, .5, {x:"100%", ease: Power1.easeIn})
         .to($one, .5, {x:"-100%", ease: Power1.easeOut});

      $(".tzero").removeClass("active");
      $(".tone").addClass("active");

      break;

    case 1:

      y = $("#ans1").val();
      y = y.toLowerCase();

      if (y == "peace") {
        var tl1 = new TimelineMax();
        tl1.to($one, .5, {x:"100%", ease: Power1.easeIn})
           .to($two, .5, {x:"-100%", ease: Power1.easeOut});

        $(".tone").removeClass("active");
        $(".ttwo").addClass("active");
      }

      break;

    case 2:

      y = $("#ans2").val();
      y = y.toLowerCase();

      if (y == "love") {
        var tl2 = new TimelineMax();
        tl2.to($two, .5, {x:"100%", ease: Power1.easeIn})
           .to($three, .5, {x:"-100%", ease: Power1.easeOut});

        $(".ttwo").removeClass("active");
        $(".tthree").addClass("active");
      }

      break;

    case 3:

      y = $("#ans3").val();
      y = y.toLowerCase();

      if (y == "unity") {
        var tl3 = new TimelineMax();
        tl3.to($three, .5, {x:"100%", ease: Power1.easeIn})
           .to($four, .5, {x:"-100%", ease: Power1.easeOut});

        $(".tthree").removeClass("active");
        $(".tfour").addClass("active");
      }

      break;

    case 4:

      y = $("#ans4").val();
      y = y.toLowerCase();

      if (y == "respect") {
        var tl4 = new TimelineMax();
        tl4.to($four, .5, {x:"100%", ease: Power1.easeIn})
           .to($five, .5, {x:"-100%", ease: Power1.easeOut});

        $(".tfour").removeClass("active");
        $(".tfive").addClass("active");
      }

      break;

    // case 5:
    //
    //   y = $("#ans5").val();
    //   y = y.toLowerCase();
    //
    //   if (y != null) {
    //     var tl4 = new TimelineMax();
    //     tl4.to($five, .5, {x:"100%", ease: Power1.easeIn})
    //        .to($six, .5, {x:"-100%", ease: Power1.easeOut});
    //
    //     $(".tfive").removeClass("active");
    //     $(".tsix").addClass("active");
    //
    //
    //
    //     localStorage.setItem('fruits', JSON.stringify(fruits));
    //
    //     pushIt();
    //
    //     function outputIt() {
    //       var restoredFruits = JSON.parse(localStorage.getItem('fruits'));
    //       var outputs = "";
    //       for(var i = 0; i < restoredFruits.queue.length; i++)
    //       {
    //       	outputs += '<div id="'+restoredFruits.queue[i].id + '">' +i+':'+restoredFruits.queue[i].name + '</div>';
    //       }
    //       document.getElementById("winners").innerHTML= outputs;
    //     }
    //     // function popIt() {
    //     //   var restoredFruits  = JSON.parse(localStorage.getItem('fruits'));
    //     //   restoredFruits.queue.shift();
    //     //   localStorage.setItem('fruits', JSON.stringify(restoredFruits));
    //     //   outputIt();
    //     // }
    //     function pushIt() {
    //       var restoredFruits = JSON.parse(localStorage.getItem('fruits'));
    //
    //       restoredFruits.queue.push({
    //         id:  Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    //         name: y
    //       });
    //       localStorage.setItem('fruits', JSON.stringify(restoredFruits));
    //       outputIt();
    //     }
    //
    //   }
    //
    //   break;

    default:

  }


}
