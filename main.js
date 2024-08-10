// Add New Screen
let button = document.getElementById("add_screen");
let screenRoot = document.getElementById("screen_root");
let viewScreen = document.querySelector(".screenView");
let editorArea = document.getElementById("editorArea");

let selectedElement = null;

let screens = [];

button.onclick = function () {
  let title = prompt("Add Name Screen:");
  if (title !== "" && title !== null) {
    let newScreenCard = document.createElement("div");
    newScreenCard.className = "screenCard";
    newScreenCard.innerHTML = `<h5>${title}</h5>`;
    screenRoot.insertBefore(newScreenCard, button);

    addScreenToArray(title);

    newScreenCard.onclick = function () {
      viewScreen.innerHTML = newScreenCard.innerHTML;
      drageNewElement();
    };
  }
};

function addScreenToArray(title) {
  screens.push({ title: title });
}

function createButtonElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable button-element";
  newElement.style.cssText =
    "border-radius: 10px; color: white; font-size: 17px; height: 42px; margin: 2px; padding: 0px; width: 100px; background-color: rgb(25, 139, 141); display: flex; align-items: center; justify-content: center;";
  newElement.innerHTML = "Click Me";
  newElement.draggable = true;
  return newElement;
}

function createContainerElement() {
  let newElement = document.createElement("div");
  newElement.id = "containerElement";
  newElement.className = "draggable container-element";
  newElement.style.cssText = "width: 100%; border: 1px solid gray;";
  newElement.innerHTML = "Container";
  newElement.draggable = true;

  newElement.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  newElement.addEventListener("drop", function (e) {
    e.preventDefault();
    let newChildElement;

    if (newChildElement) {
      newElement.appendChild(newChildElement);
    }
  });

  return newElement;
}

function createTextElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable text-element";
  newElement.style.cssText = "padding: 10px; border: 1px solid;";
  newElement.innerHTML = "Text";
  newElement.draggable = true;
  return newElement;
}

// Other element creation functions
function createSwiperElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable swiper-element";
  newElement.style.cssText =
    "margin: 2px; padding: 20px; background-color: lightblue; border: 1px solid blue;";
  newElement.innerHTML = "Swiper";
  newElement.draggable = true;
  return newElement;
}

function createFiledElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable filed-element";
  newElement.style.cssText =
    "width: 100%; padding: 5px; border: 1px solid gray;";
  newElement.innerHTML = "Filed";
  newElement.draggable = true;
  return newElement;
}

function createSwitchElement() {
  let newElement = document.createElement("label");
  newElement.className = "draggable switch-element";
  newElement.style.cssText =
    "margin: 2px; padding: 5px; display: flex; align-items: center;";

  let input = document.createElement("input");
  input.type = "checkbox";
  input.style.cssText = "margin-right: 10px;";
  newElement.appendChild(input);

  let span = document.createElement("span");
  span.innerHTML = "Switch";
  newElement.appendChild(span);

  newElement.draggable = true;
  return newElement;
}

function createRadioElement() {
  let newElement = document.createElement("label");
  newElement.className = "draggable radio-element";
  newElement.style.cssText =
    "margin: 2px; padding: 5px; display: flex; align-items: center;";

  let input = document.createElement("input");
  input.type = "radio";
  input.name = "radio-element";
  input.style.cssText = "margin-right: 10px;";
  newElement.appendChild(input);

  let span = document.createElement("span");
  span.innerHTML = "Radio";
  newElement.appendChild(span);

  newElement.draggable = true;
  return newElement;
}

function createSliderElement() {
  let newElement = document.createElement("input");
  newElement.type = "range";
  newElement.className = "draggable slider-element";
  newElement.style.cssText = "margin: 2px; padding: 5px; width: 100px;";
  newElement.draggable = true;
  return newElement;
}

function createImageElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable image-element";
  newElement.style.cssText = `
    margin: 2px;
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    background-size: cover;
    background-position: center center;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/EditorMedia%2FAssets%2Fimageinitial.png?alt=media&token=7f38a13a-7dcf-4ae7-901f-6b0114463bee");
  `;
  newElement.draggable = true;
  return newElement;
}

function createCameraViewElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable camera-view-element";
  newElement.style.cssText =
    "margin: 2px; padding: 20px; background-color: lightgray; border: 1px solid gray;";
  newElement.innerHTML = "Camera View";
  newElement.draggable = true;
  return newElement;
}

function createWebElement() {
  let newElement = document.createElement("iframe");
  newElement.className = "draggable web-element";
  newElement.src =
    "https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling";
  newElement.style.cssText =
    "margin: 2px; width: 200px; height: 150px; border: 1px solid gray;";
  newElement.draggable = true;
  return newElement;
}

