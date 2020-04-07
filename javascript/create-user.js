var createUser = (document.getElementById("createUser").onclick = function() {
  myFunction();
});

function myFunction() {
  if (document.getElementById("username").value) {
    window.alert("username added");
  }
}
