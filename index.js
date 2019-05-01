//Adds a new item to the list if not blank
$("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    item = $("#shopping-list-entry").val();
    if(item !== "") {
        $(".shopping-list").append(createItem(item));
    }
    $("#shopping-list-entry").val("");    
});

//When check button is pressed on item, crosses out item name
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this).closest("li").find(".shopping-item").addClass("shopping-item__checked");
});

//When delete button is pressed on item. item is deleted
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
});

//generates html for an item with the parameter as its name.
function createItem(name) {
    let item = "<li>" +
    "<span class='shopping-item'>" + name + "</span>" +
    "<div class='shopping-item-controls'>" +
      "<button class='shopping-item-toggle'>" +
        "<span class='button-label'>check</span>" +
      "</button>" +
      "<button class='shopping-item-delete'>" +
        "<span class='button-label'>delete</span>" +
      "</button>" +
    "</div>" +
  "</li>";
  return item;
}