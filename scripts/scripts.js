fetch("../data/showcase.json")
    .then(results => results.json())
    .then(data => {
        const ItemContainer = document.querySelector('.showcase__elements')

        data.forEach(Item => {
            const ShowcaseElement = document.createElement("div")
            ShowcaseElement.style.width = "35rem"
            ShowcaseElement.style.height = "25rem"
            ShowcaseElement.style.minWidth = "32rem"
            ShowcaseElement.style.backgroundColor = "rgb(40, 40, 40)"
            ShowcaseElement.style.borderRadius = "10px"
            ShowcaseElement.style.overflow = "hidden"
            ShowcaseElement.style.display = "flex"
            ShowcaseElement.style.flexDirection = "column"
            ShowcaseElement.style.alignItems = "center"
            ItemContainer.appendChild(ShowcaseElement)

            const imageHolder = document.createElement("div")
            imageHolder.style.width = "100%"
            imageHolder.style.height = "55%"
            imageHolder.style.display = "flex"
            imageHolder.style.justifyContent = "center"
            imageHolder.style.alignItems = "center"
            imageHolder.style.overflow = "hidden"
            imageHolder.style.margin = "0"
            imageHolder.style.padding = "0"
            ShowcaseElement.appendChild(imageHolder)

            const Contents = document.createElement("div")
            Contents.style.width = "95%"
            Contents.style.height = "35%"
            Contents.style.display = "flex"
            Contents.style.flexDirection = "column"
            Contents.style.justifyContent = "space-around"
            ShowcaseElement.appendChild(Contents)

            const image = document.createElement("img")
            image.style.height = "auto"
            image.style.width = "100%"
            image.style.margin = "0"
            image.src = Item.image
            imageHolder.appendChild(image)

            const Title = document.createElement("h1")
            Title.style.fontSize = "2.1rem"
            Title.style.textAlign = "start"
            Title.textContent = Item.Name
            Contents.appendChild(Title)

            const desc = document.createElement("p")
            desc.style.fontWeight = "100"
            desc.textContent = Item.Description
            Contents.appendChild(desc)
            
            const Link = document.createElement("a")
            Link.style.width = "0"
            Link.href = Item.link
            Link.textContent = "View"
            Contents.appendChild(Link)
         });
})

fetch("../data/price-sheet.json")
    .then(results => results.json())
    .then(data => {
        const ItemContainer = document.querySelector('.contact_elements')

        data.forEach(Item => {
            const ContactElement = document.createElement("div")
            ContactElement.style.width = "25rem"
            ContactElement.style.height = "40rem"
            ContactElement.style.backgroundColor = "rgb(36, 36, 36)"
            ContactElement.style.borderRadius = "10px"
            ContactElement.style.display = "flex"
            ContactElement.style.flexDirection = "column"
            ContactElement.style.alignItems = "center"
            ContactElement.style.justifyContent = "space-between"
            ContactElement.style.overflow = "hidden"
            ContactElement.style.border = "0.11em solid rgb(255, 255, 255)"
            ContactElement.classList.add("pricing_template")
            ItemContainer.appendChild(ContactElement)

            const Contents = document.createElement("div")
            Contents.style.width = "100%"
            Contents.style.height = "35%"
            Contents.style.display = "flex"
            Contents.style.flexDirection = "column"
            Contents.style.alignItems = "center"
            Contents.style.paddingTop = "1em"
            ContactElement.appendChild(Contents)

            const ImageHolder = document.createElement("div")
            ImageHolder.style.width = "100%"
            ImageHolder.style.height = "35%"
            ImageHolder.style.display = "flex"
            ImageHolder.style.flexDirection = "column"
            ImageHolder.style.alignItems = "center"
            ImageHolder.style.justifyContent = "center"
            ContactElement.appendChild(ImageHolder)

            const Title = document.createElement("h1") 
            Title.textContent = Item.Name
            Title.style.fontSize = "2rem"
            Contents.appendChild(Title)

            const desc = document.createElement("p")
            desc.textContent = Item.Description
            desc.style.paddingTop = "2em"
            Contents.appendChild(desc)

            const list = document.createElement("ul")
            list.style.listStyle = "none"
            list.style.paddingTop = "2em"
            for (let x of Item.List) {
                const listItem = document.createElement("li")
                listItem.textContent = x
                listItem.style.fontWeight = "300"
                listItem.style.paddingTop = "0.5em"
                list.appendChild(listItem)
            }
            Contents.appendChild(list)

            const img = document.createElement("img")
            img.style.width = "150%"
            img.style.height = "auto"
            img.src = Item.Media
            ImageHolder.appendChild(img)
        });
})