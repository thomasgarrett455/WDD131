const themeSelector = document.querySelector("#themeSelect");
const logoImage = document.querySelector(".logo")
function changeTheme() {
    const selectedTheme = themeSelector.value;

if (selectedTheme == "dark") {
    document.body.classList.add("dark");
    logoImage.src = "byui-logo_white.png";
} 
else{
document.body.classList.remove("dark");
logoImage.src = "logo.webp";
    }
}
themeSelector.addEventListener('change', changeTheme);