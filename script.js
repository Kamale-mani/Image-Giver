// Get references to DOM elements
const loadImageButton = document.getElementById("loadImage");
const imageUrlInput = document.getElementById("imageUrl");
const displayImage = document.getElementById("displayImage");
const message = document.getElementById("message");

// Function to fetch an image
function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(url); // Resolve with the image URL if the image loads
    img.onerror = () => reject("Failed to load the image. Please check the URL."); // Reject if there's an error
  });
}

// Event listener for the "Load Image" button
loadImageButton.addEventListener("click", () => {
  const imageUrl = imageUrlInput.value;

  // Clear previous messages and hide the image
  message.textContent = "Loading...";
  message.style.color = "blue";
  displayImage.style.display = "none";

  // Fetch and display the image using promises
  fetchImage(imageUrl)
    .then((url) => {
      displayImage.src = url;
      displayImage.style.display = "block";
      message.textContent = "Image loaded successfully!";
      message.style.color = "white";
    })
    .catch((error) => {
      message.textContent = error;
      message.style.color = "red";
    });
});

