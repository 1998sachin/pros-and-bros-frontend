var createUser = (document.getElementById("createUser").onclick = function() {
  createUser();
});

function createUser() {
  if (document.getElementById("username").value) {
    window.alert("username added");
  }
}
