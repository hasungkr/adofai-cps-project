document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("tuf-input");
    const showBtn = document.getElementById("show-icon-btn");
    const iconImage = document.getElementById("tuf-icon");

    showBtn.addEventListener("click", function () {
        const userRating = inputField.value.trim().toUpperCase();

        if (userRating === "P" || userRating === "G" || userRating === "U") {
            const iconPath = `tuf-icons/${userRating.toLowerCase()}1.png`;

            iconImage.src = iconPath;
            iconImage.alt = `Icon for TUF tier ${userRating}`;
        } else {
            iconImage.src = "tuf-icons/default.png";
            iconImage.alt = "Invalid TUF tier. Please enter P, G, or U.";
        }
    });
});
