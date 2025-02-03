document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".listItem");
    const itemHolder = document.querySelector(".itemHolder");
    let draggedItem = null;

    listItems.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            draggedItem = item;
            setTimeout(() => item.style.display = "none", 0);
        });

        item.addEventListener("dragend", () => {
            setTimeout(() => {
                draggedItem.style.display = "flex";
                draggedItem = null;
            }, 0);
        });

        item.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        item.addEventListener("dragenter", (e) => {
            e.preventDefault();
            item.style.backgroundColor = "#f0f0f0";
        });

        item.addEventListener("dragleave", () => {
            item.style.backgroundColor = "#FFFFFF";
        });

        item.addEventListener("drop", (e) => {
            e.preventDefault();
            item.style.backgroundColor = "#FFFFFF";
            if (draggedItem !== item) {
                let items = [...itemHolder.children];
                let draggedIndex = items.indexOf(draggedItem);
                let targetIndex = items.indexOf(item);

                if (draggedIndex < targetIndex) {
                    itemHolder.insertBefore(draggedItem, item.nextSibling);
                } else {
                    itemHolder.insertBefore(draggedItem, item);
                }
            }
        });
    });
});
