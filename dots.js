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

	const wildlifeHeading = document.getElementById("wildlife-heading")
	const wildlifeName = document.getElementById("wildlife-name")
	const wildlifeBlurb = document.getElementById("wildlife-blurb")
	const wildlifePicture = document.getElementById("wildlife-picture")

	targetTab.setAttribute("aria-selected", true)

	switch (targetPanel) {
		case "lion-tab":
			wildlifeHeading.innerText = "(Panthera leo)"
			wildlifeName.innerText = "Lion"
			wildlifeBlurb.innerText =
				"The lion is a carnivorous feline that lives throughout Africa. It has a short tawny coat with a tufted tail; and, in the male, a prominent mane around the neck and shoulders. There are now only about 20,000 lions remaining in the wild."
			wildlifePicture.innerHTML = `<source 
          srcset="img/wildlife/wildlife-lion.webp" type="image/webp" 
        />
				<img 
          src="img/wildlife/wildlife-lion.png" alt="African Lion" 
        />`
			break
		case "buffalo-tab":
			wildlifeHeading.innerText = "(Syncerus Caffer)"
			wildlifeName.innerText = "Buffalo"
			wildlifeBlurb.innerText =
				"The Cape buffalo is a wild herbivore with similar characteristics as the domestic cow. This magnificent animal measures between 8 feet and 11 feet from head to tail and has a greyish-black hide that is often riddled with scars from previous fights and encounters with predators. They are mainly found along river beds and plains."
			wildlifePicture.innerHTML = `<source 
          srcset="img/wildlife/wildlife-buffalo.webp" type="image/webp" 
        />
				<img 
          src="img/wildlife/wildlife-buffalo.png" alt="Cape Buffalo" 
        />`
			break
		case "elephant-tab":
			wildlifeHeading.innerText = "(Loxodonta africana)"
			wildlifeName.innerText = "Elephant"
			wildlifeBlurb.innerText =
				"The elephant is the largest land mammal and is known for its brute strength. The animal's characteristic features include a long trunk, large head, tusks, and wide and flat ears. They are found across a wide variety of habitats including savannah, grasslands, swamps, highlands, and forests."
			wildlifePicture.innerHTML = `<source 
          srcset="img/wildlife/wildlife-elephant.webp" type="image/webp" 
        />
				<img 
          src="img/wildlife/wildlife-elephant.png" alt="African Elephant" 
        />`
			break
		case "leopard-tab":
			wildlifeHeading.innerText = "(Panthera pardus pardus)"
			wildlifeName.innerText = "Leopard"
			wildlifeBlurb.innerText =
				"The leopard is a large carnivore in the cat family that is closely related to the lion. It is around 84 inches long and weighs between 110 to 200 pounds. It is distinguishable by its white and yellowish coat riddled with black spots. Leopards can be found in open grassland and woodland."
			wildlifePicture.innerHTML = `<source 
          srcset="img/wildlife/wildlife-leopard.webp" type="image/webp" 
        />
				<img 
          src="img/wildlife/wildlife-leopard.png" alt="African Leopard" 
        />`
			break
		case "rhino-tab":
			wildlifeHeading.innerText = "(Diceros bicornis)"
			wildlifeName.innerText = "Rhinoceros"
			wildlifeBlurb.innerText =
				"The black rhinoceros is a large herbivore with two horns on its naval bridge. It is smaller compared to the white rhino which has a square lip. The rhino is a favorite among game hunters and tends to charge aggressively at their attacker."
			wildlifePicture.innerHTML = `<source 
          srcset="img/wildlife/wildlife-rhino.webp" type="image/webp" 
        />
				<img 
          src="img/wildlife/wildlife-rhino.png" alt="Rhinoceros" 
        />`
			break
	}
}
