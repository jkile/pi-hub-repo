
const menu = document.getElementById("menu");
const documentDisplay = document.getElementById("documentDisplay");

async function onLoad() {
    const documentListResponse = await axios.get("/documents");
    const files = await axios.get("/documents/db");
    renderMenu(documentListResponse.data, files.data);
}

async function renderMenu(menuItems, files) {

    const repoList = document.createElement("ul");
    repoList.setAttribute("id", "repoList");

    menu.appendChild(repoList);

    //calls recursive render function with doc tree, mongo response, and list as args
    render(menuItems, files, repoList);

    let toggler = document.getElementsByClassName("caret");

    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function (e) {
            e.target.parentElement.querySelector(".nested").classList.toggle("active");
            e.target.classList.toggle("caret-down");
        });
    }

    menu.addEventListener("click", async e => {
        if (e.target.id && e.target.tagName === "LI") {
            document.querySelectorAll(".selected").forEach(item=>{
                item.removeAttribute("class")
            })
            e.target.setAttribute("class", "selected");
            const documentResponse = await axios.get("/documents/" + e.target.id);
            let newDoc = document.createElement("p");
            newDoc.setAttribute("class", "text-gray-1000 font-semibold text-md");
            newDoc.innerText = documentResponse.data;
            documentDisplay.innerHTML = "";
            documentDisplay.appendChild(newDoc);
        } else {
            console.log("Incorrect Filepath")
        }
    })
}

function render(menuItems, files, list) {
    if (menuItems.children) {
        menuItems.children.forEach(item => {

            let newItem = document.createElement("li");
            newItem.setAttribute("class", "text-white font-semibold text-md");
            newItem.innerText = item.name;
            list.appendChild(newItem);

            if (item.type === "file") {
                
                files.forEach(entry => {
                    if(entry.filePath === item.path){
                        newItem.setAttribute("id", entry._id);
                    }
                })

            } else if (item.type === "directory") {

                newItem.innerHTML = `<span class="caret">${item.name}`
                let childList = document.createElement("ul");
                childList.setAttribute("class", "nested");
                newItem.appendChild(childList);
                
                render(item, files, childList);
            }
        })
    }
}

onLoad();