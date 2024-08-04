$(document).ready(function () {
    ShowUserDetails();
    //alert("ok");
})

function ShowUserDetails() {
 
    $.ajax({
        url: '/Ajax/getAllUser',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, statu, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.userId + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.email + '</td>';
                object += '<td>' + item.pinCode + '</td>';
                object += '<td>' + item.isActive + '</td>';
                object += '<td><a href="#" class = "btn btn-primary">Edit</a> || <a href="#" class = "btn btn-danger">Delete</a></td>';
                object += '</tr>';

            })
            $('#table_data').html(object);
        }, error: function () {
            alert("data not get");
        }
    })
}

$('#btnAddUser').click(function () {
    $('#UserMadal').modal('show');
})