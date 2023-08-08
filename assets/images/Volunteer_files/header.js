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
            <a href="#about-us">About Us</a>
            <a href="#get-involved">Get Involved</a>
            <button onclick="location.href='./donate.html';" class="donate-button">Donate</button>
        </div>
    </header>
`;
