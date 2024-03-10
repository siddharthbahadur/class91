function addUser(){
    player1_name = document.getElementById("Player1_name_input").value;
    player2_name = document.getElementById("Player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game_page.html";
}

function load() {
    document.getElementById("player1_name").innerHTML = '<b style="color: rgb(14, 13, 13)">'+localStorage.getItem('player1_name')+" : 0"+"</b>";
    document.getElementById("player2_name").innerHTML = '<b style="color: rgb(14, 13, 13)">'+localStorage.getItem('player2_name')+" : 0"+"</b>";
    document.getElementById("player_question").innerHTML = '<b style="color: rgb(14, 13, 13)">Question Turn - '+localStorage.getItem('player1_name')+"</b>";
    document.getElementById("player_answer").innerHTML = '<b style="color: rgb(14, 13, 13)">Answer Turn - '+localStorage.getItem('player2_name')+"</b>";
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'/>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    alert(row);
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";    
}