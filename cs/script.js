window.onload = function () {
    document.getElementById("sidebar").innerHTML = `
    <h4><a href="/">EN</a> / <a href="/cs/">CS</a></h4>
    <h2><a href="/cs/">Domovská stránka</a></h2>
    <h2>Mé projekty</h2>
    <ul>
        <li>
            <h3><a href="/cs/projects/madleds.html">MadLEDs</a></h3>
        </li>
     </ul>
    <div>
       <a href="/cs/rss/settings.html"><img src="/imgs/social_style_3_rss-512-1.png" title="RSS" alt="RSS icon" style="width: 50px; height: 50px;" /></a>
        <a href="https://github.com/pchelium" target="_blank"><img src="/imgs/logo-github-128.png" title="Github" alt="Github icon" style="width: 50px; height: 50px;" /></a>
     </div>
     `;

    if (document.getElementById("year")) {
        document.getElementById("year").innerText = "2023";
    }

    displayNews();
};

function displayNews() {
    if (!document.getElementById("news-container")) {
        return;
    }
    document.getElementById("news-container").innerHTML = `
    <a href="/cs/projects/madleds.html">
        <div class="post">
            <h2>MadLEDs vydání 1.0.0 </h2>
            <p>Datum: 30.08.2023</p>
            <p>Nová hra v C++ pro ESP32</p>
            <p>Čtěte více...</p>
        </div>
    </a>
    <div class="post">
        <h2>Vytvoření těchto webových stránek</h2>
        <p>Datum: 30.08.2023</p>
        <p>Dnes se tato webová stránka vydala na svuj výlet do internetu :)</p>
    </div>
    `;
}

function previousButton() {
    document
        .getElementById("news-container")
        .scrollIntoView({ behavior: "smooth" });
    displayNews();
}

function nextButton() {
    document
        .getElementById("news-container")
        .scrollIntoView({ behavior: "smooth" });
    document.getElementById("news-container").innerHTML = `
    <h3>Žádné další novinky!</h3>
  `;
}