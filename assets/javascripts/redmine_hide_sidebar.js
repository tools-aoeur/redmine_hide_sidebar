function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

function hideSideBar() {
  if ($('#sidebar').is(':visible')) {
    $('#sidebar').addClass('sidebar_hidden');
    $('#content').addClass('sidebar_hidden');
    $('#hideSidebarButton').addClass('sidebar_hidden');
    setLocalStorage('sidebar_hide', 'hide');
  } else {
    $('#sidebar').removeClass('sidebar_hidden');
    $('#content').removeClass('sidebar_hidden');
    $('#hideSidebarButton').removeClass('sidebar_hidden');
    setLocalStorage('sidebar_hide', 'show');
  }
}

function initSideBar() {
  if (getLocalStorage('sidebar_hide') === 'hide') {
    hideSideBar();
  }
}

$(function() {
  $('#context-menu').appendTo('#main');
});
