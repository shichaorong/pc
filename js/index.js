window.onload=function () {
    var lis=document.querySelectorAll('.nav li');
    var arrow=document.querySelector('.arrow');
    var down=document.querySelectorAll('.nav li .up');
    arrow.style.left =lis[0].getBoundingClientRect().left + lis[0].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
    down[0].style.width = '100%';
    for (var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function () {
            for(var i=0;i<lis.length;i++){
                down[0].style.width = '0';
            }
            down[this.index].style.width = '100%';
            arrow.style.left =this.getBoundingClientRect().left + this.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
        }
    }
    var list=document.querySelector('list');
    var lis=document.querySelectorAll('list li');
    var lishiegth=lis.offsetHeight;
    var nodex=0;
    document.onmousewheel=wheel;
    document.addEventListener('DOMMouseScroll', wheel);
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
                if(nodex>0){
                    nodex--;
                    list.style.top=- lishiegth*nodex+'px';
                }
                break;
            case 'down' :
                if(nodex>4){
                    nodex--;
                    list.style.top=- lishiegth*nodex;
                }
        }
        //禁止默认行为
        event.preventDefault && event.preventDefault();
        return false;
    }
}