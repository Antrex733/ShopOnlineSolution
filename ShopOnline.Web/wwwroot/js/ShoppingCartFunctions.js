function MakeUpdateQtyButtonVisible(id, visible) {
    const updateQtyButton = document.querySelector("button[data-itemId='" + id + "']");

    console.log("DAAAAAAAAAAAAAAAAAAAAAAAAA");

    if (visible == true) {
        updateQtyButton.style.display = "inline-block";
    }
    else {
        updateQtyButton.style.display = "none";
    }


}