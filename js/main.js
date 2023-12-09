$(document).ready(function() {


    function onTelegramAuth(user) {
        if (user) {
            displayUserInfo(user);

            showProgress(20);
        }
        alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
    }

    function displayUserInfo(user) {
        $("#user_name").val(user.first_name + ' ' + user.last_name);
        $("#user_id").val(user.id);
        $("#username").val((user.username ? '@' + user.username : ''));
        $("#user_")[0].innerText = (user.first_name + ' ' + user.last_name);
        $(".tg-btn").toggleClass('hidden');
        $(".user-info").toggleClass('hidden');
    }









})