const ProjectIconInput = document.getElementById("ProjectIconInput");
const ProjectNameInput = document.getElementById("project_name");
const AppNameInput = document.getElementById("app_name");
const SubmitAnchor = document.getElementById("anchorlinktodashboard");

let ProjectName;
let AppName;
let ProjectIcon;

ProjectIconInput.addEventListener("change", (e) => {
  ProjectIcon = e.target.files[0];
});

ProjectNameInput.addEventListener("input", (e) => {
  ProjectName = e.target.value;
});

AppNameInput.addEventListener("input", (e) => {
  AppName = e.target.value;
});

SubmitAnchor.addEventListener("click", async (event) => {
  event.preventDefault();
  if (ProjectIcon && ProjectName && AppName) {
    try {
      const projectIconBase64 = await fileToBase64(ProjectIcon);
      const response = await fetch(
        "http://localhost:8000/" + "save_project.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id: 3,
            ProjectIcon: projectIconBase64,
            ProjectName,
            AppName,
          }),
        }
      );

      if (response.ok) {
        window.location = "http://localhost:5500/" + "dashboard/index.html";
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the project");
    }
  } else {
    if (!ProjectIcon) alert("Project Icon is required.");
    if (!ProjectName) alert("Project Name is required.");
    if (!AppName) alert("App Name is required.");
  }
});

// Convert file to base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
}
