function createOutput(gwObj) {
  var outel = document.getElementById("outputElement")

  outel.innerHTML = "here be output";
  outel.style.visibility = true;

}


function onContext(obj) {
  removeLoader();

  var type = obj.event.objects[0]["type"];
  if (type == "simple-gateway") {
    createOutput(obj.event.objects[0]);
  } else {
    // create message to user
    var message = document.createElement("p");
    message.innerText = "This extension supports only simple gateway objects";
    document.body.appendChild(message);
  }
}

function addLoader() {
  var loader = document.createElement("div");
  var text = document.createElement("p");
  text.setAttribute("id", "loader-text");
  text.innerText = "Loading...";
  document.body.appendChild(text);
}

function removeLoader() {
  var text = document.getElementById("loader-text");
  document.body.removeChild(text);
}

function showContext() {
  addLoader();
  // send API request
  smxProxy.sendRequest("get-context", null, "onContext");
}
