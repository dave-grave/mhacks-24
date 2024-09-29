document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("Chart").getContext("2d");
  var radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Strength", "Endurance", "Flexibility", "Speed"],
      datasets: [
        {
          label: "Performance",
          data: [80, 70, 90, 60], // Update this as needed
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
});

// function that opens different html page
function openPage(url) {
  window.open(url);
}
