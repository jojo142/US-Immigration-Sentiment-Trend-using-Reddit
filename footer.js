// footer.js
document.addEventListener("DOMContentLoaded", () => {
    // Create a footer element
    const footer = document.createElement("footer");
    footer.style.backgroundColor = "#943d29ff"; // Dark blue
    footer.style.color = "#fff";
    footer.style.padding = "15px";
    footer.style.textAlign = "center";
    footer.style.marginTop = "30px";
    footer.style.borderRadius = "8px";
    footer.style.boxShadow = "0px -4px 10px rgba(0,0,0,0.1)";
    footer.style.fontFamily = "Arial, sans-serif";

    // Add the content
    footer.innerHTML = `
        <p>&copy; 2025 Samiya Islam. All rights reserved.</p>
    `;

    // Append the footer to the body
    document.body.appendChild(footer);
}); 