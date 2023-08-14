document.getElementById("nav").innerHTML = `
    <header class="topnav">
        <a 
            class="home" 
            href="./home.html"
        >
            <img
                src="./assets/images/logo.png"
                width="202"
                height="115"
            ></img>
        </a>
        <div class="menu">
            <a href="./adoptAnimals.html">Adopt</a>
            <a href="./adoptionProcess.html">Adoption Process</a>
            <a href="./aboutUs.html">About Us</a>
            <a href="./volunteer.html">Get Involved</a>
            <button onclick="location.href='./donate.html';" class="donate-button">Donate</button>
        </div>
        <div class="menu-bars__container">
            <button class="menu-bars" onclick="onMenuClick()">
                <i class="fa fa-bars"></i>
            </button>

            <div id="menu-bars__dropdown">
                <a href="./adoptAnimals.html">Adopt</a>
                <a href="./adoptionProcess.html">Adoption Process</a>
                <a href="./aboutUs.html">About Us</a>
                <a href="./volunteer.html">Get Involved</a>
                <button onclick="location.href='./donate.html';" class="donate-button">Donate</button>
            </div>
        </div>
    </header>
`;

/**
 * Shows or hides the navigation dropdown by adding an active class.
 */
function onMenuClick() {
  const dropdown = document.getElementById("menu-bars__dropdown");
  const isActive = dropdown.classList.contains("menu-bars__dropdown--active");

  if (isActive) {
    dropdown.classList.remove("menu-bars__dropdown--active");
  } else {
    dropdown.classList.add("menu-bars__dropdown--active");
  }
}
