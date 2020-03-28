
const menu = document.getElementById("menu");
const documentDisplay = document.getElementById("documentDisplay");

async function onLoad(){
    const documentsResponse = await axios.get("/documents");
    renderMenu(documentsResponse.data);
}

function renderMenu(menuItems){
    menuItems.forEach(item => {
        let newItem = document.createElement("h3");
        newItem.setAttribute("class", "text-white font-semibold text-lg");
        newItem.innerText = item;
        menu.appendChild(newItem);
    })
    menu.addEventListener("click", e => {
        console.log(e.target.innerText);
    })
}

onLoad();