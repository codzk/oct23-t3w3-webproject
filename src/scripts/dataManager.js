// Declare JS data that we want to store

let cssThemes = [

];

let pageTheme = "dark";



/**
 * Return, assign, and return the latest stored CSS theme list from the browser localstorage.
 *
 * @returns Array of objects.
 */


function getStoredCssThemes(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes)
    // Return the updated data
    return cssThemes;
}


/**
 * Return, assign, and return the latest stored page theme from the browser localstorage.
 *
 * @returns String. Should be "light" or "dark".
 */

function getStoredPageTheme(){
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme;

}
// Create/Update localstorage
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("CssThemes", dataAsJsonString);
}

function setPageThemeToStorage(){
    localStorage.setItem("pageTheme", pageTheme);
}
/*

cssThemes = [
    {
        name: "blah",
        hex: "000000"
    },
    {
        name: "blah",
        hex: "000000"
    }
]

"[[Object Object], [Object object]"

JSON.stringify(cssThemes);

"[{'name' : 'blah', 'hex' : '000000'}, {'name' : 'blah' , 'hex' : '000000'}]"





*/

// Delete localstorage