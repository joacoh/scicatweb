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

var displacement=0

document.getElementById("left-arrow").addEventListener("click",izquierda)
function izquierda(){
  if (displacement ==0){
    document.getElementById("cooper-circulo").style.transform='translateX(437px)'
    document.getElementById("doppler-circulo").style.transform='translateX(437px)'
    document.getElementById("saha-circulo").style.transform='translateX(-874px)'
    document.getElementById("cooper-circulo").style.zIndex='2'
    document.getElementById("doppler-circulo").style.zIndex='5'
    document.getElementById("saha-circulo").style.zIndex='2'
    k=1
  }
  if (displacement ==1){
    document.getElementById("cooper-circulo").style.transform='translateX(-437px)'
    document.getElementById("doppler-circulo").style.transform='translateX(874px)'
    document.getElementById("saha-circulo").style.transform='translateX(-437px)'
    document.getElementById("cooper-circulo").style.zIndex='2'
    document.getElementById("doppler-circulo").style.zIndex='2'
    document.getElementById("saha-circulo").style.zIndex='5'
    k=2
  }
  if (displacement ==2){
    document.getElementById("cooper-circulo").style.transform='translateX(0px)'
    document.getElementById("doppler-circulo").style.transform='translateX(0px)'
    document.getElementById("saha-circulo").style.transform='translateX(0px)'
    document.getElementById("cooper-circulo").style.zIndex='5'
    document.getElementById("doppler-circulo").style.zIndex='2'
    document.getElementById("saha-circulo").style.zIndex='2'
    k=0
  }
  displacement = k
}


document.getElementById("right-arrow").addEventListener("click",derecha)
function derecha(){
  if (displacement ==2){
    document.getElementById("cooper-circulo").style.transform='translateX(437px)'
    document.getElementById("doppler-circulo").style.transform='translateX(437px)'
    document.getElementById("saha-circulo").style.transform='translateX(-874px)'
    document.getElementById("cooper-circulo").style.zIndex='2'
    document.getElementById("doppler-circulo").style.zIndex='5'
    document.getElementById("saha-circulo").style.zIndex='2'
    k=1
  }
  if (displacement ==0){
    document.getElementById("cooper-circulo").style.transform='translateX(-437px)'
    document.getElementById("doppler-circulo").style.transform='translateX(874px)'
    document.getElementById("saha-circulo").style.transform='translateX(-437px)'
    document.getElementById("cooper-circulo").style.zIndex='2'
    document.getElementById("doppler-circulo").style.zIndex='2'
    document.getElementById("saha-circulo").style.zIndex='5'
    k=2
  }
  if (displacement ==1){
    document.getElementById("cooper-circulo").style.transform='translateX(0px)'
    document.getElementById("doppler-circulo").style.transform='translateX(0px)'
    document.getElementById("saha-circulo").style.transform='translateX(0px)'
    document.getElementById("cooper-circulo").style.zIndex='5'
    document.getElementById("doppler-circulo").style.zIndex='2'
    document.getElementById("saha-circulo").style.zIndex='2'
    k=0
  }
  displacement = k
}