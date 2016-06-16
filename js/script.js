$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5"];
    var itemInputs = [];
    items.forEach(function(item) {
      var userList = $("input#" + item).val();
      itemInputs.push(userList);
    });

    alert(itemInputs);


      $("#finalList").show();
      $("#blanks").hide();
      event.preventDefault();
      //return Items.toUpperCase();
      //alert(userList);

      $("ul").append("<li>" + itemInputs[0] + "</li>");
      $("ul").append("<li>" + itemInputs[1] + "</li>");
      $("ul").append("<li>" + itemInputs[2] + "</li>");
      $("ul").append("<li>" + itemInputs[3] + "</li>");
      $("ul").append("<li>" + itemInputs[4] + "</li>");
       //$("." + Item).append(userList[0]);
    //var Lists = $("input#Items").val();
      //Items.forEach(function(Item) {



      //return Items.push(Item);

   });

  });