function createMapElement() {
  let newElement = document.createElement("div");
  newElement.className = "draggable map-element";
  newElement.style.cssText =
    "padding: 5px; width: 100%; height: 150px; box-sizing: border-box;";
  newElement.draggable = true;

  let iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373631568074!3d-37.816279742021795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3e12311f80!2sFederation+Square!5e0!3m2!1sen!2sau!4v1532589497155";
  iframe.style.cssText = "width: 100%; height:100%";
  newElement.appendChild(iframe);
  return newElement;
}

function createIconElement() {
  let newElement = document.createElement("i");
  newElement.className = "draggable icon-element fa-solid fa-icons";
  newElement.style.cssText = "margin: 2px; font-size: 24px;";
  newElement.draggable = true;
  return newElement;
}

function createVideoElement() {
  let newElement = document.createElement("video");
  newElement.className = "draggable video-element";
  newElement.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  newElement.controls = true;
  newElement.style.cssText = "margin: 2px; width: 200px; height: auto;";
  newElement.draggable = true;
  return newElement;
}

let addElements = [];

function draggableElement() {
  let dragElements = document.querySelectorAll(".dashboardIconsDivDad p");

  dragElements.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.className);
    });
  });

  viewScreen.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  viewScreen.addEventListener("drop", function (event) {
    event.preventDefault();
    const className = event.dataTransfer.getData("text/plain");

    let newElement;
    switch (className) {
      case "button-element":
        newElement = createButtonElement();
        break;
      case "container-element":
        newElement = createContainerElement();
        break;
      case "text-element":
        newElement = createTextElement();
        break;
      case "swiper-element":
        newElement = createSwiperElement();
        break;
      case "filed-element":
        newElement = createFiledElement();
        break;
      case "switch-element":
        newElement = createSwitchElement();
        break;
      case "radio-element":
        newElement = createRadioElement();
        break;
      case "slider-element":
        newElement = createSliderElement();
        break;
      case "image-element":
        newElement = createImageElement();
        break;
      case "camera-view-element":
        newElement = createCameraViewElement();
        break;
      case "web-element":
        newElement = createWebElement();
        break;
      case "map-element":
        newElement = createMapElement();
        break;
      case "icon-element":
        newElement = createIconElement();
        break;
      case "video-element":
        newElement = createVideoElement();
        break;
      default:
        return;
    }

    if (newElement) {
      let parentContainer = event.target.closest(".container-element");

      if (parentContainer) {
        parentContainer.appendChild(newElement);
      } else {
        let referenceElement = null;
        let children = Array.from(this.children);
        for (let i = 0; i < children.length; i++) {
          if (
            event.clientY <
            children[i].getBoundingClientRect().top +
              children[i].offsetHeight / 2
          ) {
            referenceElement = children[i];
            break;
          }
        }

        if (referenceElement) {
          this.insertBefore(newElement, referenceElement);
        } else {
          this.appendChild(newElement);
        }
      }

      let deleteElement = document.createElement("div");
      deleteElement.className = "delete-button";
      deleteElement.style.cssText = "display: none;";
      deleteElement.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
      newElement.appendChild(deleteElement);

      // Set up event listeners for the new element
      newElement.addEventListener("click", () => {
        if (selectedElement === newElement) {
          editorArea.classList.toggle("hidden");
          deleteElement.style.display = "none";
          selectedElement = null;
        } else {
          selectedElement = newElement;
          editorArea.classList.remove("hidden");
          deleteElement.style.display = "block";
        }
      });

      // Delete element functionality
      deleteElement.addEventListener("click", () => {
        if (selectedElement) {
          viewScreen.removeChild(selectedElement);
          selectedElement = null;
        }
      });

      drageNewElement();
    }
  });
}

// Initialize draggable elements
draggableElement();

let dragged = null;

function drageNewElement() {
  let draggedChields = viewScreen.querySelectorAll(".draggable");

  draggedChields.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      dragged = element;
      event.dataTransfer.setData("text/plain", element.className); // Ensure data is set correctly
    });

    element.addEventListener("dragend", function () {
      dragged = null;
    });

    viewScreen.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    viewScreen.addEventListener("drop", function (event) {
      event.preventDefault();

      if (dragged) {
        let parentContainer = event.target.closest(".container-element");

        if (parentContainer) {
          parentContainer.appendChild(dragged);
        } else {
          let referenceElement = null;
          let children = Array.from(this.children);
          for (let i = 0; i < children.length; i++) {
            if (
              event.clientY <
              children[i].getBoundingClientRect().top +
                children[i].offsetHeight / 2
            ) {
              referenceElement = children[i];
              break;
            }
          }

          if (referenceElement) {
            this.insertBefore(dragged, referenceElement);
          } else {
            this.appendChild(dragged);
          }
        }
      }
    });
  });
}


