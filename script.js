document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
  let values = document.getElementById("inputValue").value;
  let calcule = values / 40;

  if (values === "") {
    alert("المرجوا ادخال المبلغ الذي مر عليه الحول!");
  } else if (!isNaN(values)) {
    document.getElementById(
      "result"
    ).innerHTML += `<br> USD ${calcule} \n\  : إجمالي الزكاة`;
  }
  document.getElementById("inputValue").value = "";
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("inputValue").value = "";
  document.getElementById("result").innerHTML = "";
});
