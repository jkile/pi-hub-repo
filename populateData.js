
const menu = document.getElementById("menu");
const documentDisplay = document.getElementById("documentDisplay");

async function onLoad() {
    const documentListResponse = await axios.get("/documents");
    renderMenu(documentListResponse.data.children);
}

function renderMenu(menuItems) {

    const repoList = document.createElement("ul");
    repoList.setAttribute("id", "repoList");

    menu.appendChild(repoList);

    menuItems.forEach(item => {

        let newItem = document.createElement("li");
        newItem.setAttribute("class", "text-white font-semibold text-lg ml-3");
        newItem.innerText = item.name;
        repoList.appendChild(newItem);

        if (item.type === "directory") {
            newItem.innerHTML = `<span class="caret">${item.name}`
            let childList = document.createElement("ul");
            childList.setAttribute("id", "childList");
            childList.setAttribute("class", "nested");
            newItem.appendChild(childList);

            item.children.forEach(item => {
                let newChild = document.createElement("li");
                newChild.setAttribute("class", "text-white font-semibold text-lg ml-6");
                newChild.innerText = item.name;
                childList.appendChild(newChild);

                if (item.type === "directory") {
                    newChild.innerHTML = `<span class="caret">${item.name}`
                    let grandChildList = document.createElement("ul");
                    grandChildList.setAttribute("id", "grandChildList");
                    grandChildList.setAttribute("class", "nested");
                    newChild.appendChild(grandChildList);

                    item.children.forEach(item => {
                        let newGrandChild = document.createElement("li");
                        newGrandChild.setAttribute("class", "text-white font-semibold text-lg ml-10");
                        newGrandChild.innerText = item.name;
                        grandChildList.appendChild(newGrandChild);

                        if (item.type === "directory") {
                            newGrandChild.innerHTML = `<span class="caret">${item.name}`
                            let greatGrandChildList = document.createElement("ul");
                            greatGrandChildList.setAttribute("id", "greatGrandChildList");
                            greatGrandChildList.setAttribute("class", "nested");
                            newGrandChild.appendChild(greatGrandChildList);

                            item.children.forEach(item => {
                                let newGreatGrandChild = document.createElement("h3");
                                newGreatGrandChild.setAttribute("class", "text-white font-semibold text-lg ml-12");
                                newGreatGrandChild.innerText = item.name;
                                greatGrandChildList.appendChild(newGreatGrandChild);

                            })
                        }
                    })
                }
            })
        }

    })

    var toggler = document.getElementsByClassName("caret");

    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function (e) {
            e.target.parentElement.querySelector(".nested").classList.toggle("active");
            e.target.classList.toggle("caret-down");
        });
    }



    // menu.addEventListener("click", async e => {
    //     const documentResponse = await axios.get("/documents/" + e.target.innerText);
    //     let newDoc = document.createElement("p");
    //     newDoc.setAttribute("class", "text-gray-1000 font-semibold text-md");
    //     newDoc.innerText = documentResponse.data;
    //     documentDisplay.appendChild(newDoc);
    // })
}

onLoad();

