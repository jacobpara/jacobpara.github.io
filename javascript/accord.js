var acc = document.getElementsByClassName("accordion");  //get all the elements with accordian class, and store their amount here
var i;

for (i = 0; i < acc.length; i++) {   //for each accordian element
  acc[i].addEventListener("click", function() {   //when each accordian class is clicked
    this.classList.toggle("active");  
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {   //if already opened, do nothing
      panel.style.display = "none";
    } else {
      panel.style.display = "block";    //if closed, open upto a block when ckicked
    }
  });
}