let searchForDivToEdit = false;

window.addEventListener("click", async (e) => {
  if (e.target.classList && [...e.target.classList].includes("elementToDrag")) {
    if (
      e.target.dataset.state == "fromDivToDiv" &&
      searchForDivToEdit == true
    ) {
      document.querySelector(".sideBar").style.display = "none";
      document.querySelector(".sectionEditElements").style.display = "block";
      document.querySelector(".divToEditEverySection").innerHTML = `
        <p> put all you need to edit here </p>
      `;
      document.querySelector(".changeMouseToEdit").style.border = "none";
      searchForDivToEdit = false;
    }
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("changeMouseToEdit")
  ) {
    document.querySelector(".changeMouseToEdit").style.border =
      "2px solid black";
    searchForDivToEdit = true;
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("hiddeDivFirstApp")
  ) {
    document.querySelector(".divFirstApp").style.display = "none";
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("showUploadIconDiv")
  ) {
    document.querySelector(".divToUplaodImg").style.display = "block";
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("hideDivToUplaodImg")
  ) {
    document.querySelector(".divToUplaodImg").style.display = "none";
  }

  if (e.target.classList && [...e.target.classList].includes("showStep1")) {
    document.querySelector(".step1Div").style.display = "block";
    document.querySelector(".step2Div").style.display = "none";
    document.querySelector(".step3Div").style.display = "none";
    document.querySelector(".step4Div").style.display = "none";

    document.querySelector(".step2Line").classList.remove("active");
    document.querySelector(".step3Line").classList.remove("active");
    document.querySelector(".step4Line").classList.remove("active");
  }

  if (e.target.classList && [...e.target.classList].includes("showStep2")) {
    document.querySelector(".step1Div").style.display = "none";
    document.querySelector(".step2Div").style.display = "block";
    document.querySelector(".step3Div").style.display = "none";
    document.querySelector(".step4Div").style.display = "none";

    document.querySelector(".step2Line").classList.add("active");

    document.querySelector(".step3Line").classList.remove("active");
    document.querySelector(".step4Line").classList.remove("active");
  }

  if (e.target.classList && [...e.target.classList].includes("showStep3")) {
    document.querySelector(".step1Div").style.display = "none";
    document.querySelector(".step2Div").style.display = "none";
    document.querySelector(".step3Div").style.display = "block";
    document.querySelector(".step4Div").style.display = "none";

    document.querySelector(".step2Line").classList.add("active");
    document.querySelector(".step3Line").classList.add("active");
    document.querySelector(".step4Line").classList.remove("remove");
  }

  if (e.target.classList && [...e.target.classList].includes("showStep4")) {
    document.querySelector(".step1Div").style.display = "none";
    document.querySelector(".step2Div").style.display = "none";
    document.querySelector(".step3Div").style.display = "none";
    document.querySelector(".step4Div").style.display = "block";

    document.querySelector(".step2Line").classList.add("active");
    document.querySelector(".step3Line").classList.add("active");
    document.querySelector(".step4Line").classList.add("active");
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("btnToHideDivToWriteAppName")
  ) {
    document.querySelector(".divToWriteAppName").style.display = "none";
  }

  if (e.target.classList && [...e.target.classList].includes("getStart")) {
    document.querySelector(".divToGetStart").style.display = "block";
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("hidedivToGetStart")
  ) {
    document.querySelector(".divToGetStart").style.display = "none";
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("returnWithSave")
  ) {
    document.querySelector(".sideBar").style.display = "block";
    document.querySelector(".sectionEditElements").style.display = "none";
  }

  if (
    e.target.classList &&
    [...e.target.classList].includes("returnWithOutSave")
  ) {
    document.querySelector(".sideBar").style.display = "block";
    document.querySelector(".sectionEditElements").style.display = "none";
  }

  if (e.target.classList && [...e.target.classList].includes("removeSection")) {
    let elementToDelet = document.querySelector(
      `.Section_${e.target.dataset.name}`
    );
    elementToDelet.remove();
  }

  if (e.target.classList && [...e.target.classList].includes("editSection")) {
    let elementToEdit = document.querySelector(
      `.Section_${e.target.dataset.name}`
    );
    document.querySelector(".sideBar").style.display = "none";
    document.querySelector(".sectionEditElements").style.display = "block";

    if ([...elementToEdit.classList].includes("Section_Container")) {
      document.querySelector(".divToEditEverySection").innerHTML = "";
      document.querySelector(".divToEditEverySection").innerHTML = `
        <div data-sectionid="">
          <div style="display: flex; justify-content: space-between; margin: 20px 0;">
            <div  style="display: flex; justify-content: center; align-items: center;">
              <p class="nameOfPropirty">height</p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center;">
              <input type="text" style="width: 150px; font-size: 20px;" class="heightValue">
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 20px 0;">
            <div  style="display: flex; justify-content: center; align-items: center;">
              <p class="nameOfPropirty">Bg Color</p>
            </div>
            <div   style="display: flex; justify-content: center; align-items: center;">
              <input type="color" style="width: 150px; font-size: 20px;" class="BgColorvalue">
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 20px 0;">
            <div  style="display: flex; justify-content: center; align-items: center;">
              <p class="nameOfPropirty">Text Color</p>
            </div>
            <div   style="display: flex; justify-content: center; align-items: center;">
              <input type="color" style="width: 150px; font-size: 20px;" class="textColorvalue">
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 20px 0;">
            <div  style="display: flex; justify-content: center; align-items: center;">
              <p class="nameOfPropirty">Grid Number</p>
            </div>
            <div   style="display: flex; justify-content: center; align-items: center;">
              <select class="selectValue" name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        </div>
      `;

      let heightValueInput = document.querySelector(".heightValue");

      heightValueInput.addEventListener("input", (e) => {
        document.querySelector(`.${elementToEdit.dataset.id}`).style.height =
          heightValueInput.value;
      });

      let BgColorvalueInput = document.querySelector(".BgColorvalue");

      BgColorvalueInput.addEventListener("input", (e) => {
        document.querySelector(
          `.${elementToEdit.dataset.id}`
        ).style.backgroundColor = BgColorvalueInput.value;
      });

      let textColorvalueInput = document.querySelector(".textColorvalue");

      textColorvalueInput.addEventListener("input", (e) => {
        document.querySelector(`.${elementToEdit.dataset.id}`).style.color =
          textColorvalueInput.value;
      });

      let selectValueInput = document.querySelector(".selectValue");

      selectValueInput.addEventListener("input", (e) => {
        let cols = document.querySelectorAll(
          `.${elementToEdit.dataset.id}_row .col`
        );

        cols.forEach((col, index) => {
          if (index < selectValueInput.value) {
            col.style.display = "flex";
          } else {
            col.style.display = "none";
          }
        });
      });
    }
  }
});
addDragAndDropToWindow();

