function validateForm() {

  $('#validateForm').validate({
    errorClass:'error',
    errorElement:'span',
    validClass:'success',
    highlight: function (element, errorClass, validClass) { 
      $(element).parent().addClass(errorClass); 
      $(element).addClass(errorClass); 
    }, 
    unhighlight: function (element, errorClass, validClass) { 
      $(element).parent().removeClass(errorClass); 
      $(element).removeClass(errorClass); 
    }
  });


  jQuery.extend(jQuery.validator.messages, {
    required: "*Este campo es obligatorio",
  });
  jQuery.validator.addClassRules( "required", {
    required: true
  });


}