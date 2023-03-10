$(function () {
  // Show the counts in the buttons
  var allCount = $("#projects-div").find(".card").length;
  console.log(allCount)
  $("#all").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + allCount + "</span>");

  var bluesCount = $("#projects-div").find(".blues").length;
  var greensCount = $("#projects-div").find(".greens").length;
  var orangesCount = $("#projects-div").find(".oranges").length;
  var redsCount = $("#projects-div").find(".reds").length;
  var greysCount = $("#projects-div").find(".greys").length;
  var tealsCount = $("#projects-div").find(".teals").length;

  $("#blues").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + bluesCount + "</span>");
  $("#greens").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + greensCount + "</span>");
  $("#reds").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + redsCount + "</span>");
  $("#oranges").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + orangesCount + "</span>");
  $("#teals").append("<span class='ml-3 badge badge-light badge-pill text-smaller'>" + tealsCount + "</span>");

  //   Clear the search
  $("#search-refresh-button").on("click", function () {
    // Show all the cards
    $(".card-container").css("display", "block");
    $(".card-container").removeClass("d-none");
    $("#search-input").val("");

    // Reset the filter buttons
    $("#filter-buttons .btn").removeClass("active");
    $("#filter-buttons .btn").find(".all").addClass("active");
  });

  $(document).on("click", "#filter-buttons .btn", function (event) {
    $("#search-input").val("");

    // Hide everyting to start
    $(".card-container").addClass("d-none");

    // Get the id text of the button clicked
    var buttonClicked = $(this).data("type");

    // Turn the id text into a class name
    var show = "." + buttonClicked;

    if (buttonClicked === "all") {
      $(".card-container").fadeIn("slow").removeClass("d-none");
    } else {
      // show all the panels with this class name
      // $(show).removeClass("hidden");
      $(show).parent().removeClass("d-none").css("display", "block");
    }
  });

  $(document).on("click", "#filter-buttons span", function (e) {
    e.stopPropagation(); // stop the event from bubbling up
    $(this).parent(".btn").click(); // trigger the button click event
  });

  // Show all panels on focus into the input field
  $("#search-input").on("focus", function () {
    // Clear all other the buttons
    $("#filter-buttons .btn").removeClass("active");
    $("#filter-buttons .btn").find(".all").addClass("active");

    // Show all panels
    $(".card-container").fadeIn("slow");
  });

  // Search field filter
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card-container").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
// document.ready (this is the shorthand notation for document.ready)
