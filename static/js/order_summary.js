// Wait 15 seconds then redirect to main menu
setTimeout(() => {
  window.location =
    window.location.origin + window.location.pathname.split("/")[1];
}, 15000);
