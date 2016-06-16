$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var Items = ["item1", "item2", "item3", "item4", "item5"];
    Items.forEach(function(Item) {
      var userList = $("input#" + Item).val();
      alert(userList);

    //var Lists = $("input#Items").val();
      //Items.forEach(function(Item) {



      //return Items.push(Item);
     })

    event.preventDefault();
  });
});
