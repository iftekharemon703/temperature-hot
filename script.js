document.getElementById("submitBtn").addEventListener("click", function () {
    const submitBtn = document.getElementById("inputBox").value;
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${submitBtn}&units=metric&appid=94b9a0fb0cf13e1bbb9e3a329796d8e0`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const imgs = document.getElementById("image").src;
        document.getElementById(
          "image"
        ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("location").innerText = data.name;
        document.getElementById("temp").innerText = data.main.temp;
        document.getElementById("climate").innerText = data.weather[0].main;
      });
  });