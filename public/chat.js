$(function () {
    //Kết nối tới server socket đang lắng nghe
    var socket = io.connect('192.168.126.1:3000');

    //Socket nhận data và append vào giao diện
    socket.on("send", function (data) {
        console.log(data);
        $("#contents").append("<p class='messages'>" + data.username + ": " + data.message + "</p>")
    })

    //Bắt sự kiện click gửi message
    $("#sendMessages").on('click', function () {
        var username = $('#usernames').val();
        var message = $('#messages').val();

        if (username == '' || message == '') {
            alert('hãy viết tên và tin nhắn!!');3
        } else {
            //Gửi dữ liệu cho socket
            socket.emit('send', {username: username, message: message});
            $('#messages').val('');
        }
    })
})
// socket.on("server-send-message",function(data){
//     $("#contents").append("<div class ='ms' >"+ data.un +':'+ data.nd +"</div>")
// })
// $("#sendMessages").click(function (){
//     socket.emit("user-send-message",$("#messgages").val());
// });