$(document).ready(function () {
  // Wait until the entire HTML document (DOM) is fully loaded before executing the script

  $(".footer-links-wrapper h3").click(function () {
    // When a user clicks on an <h3> inside .footer-links-wrapper

    if ($(window).width() <= 768) {
      // Step 1: Check if the screen width is 768px or smaller
      //         - This ensures the toggle effect only works on small screens
      //         - If the screen is larger, clicking does nothing

      var $this = $(this);
      // Step 2: Store the clicked <h3> element as a jQuery object
      //         - $(this) wraps the clicked element to use jQuery methods

      var $ul = $this.next("ul");
      // Step 3: Find the <ul> element that comes immediately after the clicked <h3>
      //         - Ensures only the related <ul> is toggled

      $ul.slideToggle();
      // Step 4: Toggle the visibility of the corresponding <ul> using a slide animation
      //         - If it's hidden, it slides down (shows)
      //         - If it's visible, it slides up (hides)

      $this.toggleClass("expanded");
      // Step 5: Toggle the "expanded" class on the clicked <h3>
      //         - If the class is added, the "+" icon changes to an "x"
      //         - If the class is removed, the "x" icon changes back to a "+"
    }
  });

  // Step 6: Add a resize event listener to reset the toggle effect on large screens
  $(window).resize(function () {
    if ($(window).width() > 768) {
      // If the window width is larger than 768px
      // This ensures that when the window is resized to a larger screen, the state is reset

      // Reset any <ul> elements that might be open (as they should be visible on large screens)
      $(".footer-links-wrapper ul").show();
      // Remove the "expanded" class from all <h3> elements to reset the icon to "+"
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  });
});
