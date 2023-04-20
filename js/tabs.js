$(document).ready(function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  $(tabNav).each(function () {
    $(this).click(function () {
      $(".tabs-nav__item").each(function () {
        $(this).removeClass("is-active");
      });
      $(this).addClass("is-active");
      tabName = this.getAttribute('data-tab-name');
      tabContent.forEach( function(item) {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
    });
  });
});
});
  // function selectTabCont(tabName){
  //   tabContent.forEach( function(item) {
  //     item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
  //   })
  // }

// });
