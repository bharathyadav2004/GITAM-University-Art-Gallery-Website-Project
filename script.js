document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById("upload-form");
    const imageInput = document.getElementById("image-input");
    const imagesContainer = document.getElementById("images-container");
    const totalImages = document.getElementById("total-images");

    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", imageInput.files[0]);

        // Simulate upload (replace this with actual upload functionality)
        setTimeout(() => {
            const uploadedImage = imageInput.files[0];
            const imageUrl = URL.createObjectURL(uploadedImage);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imagesContainer.appendChild(imageElement);

            // Update total images count
            totalImages.textContent = parseInt(totalImages.textContent) + 1;
        }, 1000); // Simulating upload delay of 1 second
    });
});