function getElementDetails(element) {
  const projectId = urlParams.get("projectid");

  const cols = element.querySelectorAll(".col");
  const colsDetails = Array.from(cols).map((col) => ({
    text: col.innerText || col.textContent,
    style: col.getAttribute("style"),
  }));

  return {
    id: element.id,
    height: element.style.height,
    backgroundColor: element.style.backgroundColor,
    color: element.style.color,
    gridNum: cols.length,
    cols: colsDetails,
    textContent: element.textContent.trim(),
    innerHTML: element.innerHTML,
    project_id: projectId,
  };
}

function addDragAndDropToWindow() {
  let draggedElement = "";
  let droppedElement = "";

  window.addEventListener("dragstart", async (e) => {
    draggedElement = e.target;
  });

  window.addEventListener("dragover", async (e) => {
    if ([...e.target.classList].includes("elementToDragIn")) {
      e.preventDefault();
    }

    if ([...e.target.classList].includes("canDrobIn")) {
      e.preventDefault();
    }
    if ([...e.target.classList].includes("DeletAnyElementDropIn")) {
      e.preventDefault();
    }
  });

  window.addEventListener("drop", async (e) => {
    if ([...e.target.classList].includes("elementToDragIn")) {
      droppedElement = e.target;

      if ([...draggedElement.classList].includes("elementToDrag")) {
        e.preventDefault();

        let randomId = "element_" + Date.now();

        if ([...draggedElement.classList].includes("ContainerSectionToDrag")) {
          droppedElement.innerHTML += `
            <div id="${randomId}" data-id="Section_${draggedElement.dataset.name}_${randomId}" class="mobileBuildSection Section_${draggedElement.dataset.name} Section_${draggedElement.dataset.name}_${randomId}" style="position: relative; height: 60px; margin: 40px auto;">
              <div style="position: absolute; right: 0;top: -35px;">
                <i title="تعديل" class="fa-solid fa-pen-to-square editSection" data-name="${draggedElement.dataset.name}_${randomId}" data-id="${randomId}" style="font-size: 20px; color: #e0dfdf; background: #233245; border-radius: 50%; padding: 5px 5px; cursor: pointer;"></i>
                <i title="حذف" class="fa-solid fa-trash removeSection" data-name="${draggedElement.dataset.name}_${randomId}" data-id="${randomId}" style="font-size: 20px; color: white; background: darkred; border-radius: 50%; padding: 6px 8px; cursor: pointer;"></i>
              </div>
              <div class="row Section_${draggedElement.dataset.name}_${randomId}_row" style="width: 100%; margin: auto; height: 100%;">
                <div class="col col1 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center;"></div>
                <div class="col col2 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                <div class="col col3 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                <div class="col col4 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                <div class="col col5 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                <div class="col col6 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
              </div>
            </div>
          `;
        }
      }
    } else if ([...e.target.classList].includes("canDrobIn")) {
      droppedElement = e.target;

      if (draggedElement.dataset.state == "fromDivToDiv") {
        if (draggedElement.parentNode !== droppedElement) {
          let oldHtml = `${draggedElement.parentNode.innerHTML}`;
          draggedElement.parentNode.innerHTML = droppedElement.innerHTML;
          droppedElement.innerHTML = `
            ${oldHtml}
          `;
        }
      } else {
        let thisHtml =
          draggedElement.parentNode.querySelector(".thisHtml").innerHTML;
        droppedElement.innerHTML = ``;
        droppedElement.innerHTML = `${thisHtml}`;
      }
    } else if ([...e.target.classList].includes("DeletAnyElementDropIn")) {
      droppedElement = e.target;

      if (draggedElement.dataset.state == "fromDivToDiv") {
        draggedElement.remove();
      }
    }
  });
}

