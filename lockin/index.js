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
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
});
