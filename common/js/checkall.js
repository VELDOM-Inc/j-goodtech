let clickCount = 0;
$(function () {
  $("#checkAll").click(function () {
    clickCount += 1;
    if (clickCount % 2 === 1) {
      $("input.checks").prop("checked", true);
    } else {
      $("input.checks").prop("checked", false);
    }
  });
});
