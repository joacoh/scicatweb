window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < 1300) {
        document.getElementById("header").style.transform="TranslateY(-160px)";
      return;
    }
    else{
        document.getElementById("header").style.transform="TranslateY(0px)"
    }
  });
var circulo1="circulo-1"
var circulo2="circulo-2"
var circulo3="circulo-3"
var displacement=0

document.getElementById("left-arrow").addEventListener("click",izquierda)

function izquierda(){
  if (displacement ==0){
    document.getElementById(circulo1).src="img/Naranjo_circulo.png"
    document.getElementById(circulo2).src="img/Rosa_circulo.png"
    document.getElementById(circulo3).src="img/Azul_circulo.png"
    document.getElementById("Cooper-fondo").style.display='none'
    document.getElementById("Doppler-fondo").style.display='flex'
    document.getElementById("Saha-fondo").style.display='none'
    k=1
  }
  if (displacement ==1){
    document.getElementById(circulo1).src="img/Rosa_circulo.png"
    document.getElementById(circulo2).src="img/Azul_circulo.png"
    document.getElementById(circulo3).src="img/Naranjo_circulo.png"
    document.getElementById("Cooper-fondo").style.display='none'
    document.getElementById("Doppler-fondo").style.display='none'
    document.getElementById("Saha-fondo").style.display='flex'
    k=2
  }
  if (displacement ==2){
    document.getElementById(circulo1).src="img/Azul_circulo.png"
    document.getElementById(circulo2).src="img/Naranjo_circulo.png"
    document.getElementById(circulo3).src="img/Rosa_circulo.png"
    document.getElementById("Cooper-fondo").style.display='flex'
    document.getElementById("Doppler-fondo").style.display='none'
    document.getElementById("Saha-fondo").style.display='none'
    k=0
  }
  displacement = k
}


document.getElementById("right-arrow").addEventListener("click",derecha)

function derecha(){
  if (displacement ==2){
    document.getElementById(circulo1).src="img/Naranjo_circulo.png"
    document.getElementById(circulo2).src="img/Rosa_circulo.png"
    document.getElementById(circulo3).src="img/Azul_circulo.png"
    document.getElementById("Cooper-fondo").style.display='none'
    document.getElementById("Doppler-fondo").style.display='flex'
    document.getElementById("Saha-fondo").style.display='none'
    k=1
  }
  if (displacement ==0){
    document.getElementById(circulo1).src="img/Rosa_circulo.png"
    document.getElementById(circulo2).src="img/Azul_circulo.png"
    document.getElementById(circulo3).src="img/Naranjo_circulo.png"
    document.getElementById("Cooper-fondo").style.display='none'
    document.getElementById("Doppler-fondo").style.display='none'
    document.getElementById("Saha-fondo").style.display='flex'
    k=2
  }
  if (displacement ==1){
    document.getElementById(circulo1).src="img/Azul_circulo.png"
    document.getElementById(circulo2).src="img/Naranjo_circulo.png"
    document.getElementById(circulo3).src="img/Rosa_circulo.png"
    document.getElementById("Cooper-fondo").style.display='flex'
    document.getElementById("Doppler-fondo").style.display='none'
    document.getElementById("Saha-fondo").style.display='none'
    k=0
  }
  displacement = k
}

var visual=0

document.getElementById(circulo1).addEventListener("click",extend)
function extend(){
  if (visual==0){
    document.getElementById("back").style.transform='translateX(0px)'
    document.getElementById("lazer").id="lazer-extend"
    document.getElementById("imagenes").id="imagenes-extend"
    document.getElementById("circulo-1").id="circulo-1-extend"
    document.getElementById("circulo-2").id="circulo-2-extend"
    document.getElementById("circulo-3").id="circulo-3-extend"
    document.getElementById("right-arrow").id="right-arrow-extend"
    document.getElementById("left-arrow").id="left-arrow-extend"

    circulo1="circulo-1-extend"
    circulo2="circulo-2-extend"
    circulo3="circulo-3-extend"
    j=1
  }
  if (visual==1){
    document.getElementById("back").style.transform='translateX(-59.8vw)'
    document.getElementById("lazer-extend").id="lazer"
    document.getElementById("imagenes-extend").id="imagenes"
    document.getElementById("circulo-1-extend").id="circulo-1"
    document.getElementById("circulo-2-extend").id="circulo-2"
    document.getElementById("circulo-3-extend").id="circulo-3"
    document.getElementById("right-arrow-extend").id="right-arrow"
    document.getElementById("left-arrow-extend").id="left-arrow"
    circulo1="circulo-1"
    circulo2="circulo-2"
    circulo3="circulo-3"
    j=0
  }
  visual=j
}

