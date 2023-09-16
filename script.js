// Using fetch API to fetch the JSON data
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // This returns a promise
  })
  .then((data) => {
    // Inject data into HTML
    populateIcon(data);
    populateText(data);
    populateScore(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

const populateIcon = (data) => {
  document.querySelector("#reaction-icon").setAttribute("src", data[0].icon);
  document.querySelector("#memory-icon").setAttribute("src", data[1].icon);
  document.querySelector("#verbal-icon").setAttribute("src", data[2].icon);
  document.querySelector("#visual-icon").setAttribute("src", data[3].icon);
};

const populateText = (data) => {
  document.querySelector(".reaction-text").textContent = data[0].category;
  document.querySelector(".memory-text").textContent = data[1].category;
  document.querySelector(".verbal-text").textContent = data[2].category;
  document.querySelector(".visual-text").textContent = data[3].category;
};

const populateScore = (data) => {
  document.querySelector("#reaction-score").textContent = data[0].score;
  document.querySelector("#memory-score").textContent = data[1].score;
  document.querySelector("#verbal-score").textContent = data[2].score;
  document.querySelector("#visual-score").textContent = data[3].score;
};
