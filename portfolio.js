
//Functionality for toggle dark/light mode button
const doc = document.getElement;

const toggleLightMode = (event)=>{
    const currentTheme = doc.getAttribute("data-theme");
    const newTheme = currentTheme === 'dark' ? 'light': 'dark';
    doc.setAttribute('data-theme', newTheme);
}

document.getElementById("toggle").addEventListener("change", toggleLightMode);
