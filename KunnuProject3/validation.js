$(function () {
  $("#name_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();

  var error_name = false;
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;
  var error_website = false;

  $("#form_name").focusout(function () {
    check_name();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_confirmPassword").focusout(function () {
    check_retype_password();
  });
  $("#form_website").focusout(function () {
    check_website();
  });
  $("#form_number").focusout(function () {
    check_telephone();
  });
  


  function check_name() {
    // var pattern = /^[a-zA-Z]*$/;
    var name = $("#form_name").val();
    if (name !== "") {
      $("#name_error_message").hide();
      $(".name").css("left", "100px");
      $("#form_name").css("border-bottom", "2px solid #34F458");
    } else {
      $("#name_error_message").html("*Name should not be empty*");
      $("#name_error_message").css("color", "red");
      $(".name").css("left", "200px");
      $("#name_error_message").show();
      $("#form_name").css("border-bottom", "2px solid #F90A0A");
      error_name = true;
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $(".email").css("left", "100px");
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#email_error_message").html("*Invalid Email*");
      $("#email_error_message").css("color", "red");
      $(".email").css("left", "150px");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_telephone() {
    var pattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    var number = $("#form_number").val();
    console.log(number)
    if (pattern.test(number)) {
      $("#number_error_message").hide();
      $(".number").css("left", "100px");
      $("#form_number").css("border-bottom", "2px solid #34F458");
    } else {
      $("#number_error_message").html("*Invalid Number*");
      $("#number_error_message").css("color", "red");
      $(".number").css("left", "150px");
      $("#number_error_message").show();
      $("#form_number").css("border-bottom", "2px solid #F90A0A");
      
    }
  }

 

  function check_website() {
      var pattren = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{1,9}(:[0-9]{1,5})?(\/.*)?$/;
      var website = $("#form_website").val();
      if( pattren.test(website)){
          $("#website_error_message").hide();
          $(".website").css("left", "100px");
          $("#form_website").css("border-bottom", "2px solid #34F458");
      }
      else {
        $("#website_error_message").html("*Invalid website*");
        $("#website_error_message").css("color", "red");
        $(".website").css("left", "150px");
        $("#website_error_message").show();
        $("#form_website").css("border-bottom", "2px solid #F90A0A");
        error_website = true;
      }
  }

  function check_password() {
    var password = $("#form_password").val();
    if (password == "") {
      $("#password_error_message").html("Password should not be empty");
      $("#password_error_message").css("color", "red");
      $(".password").css("left", "210px");
      $("#password_error_message").show();
      $("#form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
      $(".password").css("left", "100px");
      $("#form_password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_retype_password() {
    var password = $("#form_password").val();
    var retype_password = $("#form_confirmPassword").val();
    if (password !== retype_password) {
      $("#retype_password_error_message").html("*Passwords did not Matched*");
      $("#retype_password_error_message").css("color", "red");
      $(".confirmPassword").css("left", "210px");
      $("#retype_password_error_message").show();
      $("#form_confirmPassword").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = true;
    } else {
      $("#retype_password_error_message").hide();
      $(".confirmPassword").css("left", "100px");
      $("#form_confirmPassword").css("border-bottom", "2px solid #34F458");
    }
  }

  $("#registration_form").submit(function () {
    error_name = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;

    check_name();
    check_email();
    check_password();
    check_retype_password();

    if (
      error_name === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false
    ) {
    //   alert("Submit Successfull");
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
