function showBut() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById('name').style.visibility = "hidden";
  } else {
    x.className = "topnav";
    document.getElementById('name').style.visibility = "visible";
  }
}
