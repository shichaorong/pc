window.onload=function () {
  var lis = document.querySelectorAll('.nav li');
  var arrow = document.querySelector('.arrow');
  var upNond = document.querySelectorAll('.nav li .up');
  var list=document.querySelector('.list');
  var lists=document.querySelectorAll('.list li');
  var lihight=lists[0].offsetHeight
  var num=0;
  heard();
  function  heard() {
    arrow.style.left = lis[0].getBoundingClientRect().left + lis[0].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
    upNond[0].style.width = '100%';
    for (var i = 0; i < lis.length; i++) {
      lis[i].index = i;
      lis[i].onclick = function () {
        move(this.index);
      }
    }
  }
  function  move(num) {
    for (var i = 0; i < lis.length; i++) {
      upNond[i].style.width = '0';
    }
    upNond[num].style.width = '100%';
    arrow.style.left = lis[num].getBoundingClientRect().left +lis[num].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
  }
  document.onmousewheel = wheel;
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', wheel);
  }
  function wheel(event) {
    event = event || window.event;
    var flag = '';
    if (event.wheelDelta) {
      //ie/chrome
      if (event.wheelDelta > 0) {
        flag = 'up';
      } else {
        flag = 'down'
      }
    } else if (event.detail) {
      //firefox
      if (event.detail < 0) {
        flag = 'up';
      } else {
        flag = 'down'
      }
    }

    switch (flag) {
      case 'up' :
        if(num>0){
          num--;
          list.style.top=-lihight*num+'px';
          move(num);
        }
        break;
      case 'down' :
        if(num<4){
          num++;
          list.style.top=-lihight*num+'px';
          move(num);
        }
    }
    //禁止默认行为
    event.preventDefault && event.preventDefault();
    return false;
  }
}