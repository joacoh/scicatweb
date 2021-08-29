document.getElementById("menu").addEventListener("click",menu);
var menu_display=0
function menu(){
    if (menu_display == 0){
        document.getElementById("menu-extend").style.transform='translateX(-600px)'
        k=1
    }
    if (menu_display == 1){
        document.getElementById("menu-extend").style.transform='translateX(0px)'
        k=0
    }
    menu_display=k
}