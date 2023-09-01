function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const darkModeButton = document.getElementById("dark-mode-button");
  const body = document.body;

  // Función para habilitar el modo oscuro
  function enableDarkMode() {
    body.classList.add("dark-mode");
  }

  // Función para deshabilitar el modo oscuro
  function disableDarkMode() {
    body.classList.remove("dark-mode");
  }

  // Toggle del modo oscuro al hacer clic en el botón deslizable
  darkModeButton.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });