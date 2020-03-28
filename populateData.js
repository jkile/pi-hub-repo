
const menu = document.getElementById("menu");
const documentDisplay = document.getElementById("documentDisplay");

async function onLoad(){
    const documentListResponse = await axios.get("/documents");
    renderMenu(documentListResponse.data);
}

function renderMenu(menuItems){
    menuItems.forEach(item => {
        let newItem = document.createElement("h3");
        newItem.setAttribute("class", "text-white font-semibold text-lg");
        newItem.innerText = item;
        menu.appendChild(newItem);
    })
    menu.addEventListener("click", async e => {
        console.log(e.target.innerText);
        const documentResponse = await axios.get("/documents/" + e.target.innerText);
        let newDoc = document.createElement("p");
        newDoc.setAttribute("class", "text-gray-1000 font-semibold text-md");
        newDoc.innerText = documentResponse.data;
        documentDisplay.appendChild(newDoc);
    })
}

onLoad();