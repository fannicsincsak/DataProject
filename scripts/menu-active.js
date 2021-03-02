$(".list-group-item").click(function(){

    var listItems = $(".list-group-item"); //Select all list items

    //Remove 'active' tag for all list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }

    //Add 'active' tag for currently selected item
    this.classList.add("active");
});