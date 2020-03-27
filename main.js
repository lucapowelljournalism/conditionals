const budget_total = $(".total_budget span").text();

$("body").on("keyup keydown keypress change", ".department input", function (e) {
	let running_total = budget_total;

	$(".department input").each(function () {
		let user_input = $(this).val()

		if (user_input !== "") {
			user_input = parseFloat(user_input);
			running_total = running_total - user_input;
		}
	});

	if (running_total >= 0 && running_total <= 20) {
		$(".total_budget").addClass("warning").removeClass("error")
		document.getElementById("message").innerHTML = "<span style='color:#e8d82a;font-size:32px;'>You are getting close to budget. Make good choices.</span>";
	} else if (running_total < 0) {
		$(".total_budget").addClass("error").removeClass("warning");
		document.getElementById("message").innerHTML = "<span style='color:red;font-size:32px;'>You are over budget! Make some changes.</span>";
	} else {
		$(".total_budget").removeClass("error").removeClass("warning");
		document.getElementById("message").innerHTML = "You are within your budget.";
	}
	$(".total_budget span").text(running_total);
});