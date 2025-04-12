document.getElementById("cropForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      N: document.getElementById("N").value,
      P: document.getElementById("P").value,
      Ph: document.getElementById("Ph").value,
      humidity: document.getElementById("humidity").value,
      rainf: document.getElementById("rainf").value,
      temp: document.getElementById("temp").value
    };
  
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      document.getElementById("resultText").innerText = `Recommended Crop: ${result.crop}`;
    } catch (err) {
      console.error(err);
      document.getElementById("resultText").innerText = "Error fetching prediction.";
    }
  });
  