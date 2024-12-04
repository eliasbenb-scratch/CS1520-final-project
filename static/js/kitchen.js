var timeout = 15000;

window.setTimeout(poller, timeout);

function poller() {
  window.location = window.location.origin + "/kitchen/";

  window.setTimeout(poller, timeout);
}
