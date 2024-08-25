let currentUrl = window.location.href;
let languageButton = document.getElementById("languageButton");

window.onload = function () {
	document.getElementById("navbar").innerHTML = `
	<ul>
		<li class="active"><a href="/">Homepage</a></li>
		<li class="dropdown">
			<a class="dropbtn">My projects</a>
			<div class="dropdown-content">
				<a href="/projects/madleds.html"><b>MadLEDs</b></a>
				<a href="/projects/wifi-password-export.html"><b>wifi-password-export</b></a>
			</div>
		</li>
		<li class="dropdown">
			<a class="dropbtn">Follow me on</a>
			<div class="dropdown-content">
				<a href="/rss/settings.html"><img src="/imgs/social_style_3_rss-512-1.png" title="RSS" alt="RSS icon" style="width: 50px; height: 50px;" /><b>&nbsp;RSS</b></a>
				<a href="https://github.com/pchelium" target="_blank"><img src="/imgs/logo-github-128.png" title="Github" alt="Github icon" style="width: 50px; height: 50px;" /><b>&nbsp;Github</b></a>
			</div>
		</li>
		<li class="button-bar"><a id="languageButton" onclick="changeLanguage()">CS</a></li>
	</ul>
  `;

	if (document.getElementById("year")) {
		document.getElementById("year").innerText = "2023 - 2024 pchelium";
	}

	displayNews();
};

function displayNews() {
	if (!document.getElementById("news-container")) {
		return;
	}
	document.getElementById("news-container").innerHTML = `
	<a href="/projects/wifi-password-export.html">
  	<div class="post">
     	<h2/>wifi-password-export</h2>
      	<p>Date: 25.08.2024</p>
     	<p>Simple script for Windows to export wifi passwords</p>
     	<p>Read more...</p>
  	</div>
  	</a>
  	<a href="/projects/madleds.html">
  	<div class="post">
      	<h2>MadLEDs release 1.0.0</h2>
      	<p>Date: 29.08.2023</p>
     	<p>New C++ game for ESP32</p>
     	<p>Read more...</p>
  	</div>
  	</a>
  	<div class="post">
    	<h2>Creation of this website</h2>
    	<p>Date: 29.08.2023</p>
    	<p>Today, this web site took a trip to the internet :)</p>
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
  <h3>No more news!</h3>
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
