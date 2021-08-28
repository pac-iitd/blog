const themeSwitch = document.querySelector('.dark_mode');

// themeSwitch.addEventListener('change', () => {
//   document.body.classList.toggle('dark-theme');
// });


if(themeSwitch) {
    initTheme(); // on page load, if user has already selected a specific theme -> apply it
  
    themeSwitch.addEventListener('change', function(event){
      resetTheme(); // update color theme
    });
  
    function initTheme() {
      var lightThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'light');
      // update checkbox
      themeSwitch.checked = lightThemeSelected;
      // update body data-theme attribute
      if (lightThemeSelected){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    };
  
    function resetTheme() {
      if(themeSwitch.checked) { // light theme has been selected
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('themeSwitch', 'light'); // save theme selection 
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.removeItem('themeSwitch'); // reset theme selection 
      } 
    };
  }