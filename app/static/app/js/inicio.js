window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < 1200) {
        document.getElementById("header").style.transform="TranslateY(-160px)";
      return;
    }
    else{
        document.getElementById("header").style.transform="TranslateY(0px)"
    }
  });

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < 1240) {
        document.getElementById("header").style.background="#1B244F";
      return;
    }
    else{
        document.getElementById("header").style.background="#8480C2"
    }
  });