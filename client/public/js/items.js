


function loadItem() {
    $.get({
        url: "http://localhost:8080/api/items",
        success: function(result) {
            console.log(result);
            var list = $("ul#item-list")
            console.log(list);
            list.empty()
            for (var idx = 0; idx < result.length; idx++) {
                var html = `<li><h3>${result[idx].name}</h3></li>`
                list.append(html)
            }
        }
    })
}

function postItem(result) {
  console.log($('#txt-code').val().trim());
  console.log($('#txt-name').val().trim());
  $.post({
    url: "http://localhost:8080/api/items",
    data: {
      "itemCode" : $('#txt-code').val().trim(),
      "name" : $('#txt-name').val().trim(),
      "description" : $('#txt-desc').val().trim(),
      "price" : $('#txt-price').val().trim(),
      "stock" : $('#txt-stock').val().trim(),

    },
    success: function(result) {
      loadItem()
    }
  })
}

$(function() {
    loadItem()
    $("#form-item").unbind().on("submit", function(event){
      event.preventDefault()
      postItem()
    })
})
