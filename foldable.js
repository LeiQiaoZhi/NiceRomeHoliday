function toggleFoldableContent(element) {
    var content = element.nextElementSibling;
    var header = element.classList;

    if (content.style.maxHeight === "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
        header.add("open");
    } else {
        content.style.maxHeight = "0px";
        header.remove("open");
    }
}

