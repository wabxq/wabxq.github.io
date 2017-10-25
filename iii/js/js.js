window.onload = function() {
	var oBtn = document.getElementById("btn");
	oBtn.addEventListener("click", Sends);
	var oEnter = document.getElementById("text1");

	function Sends() {
		var oText = document.getElementById("text1").value;
		var oP = document.getElementById("time");
		var day = new Date();
		var w = day.getDay();
		var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		if(oText.trim() != "") {
			var oContent = document.getElementById("Content");
			var option = document.createElement("option");
			var tl = oText.length;
			option.style.width = tl * 15 + tl * 2 + "px";
			option.style.marginLeft = 170 + "px";
			option.innerHTML = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate() + "  " + weekday[w] + "  " + day.getHours() + ":" + day.getMinutes();
			oContent.appendChild(option);
			var option1 = document.createElement("option");
			option1.innerHTML = oText;
			option1.style.backgroundColor = "greenyellow";
			option1.style.marginLeft = "30px";
			option1.style.width = tl * 15 + tl * 2 + "px";
			option1.style.height = 2 + "em";
			option1.style.textAlign = "center";
			option1.style.borderRadius = 5 + "px";
			oContent.appendChild(option1);
			document.getElementById("text1").value = " ";
		}

	}

	function clocktime(num) {
		if(num < 10) {
			num = "0" + num;
		}
		return num;
	}
	oEnter.onkeyup = function(ev) {
		var ev = ev || event;
		if(this.value != " ") {
			if(ev.keyCode == 13) {
				Sends();
			}
		}
	}
}