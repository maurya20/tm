//App available flags and functions
window.appObj = window.appObj || {};

appObj.makeXhrCall = function (url, callBack) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      return callBack(null, xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
};
