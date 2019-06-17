$(document).ready(function(){
    
  (function($) {
      "use strict";

  
  // jQuery.validator.addMethod('answercheck', function (value, element) {
  //     return this.optional(element) || /^\bcat\b$/.test(value)
  // }, "Escolha a Respota certa -_-");

  $(function() {
      $('#contactFormp').validate({
          rules: {
              namep: {
                  required: true,
                  minlength: 4
              },
              cpf: {
                  required: true,
                  minlength: 11
              },
              emailp: {
                  required: true,
                  emailp: true
              }
          },
          messages: {
              cpf: {
                  required: "Digite o CPF!",
                  minlength: "eu CPF deve conter no  Mínimo menos 11 caracteres"
              },
              namep: {
                  required: "Vamos lá, você tem um nome, não é? ",
                  minlength: "Seu nome deve consistir de pelo menos 4 caracteres"
              },
              emailp: {
                  required: "Sem E-mail, Sem mensagem"
              }               
          },
          submitHandler: function(form) {
              $(form).ajaxSubmit({
                  type:"POST",
                  data: $(form).serialize(),
                  url:"contact_process.php",
                  success: function() {
                      $('#contactFormp :input').attr('disabled', 'disabled');
                      $('#contactFormp').fadeTo( "slow", 1, function() {
                          $(this).find(':input').attr('disabled', 'disabled');
                          $(this).find('label').css('cursor','default');
                          $('#success').fadeIn()
                          $('.modal').modal('hide');
                    $('#success').modal('show');
                      })
                  },
                  error: function() {
                      $('#contactFormp').fadeTo( "slow", 1, function() {
                          $('#error').fadeIn()
                          $('.modal').modal('hide');
                    $('#error').modal('show');
                      })
                  }
              })
          }
      })
  })
      
})(jQuery)
})
document.querySelector('.comprar').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.comprarI').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.comprarP').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.comprarU').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function(){
   document.querySelector('.bg-modal').style.display = 'none';
});