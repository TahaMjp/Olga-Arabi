$(document).ready(function () {
  $("#framePrivacy").click(function () {
    if ($(".checkLink").attr("disabled") === "disabled") {
      console.log(true);
      $("#PrivacyCheck").attr("checked", true);
      $(".checkLink").removeAttr("disabled");
    } else {
      $("#PrivacyCheck").attr("checked", false);
      $(".checkLink").attr("disabled", "disabled");
      console.log(false);
    }
  });
});