document
  .querySelector(".returnWithSave")
  .addEventListener("click", async function () {
    const elements = document.querySelectorAll(".mobileBuildSection");
    const containers = [];

    elements.forEach((element) => {
      containers.push(getElementDetails(element));
    });
    console.log(containers);

    try {
      const response = await fetch("http://localhost:8000/save_project.php", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          containers: containers,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Containers updated successfully:", data);
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving containers");
    }
  });

// Load saved containers from server
// async function loadSavedContainers() {
//   try {
//     const response = await fetch("http://localhost:8000/project.php");

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Loaded saved containers:", data);
//       // Clear existing containers
//       document.querySelectorAll(".mobileBuildSection").forEach(el => el.remove());
//       // Rebuild containers
//       data.containers.forEach(container => {
//         const containerHtml = container.innerHTML;
//         document.querySelector(".elementToDragIn").innerHTML += containerHtml;
//       });
//     } else {
//       console.error("Failed to load containers");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

async function loadSavedContainers() {
  try {
    const response = await fetch("http://localhost:8000/project.php");

    if (response.ok) {
      const data = await response.json();
      console.log("Loaded saved containers:", data);

      // Clear existing containers
      document
        .querySelectorAll(".mobileBuildSection")
        .forEach((el) => el.remove());

      // Rebuild containers
      data.containers.forEach((container) => {
        // Create a new element
        const newElement = document.createElement("div");
        newElement.id = container.id;
        newElement.dataset.id = container["data-id"];
        newElement.className = container.class;
        newElement.style.cssText = container.style; // Assuming style is a string of CSS rules
        newElement.innerHTML = container.innerHTML;

        // Append the new element
        document.querySelector(".elementToDragIn").appendChild(newElement);
      });

      // Reapply drag events to newly added elements
      document.querySelectorAll(".mobileBuildSection").forEach((el) => {
        el.addEventListener("dragstart", (e) => {
          draggedElement = e.target;
        });

        el.addEventListener("dragover", (e) => {
          if ([...e.target.classList].includes("elementToDragIn")) {
            e.preventDefault();
          }

          if ([...e.target.classList].includes("canDrobIn")) {
            e.preventDefault();
          }

          if ([...e.target.classList].includes("DeletAnyElementDropIn")) {
            e.preventDefault();
          }
        });

        el.addEventListener("drop", (e) => {
          if ([...e.target.classList].includes("elementToDragIn")) {
            droppedElement = e.target;

            if ([...draggedElement.classList].includes("elementToDrag")) {
              e.preventDefault();

              let randomId = "element_" + Date.now();

              if (
                [...draggedElement.classList].includes("ContainerSectionToDrag")
              ) {
                const newSection = document.createElement("div");
                newSection.id = randomId;
                newSection.dataset.id = `Section_${draggedElement.dataset.name}_${randomId}`;
                newSection.className = `mobileBuildSection Section_${draggedElement.dataset.name} Section_${draggedElement.dataset.name}_${randomId}`;
                newSection.style =
                  "position: relative; height: 60px; margin: 40px auto;";

                newSection.innerHTML = `
                  <div style="position: absolute; right: 0; top: -35px;">
                    <i title="تعديل" class="fa-solid fa-pen-to-square editSection" data-name="${draggedElement.dataset.name}_${randomId}" data-id="${randomId}" style="font-size: 20px; color: #e0dfdf; background: #233245; border-radius: 50%; padding: 5px 5px; cursor: pointer;"></i>
                    <i title="حذف" class="fa-solid fa-trash removeSection" data-name="${draggedElement.dataset.name}_${randomId}" data-id="${randomId}" style="font-size: 20px; color: white; background: darkred; border-radius: 50%; padding: 6px 8px; cursor: pointer;"></i>
                  </div>
                  <div class="row Section_${draggedElement.dataset.name}_${randomId}_row" style="width: 100%; margin: auto; height: 100%;">
                    <div class="col col1 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center;"></div>
                    <div class="col col2 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                    <div class="col col3 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                    <div class="col col4 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                    <div class="col col5 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                    <div class="col col6 canDrobIn" style="border: 1px solid black; display: flex; justify-content: center; display: none;"></div>
                  </div>
                `;
                droppedElement.appendChild(newSection);
              }
            }
          } else if ([...e.target.classList].includes("canDrobIn")) {
            droppedElement = e.target;

            if (draggedElement.dataset.state == "fromDivToDiv") {
              if (draggedElement.parentNode !== droppedElement) {
                let oldHtml = draggedElement.parentNode.innerHTML;
                draggedElement.parentNode.innerHTML = droppedElement.innerHTML;
                droppedElement.innerHTML = oldHtml;
              }
            } else {
              let thisHtml =
                draggedElement.parentNode.querySelector(".thisHtml").innerHTML;
              droppedElement.innerHTML = thisHtml;
            }
          } else if (
            [...e.target.classList].includes("DeletAnyElementDropIn")
          ) {
            droppedElement = e.target;

            if (draggedElement.dataset.state == "fromDivToDiv") {
              draggedElement.remove();
            }
          }
        });
      });
    } else {
      console.error("Failed to load containers");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call loadSavedContainers on page load
window.addEventListener("load", loadSavedContainers);

const urlParams = new URLSearchParams(window.location.search);

// Get the id parameter
const IDParam = urlParams.get("projectid");

function GetProjectName() {
  axios
    .get("http://localhost:8000/project.php")
    .then((response) => {
      let project = response.data.find((project) => project.id == IDParam);
      if (project) {
        let ProjectName = document.getElementById("project_name");
        ProjectName.textContent = project.ProjectName;
      } else {
        console.error("Project not found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

GetProjectName();

// Add New Screen
document.getElementById("ScreenDivContainer").addEventListener("click", () => {
  // let ScreenNumber = 1;
  // const ScreenDivContainer = document.querySelector(".screenDiv");
  // const ScreenChildonDivContainer = `
  //         <div class="MainWrapper-sc-${ScreenNumber}">
  //           <div class="screen-show"></div>
  //           <div class="screen-details">
  //             <h5>Screen ${ScreenNumber}</h5>
  //           </div>
  //         </div>`;
  // ScreenDivContainer.appendChild = ScreenChildonDivContainer;

  axios.post(domain.local + "dashboard/save_project.php", {});
});

// Delete Project Function
function DeleteProjectFunction() {
  const url = `project.php`;
  axios
    .delete(url, {
      data: {
        projectid: IDParam,
      },
    })
    .then((response) => {
      alert(response.data.message);
      window.location = "index.html"; // Redirect after successful deletion
    })
    .catch((error) => {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting project.");
    });
}

// Edit Project Details Function
async function EditProjectDetailsFunction() {
  const url = `project.php`;
  const editProjectNameInput = document.getElementById("EditprojectNameInput");
  const editAppNameInput = document.getElementById("EditAppNameInput");

  // Get values from inputs
  const finishProjectNameAfterUpdate = editProjectNameInput.value.trim();
  const finishAppNameAfterUpdate = editAppNameInput.value.trim();

  // Validate inputs
  if (!finishProjectNameAfterUpdate || !finishAppNameAfterUpdate) {
    alert("Please fill in all the fields");
    return;
  }

  try {
    // Make PUT request to update project details
    const response = await axios.put(url, {
      projectid: IDParam,
      ProjectName: finishProjectNameAfterUpdate,
      AppName: finishAppNameAfterUpdate,
    });

    alert(response.data.message);
    console.log(response.data); // Log the response if needed
    $("#editProjectModal").modal("hide"); // Hide modal after successful update
    window.location = "index.html"; // Redirect after successful update
  } catch (error) {
    console.error("Error updating project:", error);
    alert("An error occurred while updating project details.");
  }
}
