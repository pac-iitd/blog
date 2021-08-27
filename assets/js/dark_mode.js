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
      var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
      // update checkbox
      themeSwitch.checked = darkThemeSelected;
      // update body data-theme attribute
      if (darkThemeSelected){
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      }
    };
  
    function resetTheme() {
      if(themeSwitch.checked) { // dark theme has been selected
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.removeItem('themeSwitch'); // reset theme selection 
      } 
    };
  }