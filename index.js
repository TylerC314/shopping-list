//Adds a new item to the list if not blank
$("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    item = $("#shopping-list-entry").val();
    if(item !== "") {
        $(".shopping-list").append(addItem(item));
    }    
});

$(".shopping-item-toggle").click( function(event) {
    let itemName = $(this).closest("li").find(".shopping-item").addClass("shopping-item__checked");
});

//Creates the default list item.
function addItem(name) {
    let defaultItem = $(".shopping-list").find("li").first().clone();
    defaultItem.find(".shopping-item").text(name);
    item = defaultItem.html();
    return "<li>" + item + "</li>";
}