var timeout = 15000;

window.setTimeout(poller, timeout);

function poller() {
    window.location = "https://paulobrasko.pythonanywhere.com/restaurant/kitchen";

    window.setTimeout(poller, timeout);
}
