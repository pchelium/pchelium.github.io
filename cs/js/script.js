let currentUrl = window.location.href;
let languageButton = document.getElementById("languageButton");

window.onload = function () {
	document.getElementById("navbar").innerHTML = `
	<ul>
		<li class="active"><a href="/cs/">Domovská stránka</a></li>
		<li class="dropdown">
			<a class="dropbtn">Mé projekty</a>
			<div class="dropdown-content">
				<a href="/cs/projects/madleds.html"><b>MadLEDs</b></a>
			</div>
		</li>
		<li class="dropdown">
			<a class="dropbtn">Sledujte mě na</a>
			<div class="dropdown-content">
				<a href="/cs/rss/settings.html"><img src="/imgs/social_style_3_rss-512-1.png" title="RSS" alt="RSS icon" style="width: 50px; height: 50px;" /><b>&nbsp;RSS</b></a>
				<a href="https://github.com/pchelium" target="_blank"><img src="/imgs/logo-github-128.png" title="Github" alt="Github icon" style="width: 50px; height: 50px;" /><b>&nbsp;Github</b></a>
			</div>
		</li>
		<li class="button-bar"><a id="languageButton" onclick="changeLanguage()">EN</a></li>
	</ul>
  `;

	if (document.getElementById("year")) {
		document.getElementById("year").innerText = "2023 - 2024";
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
            <p>Datum: 29.08.2023</p>
            <p>Nová hra v C++ pro ESP32</p>
            <p>Čtěte více...</p>
        </div>
    </a>
    <div class="post">
        <h2>Vytvoření těchto webových stránek</h2>
        <p>Datum: 29.08.2023</p>
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

function changeLanguage() {
	if (currentUrl.includes("/cs/")) {
		switchToEnglish();
	} else {
		switchToCzech();
	}
}

function switchToEnglish() {
	let newUrl = currentUrl.replace(/\/cs\//, '/');
	window.location.href = newUrl;
	languageButton.innerText = "CS";
}

function switchToCzech() {
	let currentPatch = window.location.pathname;
	let newUrl = window.location.origin + "/cs" + currentPatch;
	window.location.href = newUrl;
	languageButton.innerText = "EN";
}