let footerElements = document.querySelectorAll(".screen_footer i");
const propertiesPanel = document.getElementById("propertiesPanel");
let selected = null;

(function updateFooterElements() {
    footerElements.forEach((element) => {
        element.addEventListener("click", () => {
            if (selected === element) {
                propertiesPanel.classList.toggle("hidden");
                selected = null;
                // Clear previous properties if panel is toggled off
                propertiesPanel.innerHTML = "";
            } else {
                selected = element;
                propertiesPanel.classList.remove("hidden");

                // Clear previous properties
                propertiesPanel.innerHTML = "";

                // Add Properties
                const colorLabel = document.createElement("label");
                colorLabel.setAttribute("for", "elementColor");
                colorLabel.textContent = "Color:";

                const colorInput = document.createElement("input");
                colorInput.setAttribute("type", "color");
                colorInput.setAttribute("id", "elementColor");

                // const borderLabel = document.createElement('label');
                // borderLabel.setAttribute('for', 'elementBorder');
                // borderLabel.textContent = 'Link:';

                const saveButton = document.createElement("button");
                saveButton.setAttribute("id", "saveProperties");
                saveButton.textContent = "Save";

                propertiesPanel.appendChild(colorLabel);
                propertiesPanel.appendChild(colorInput);
                // propertiesPanel.appendChild(borderLabel);
                propertiesPanel.appendChild(saveButton);

                // Save properties
                saveButton.addEventListener("click", () => {
                    if (selected) {
                        selected.style.color = colorInput.value;
                        propertiesPanel.classList.toggle("hidden");
                        selected = null;
                    }
                });
            }
        });
    });
})();

document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('mySidebar').classList.toggle('open');
});
  
