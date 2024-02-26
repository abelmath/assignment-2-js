console.log("Script loaded.");

// Constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const studentIdParagraph = document.getElementById("studentId");
const images = document.getElementById("images");

// Function to change background color from user input and add student id
function changeBackgroundColor(value) {
    studentIdParagraph.textContent = 200552821;

    let color;
    if (value < 0 || value > 100) {
        color = "red";
    } else if (value <= 20) {
        color = "green";
    } else if (value <= 40) {
        color = "blue";
    } else if (value <= 60) {
        color = "orange";
    } else if (value <= 80) {
        color = "purple";
    } else {
        color = "yellow";
    }

    document.body.style.backgroundColor = color;
}

// Function to generate options for select list
function addList() {
    const imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

    imageSelect.innerHTML = ""; // Clear existing options

    imageSources.forEach((src, index) => {
        const option = document.createElement("option");
        option.value = src;
        option.textContent = `Image ${index + 1}`;
        imageSelect.appendChild(option);
    });
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage;
}

// Event listeners for button clicks
customColorButton.addEventListener("click", () => {
    const userInput = parseInt(customNumberInput.value);
    changeBackgroundColor(userInput);
});

randomColorButton.addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    changeBackgroundColor(randomValue);
});

// Event listener for select change
imageSelect.addEventListener("change", changeImage);

// Initial setup
addList();
