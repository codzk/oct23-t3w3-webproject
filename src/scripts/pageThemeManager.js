
// update #pageThemeHeading Text
function updatePageThemeHeading(){
    let headingToUpdate = document.getElementById("pageThemeHeading");
    headingToUpdate.textContent = getStoredPageTheme();

}

// update #pageThemeButton Text
function updatePageThemeButtonText(){
    let buttonToUpdate = document.getElementById("pageThemeButton");

    let textToShow = "";

    if (getStoredPageTheme() == "dark"){
        textToShow = "Toggle To Light Mode";

    }else {
        textToShow = "Toggle To Dark Mode";
    }

    buttonToUpdate.textContent = "";

}

// add onclick to #pageThemeButton
function togglePageTheme(){
    if (getStoredPageTheme() == "dark"){
        pageTheme = "light";
        
    } else {
        pageTheme = "dark";
        
    }
    setPageThemeToStorage();
    updatePageThemeButtonText();
    updatePageThemeHeading();
}

let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);