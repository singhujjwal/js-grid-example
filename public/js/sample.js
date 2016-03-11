$(function() {
    

    $("#jsGrid").jsGrid({
        height: "50%",
        width: "50%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "/clients",
                    data: filter
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/clients",
                    data: item
                });
            },
            updateItem: function(item) {
                return $.ajax({
                    type: "PUT",
                    url: "/clients",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/clients",
                    data: item
                });
            }
        },
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Address", type: "text", width: 200 },
            { type: "control" }
        ]
    });
    
    $.get("/clients", function(data){
        for(var i=0; i<data.length; i++){
            $("#camelotServers").append('<a class="btn btn-primary" style="width:300px;" target="_blank" href="http://' + data[i].Address+ ':61208">' + data[i].Name + '</a>');
            $("#camelotServers").append("<br><br>");
            
        }
        
    })
    
});


