window.addEventListener("load", function () {
    const logo = document.getElementById("logoAnim");

    setTimeout(() => {
      logo.classList.add("to-header");
    }, 1500);

//     setTimeout(() => {
//       document.body.style.overflow = "auto";
//     }, 2500);
    });

  window.addEventListener("load", () => {
    const logo = document.getElementById("logoAnim");
    const overlay = document.getElementById("logoOverlay");
  
    setTimeout(() => {
      logo.classList.add("to-header");
    }, 1200);
  
    setTimeout(() => {
      overlay.classList.add("hide");
    }, 1200);
  
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2500);
  });

  document.querySelector('.hamburger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('header nav').classList.toggle('active');
    });
