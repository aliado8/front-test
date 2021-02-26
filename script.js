$(document).ready(function() {
    $(".form").on("submit", function(e){
        e.preventDefault()
        $.ajax({
            url: 'https://60376bfd5435040017722533.mockapi.io/form',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                let obj = JSON.parse(data)
                if (obj.status === true) {
                    alert(obj.text)
                }
            },
            error: function (jqXHR, exception) {
                alert('ERROR')
            }
        });
    });
});