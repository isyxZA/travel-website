const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabList.addEventListener("keydown", changeTabFocus)

tabs.forEach((tab) => {
	tab.addEventListener("click", changeTabPanel)
})

let tabFocus = 0
function changeTabFocus(e) {
	const keydownLeft = 37
	const keydownRight = 39

	// Keyboard Inputs
	if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
		// Set current tab to -1
		tabs[tabFocus].setAttribute("tabindex", -1)

		if (e.keyCode === keydownRight) {
			tabFocus++
			if (tabFocus >= tabs.length) {
				tabFocus = 0
			}
		} else if (e.keyCode === keydownLeft) {
			tabFocus--
			if (tabFocus < 0) {
				tabFocus = tabs.length - 1
			}
		}
		// Set focused tab to 0
		tabs[tabFocus].setAttribute("tabindex", 0)
		tabs[tabFocus].focus()
	}
}

function changeTabPanel(e) {
	tabs.forEach((tab) => {
		tab.setAttribute("aria-selected", false)
	})

	const targetTab = e.target
	const targetPanel = targetTab.getAttribute("aria-controls")
	const destHeading = document.getElementById("destination-heading")
	const destPicture = document.getElementById("destination-picture")
	const destBlurb = document.getElementById("destination-blurb")
	const destPopulation = document.getElementById("destination-population")
	const destArea = document.getElementById("destination-area")

	targetTab.setAttribute("aria-selected", true)

	switch (targetPanel) {
		case "south-africa-tab":
			destHeading.innerText = "South Africa"
			destPicture.innerHTML = `<source
					srcset="img/destinations/destination-south-africa.webp"
					type="image/webp"
				/>
				<img
					src="img/destinations/destination-south-africa.png"
					alt="south africa"
				/>`
			destBlurb.innerText =
				"South Africa is a country with a lot to offer including Big 5 safaris, city lights, outdoor adventures and an intriguing food and wine culture. It's also home to various malaria-free safari reserves which makes it perfect for Africa vacations for families."
			destPopulation.innerText = "60,450,995"
			destArea.innerText = "8,545,691 ha"
			break
		case "kenya-tab":
			destHeading.innerText = "Kenya"
			destPicture.innerHTML = `<source
					srcset="img/destinations/destination-kenya.webp"
					type="image/webp"
				/>
				<img
					src="img/destinations/destination-kenya.png"
					alt="kenya"
				/>`
			destBlurb.innerText =
				"Kenya is a surprise of vast savannas and snow-capped peaks and the classic picture of abundant wildlife teeming across the stirring landscapes. Adventurous, romantic, charming, and welcoming, Kenya effortlessly balances the traditional with the contemporary."
			destPopulation.innerText = "55,633,292"
			destArea.innerText = "5,100,00 ha"
			break
		case "botswana-tab":
			destHeading.innerText = "Botswana"
			destPicture.innerHTML = `<source
					srcset="img/destinations/destination-botswana.webp"
					type="image/webp"
				/>
				<img
					src="img/destinations/destination-botswana.png"
					alt="botswana"
				/>`
			destBlurb.innerText =
				"Botswana is a fascinating world that is defined by its diverse landscape of desert, grasslands, and waterways. Botswana offers an unforgettable safari experience in some of Africa's most pristine and remote game areas. It's renowned for its migrating mammals, endangered wild dog and rhino, and some unique species of antelope"
			destPopulation.innerText = "2,317,233"
			destArea.innerText = "9,894,000 ha"
			break
		case "namibia-tab":
			destHeading.innerText = "Namibia"
			destPicture.innerHTML = `<source
					srcset="img/destinations/destination-namibia.webp"
					type="image/webp"
				/>
				<img
					src="img/destinations/destination-namibia.png"
					alt="namibia"
				/>`
			destBlurb.innerText =
				"Dominated by the Namib Desert (whose Nama name means “Vast Place”), Africa's most thinly populated country enthrals with its immense arid landscapes, bountiful wildlife and ancient rock art. What you will encounter is a comprehensive journey through most of Namibia's gems; a country characterised by stark contrasts that teem with life and beauty."
			destPopulation.innerText = "2,630,073"
			destArea.innerText = "16,315,100 ha"
			break
	}
}
