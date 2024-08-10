// Select DOM elements for hiding and showing content based on projects
const hiddenIfClientHaveProjects = document.querySelector("#HiddenifClientHaveProjects");
const showIfClientHaveProjects = document.querySelector("#ShowifClientHaveProjects");
const ulElement = document.querySelector("#ulElement");

// Add a load event listener to the window to trigger the project check function
window.addEventListener("load", checkIfClientHaveProjects);

// Function to check if the client has projects by fetching data from the server
function checkIfClientHaveProjects() {
  fetch(`http://localhost:5500/dashboard/js/db.json`)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      if (data.projects && data.projects.length > 0) {
        // If projects are found, call the function to display them
        displayProjects(data.projects);
      } else {
        console.log("No projects found");
      }
    })
    .catch((error) => alert(`Error fetching projects: ${error}`));
}

function GetProjectIDbyButton(event) {
  const button = event.currentTarget; // Get the button that triggered the event
  const projectID = button.getAttribute("data-projectid"); // Retrieve the project ID
  console.log("Project ID:", projectID); // Optional: log the project ID for debugging
  return projectID;
}

function displayProjects(projects) {
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = ""; // Clear the container before adding new projects
  projects.forEach((project, index) => {
    projectContainer.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img src="${project.ProjectIcon}" class="card-img-top" alt="${project.ProjectName}" style="height: 90%;">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title">${project.ProjectName}</h3>
              <a id="btnproject${index}" class="btn btn-primary" data-projectid="${project.id}" onclick="gotoDashboard(event)">Go Dashboard</a>
              <div class="project_operations mt-2">
                <button 
                  type="button"
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#editProjectModal"
                  data-projectid="${project.id}"
                  id="btnToEditProject"
                  onclick="openEditProjectModal(event)"
                  title="Edit">
                    <i class="fa-solid fa-pen" id="openEditModalButton"></i>
                </button>
                <button 
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#deleteProjectModal"
                  data-projectid="${project.id}"
                  id="btnToDeleteProject"
                  onclick="DeleteProjectFunction(event)"
                  title="Delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
      </div>`;
  });
  hiddenIfClientHaveProjects.style.display = "none";
  showIfClientHaveProjects.style.display = "block";
}

/**
 * Function to handle the dashboard redirection
 * @param {Event} event - The event object
 */
function gotoDashboard(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const projectID = event.target.dataset.projectid;
  const url = `dashboard.html?projectid=${projectID}`;
  window.location.href = url;
}

function GoToLastProject(event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Make an AJAX request to fetch the project data
  fetch(domain.local + "dashboard/js/db.json")
    .then((response) => response.json())
    .then((data) => {
      // Extract the last project ID from the response data
      const lastProjectId = data.projects[data.projects.length - 1].id;

      // Redirect to the dashboard with the last project ID
      const url = `dashboard.html?projectid=${lastProjectId}`;
      window.location.href = url;
    })
    .catch((error) => console.error("Error fetching project data:", error));
}

// Global variable to store the project ID to delete
let projectIDToDelete = null;

function DeleteProjectFunction(event) {
  event.preventDefault(); // Prevent the default form submission

  projectIDToDelete = GetProjectIDbyButton(event); // Retrieve the project ID

  // Show the delete confirmation modal
  const deleteModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
  deleteModal.show();
}

// Add an event listener to the confirm delete button
document.getElementById('confirmDeleteButton').addEventListener('click', function () {
  const url = `project.php`;
  axios
    .delete(url, {
      data: {
        projectid: projectIDToDelete,
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
});

// Function to open the edit project modal and populate fields
function openEditProjectModal(event) {
  const projectID = GetProjectIDbyButton(event); // Retrieve the project ID

  // Fetch project data
  fetch(domain.local + "dashboard/js/db.json")
    .then(response => response.json())
    .then(data => {
      const project = data.projects.find(p => p.id === projectID);
      if (project) {
        document.getElementById("EditprojectNameInput").value = project.ProjectName;
        document.getElementById("EditAppNameInput").value = project.AppName;
        document.getElementById("editProjectID").value = project.id;
        $('#editProjectModal').modal('show'); // Use jQuery to show the modal
      }
    })
    .catch(error => console.error("Error fetching project data:", error));
}

// Edit Project Details Function
async function EditProjectDetailsFunction(event) {
  event.preventDefault(); // Prevent the default form submission

  const projectID = document.getElementById("editProjectID").value; // Retrieve the project ID
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
    const response = await axios.put('project.php', {
      projectid: projectID,
      ProjectName: finishProjectNameAfterUpdate,
      AppName: finishAppNameAfterUpdate,
    });

    alert(response.data.message);
    console.log(response.data); // Log the response if needed
    $('#editProjectModal').modal('hide'); // Use jQuery to hide the modal
    window.location = "index.html"; // Redirect after successful update
  } catch (error) {
    console.error("Error updating project:", error);
    alert("An error occurred while updating project details.");
  }
}

// Close modal on cancel or close button click
document.querySelectorAll('.modal .btn-close, .modal .btn-secondary').forEach(button => {
  button.addEventListener('click', function () {
    const modalElement = button.closest('.modal');
    $(modalElement).modal('hide'); // Use jQuery to hide the modal
  });
});
