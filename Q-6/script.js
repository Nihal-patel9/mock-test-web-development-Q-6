
        const openModalButton = document.getElementById("openModalButton");
        const modal = document.getElementById("modal");
        const closeButton = document.getElementById("closeButton");

        // Open modal when the button is clicked
        openModalButton.addEventListener("click", function () {
            modal.style.display = "block";
            document.body.classList.add("modal-open");
        });

        // Close modal when the close button is clicked
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        });

        // Close modal when clicking outside the modal
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove("modal-open");
            }
        });