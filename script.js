let lensClicked = false;
let mirrorClicked = false;

document.getElementById("lens").addEventListener("click", function() {
    if (!lensClicked) {
        this.getElementsByTagName("img")[0].style.transform = "scale(1.2)";
        lensClicked = true;

        // Reset the mirror image
        if (mirrorClicked) {
            document.getElementById("mirror").getElementsByTagName("img")[0].style.transform = "scale(1)";
            mirrorClicked = false;
        }
    } else {
        // Redirect to the lens page
        window.location.href = "lens.html";
    }
});

document.getElementById("mirror").addEventListener("click", function() {
    if (!mirrorClicked) {
        this.getElementsByTagName("img")[0].style.transform = "scale(1.2)";
        mirrorClicked = true;

        // Reset the lens image
        if (lensClicked) {
            document.getElementById("lens").getElementsByTagName("img")[0].style.transform = "scale(1)";
            lensClicked = false;
        }
    } else {
        // Redirect to the mirror page
        window.location.href = "mirror.html";
    }
});

document.getElementById("concave-lens").addEventListener("click", function() {
    // Handle the click event for the concave lens icon
    // You can update the lens image, focal length, or any other relevant parameters here
});

document.getElementById("convex-lens").addEventListener("click", function() {
    // Handle the click event for the convex lens icon
    // You can update the lens image, focal length, or any other relevant parameters here
});
