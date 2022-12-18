// Send mail

document.querySelector("#button").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const templateParams = {
    name,
    phone,
  };
  emailjs
    .send(
      "service_2j214f7",
      "template_6ch3ucl",
      templateParams,
      "aPRv17hWBUrAL6o0w"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  alert("Сообщение высланно нам мы вам перезвоним");
});


