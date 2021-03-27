$(function (){
    $('#contact-form').submit(function(e){
        e.preventDefault();
        var postdata = $('#contact-form').serialize();
    
        $.ajax({
            type: 'POST',
            url: 'script.php',
            data: postdata,
            dataType: 'json',
            success: function(result){

                if(result.isSuccess){
                    $("#contact-form")[0].reset();
                    $('.form-group').removeClass('animation');
                    function checkBtn () {
                        $('.btn-submit').html("ENVOYER &nbsp;<i class='fas fa-check-circle'></i>");
                        $('.btn-submit').css({
                            backgroundPosition: '100%',
                            color: '#191c23',
                            borderColor: '#191c23'
                        });
                        setTimeout(() => {
                            $('.btn-submit').html("ENVOYER &nbsp;<i class='fas fa-paper-plane'></i>");
                            $('.btn-submit').css({
                            backgroundPosition: '',
                            color: '',
                            borderColor: ''
                        });
                        }, 2000);
                    };
                    checkBtn();
                } else {
                    $('.btn-submit').html("ERREUR &nbsp;<i class='fas fa-times-circle'></i>");
                }
            } 
        }); 
    });  
}); 
