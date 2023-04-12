//Crie a variável de data
var date = new Date()
var new_date = date.toLocaleDataString('pt-BR')
let display_date= "Data: " + naw_date
//Carregue o DOM HTML
$(document).ready(function (){
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
})

//Defina a variável para armazenar a emoção prevista


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//seletor jQuery e ação de clique
let predicted_emotion;
$(function () {
    $("#predict_button").click(function () {
        //chamada AJAX
        let input_data = {
            "text": $("#text").val()
        }

        $.ajax({
            type:'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result){
                $("#prediction").html(result.data.predicted_emotion)
                $("#emo_img_url").attr('src', result.data.predicted_emotion_img_url);
                $('#prediction').css("display", "");
                $('#emo_img_url').css("display", "");
                predicted_emotion = result.data.predicted_emotion
                $('save_button').prop('disabled', false);
            },
            error: function (result) {
                alert(result.respondeJSON.message)
            }
            
        });
    });
})

