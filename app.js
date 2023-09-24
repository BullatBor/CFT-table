const trainSchedule = [
  {
    trainNumber: 101,
    from: "Москва",
    to: "Санкт-Петербург",
    departure: "08:00",
    arrival: "13:30",
    travelTime: "5 часов 30 минут",
  },
  {
    trainNumber: 202,
    from: "Москва",
    to: "Екатеринбург",
    departure: "09:10",
    arrival: "20:45",
    travelTime: "11 часов 35 минут",
  },
  {
    trainNumber: 303,
    from: "Москва",
    to: "Казань",
    departure: "11:20",
    arrival: "15:45",
    travelTime: "4 часа 25 минут",
  },
  {
    trainNumber: 404,
    from: "Москва",
    to: "Нижний Новгород",
    departure: "12:30",
    arrival: "15:15",
    travelTime: "2 часа 45 минут",
  },
  {
    trainNumber: 505,
    from: "Москва",
    to: "Ростов-на-Дону",
    departure: "14:00",
    arrival: "19:30",
    travelTime: "5 часов 30 минут",
  },
  {
    trainNumber: 606,
    from: "Санкт-Петербург",
    to: "Москва",
    departure: "08:30",
    arrival: "14:00",
    travelTime: "5 часов 30 минут",
  },
  {
    trainNumber: 707,
    from: "Санкт-Петербург",
    to: "Новосибирск",
    departure: "10:45",
    arrival: "20:20",
    travelTime: "9 часов 35 минут",
  },
  {
    trainNumber: 808,
    from: "Санкт-Петербург",
    to: "Красноярск",
    departure: "11:50",
    arrival: "23:10",
    travelTime: "11 часов 20 минут",
  },
  {
    trainNumber: 909,
    from: "Санкт-Петербург",
    to: "Владивосток",
    departure: "13:15",
    arrival: "14:05",
    travelTime: "24 часа 50 минут",
  },
  {
    trainNumber: 1010,
    from: "Санкт-Петербург",
    to: "Хабаровск",
    departure: "14:30",
    arrival: "15:40",
    travelTime: "25 часов 10 минут",
  },
  {
    trainNumber: 1111,
    from: "Екатеринбург",
    to: "Москва",
    departure: "07:30",
    arrival: "18:00",
    travelTime: "10 часов 30 минут",
  },
  {
    trainNumber: 1212,
    from: "Екатеринбург",
    to: "Санкт-Петербург",
    departure: "08:45",
    arrival: "20:15",
    travelTime: "11 часов 30 минут",
  },
  {
    trainNumber: 1313,
    from: "Екатеринбург",
    to: "Казань",
    departure: "10:00",
    arrival: "15:15",
    travelTime: "5 часов 15 минут",
  },
  {
    trainNumber: 1414,
    from: "Екатеринбург",
    to: "Нижний Новгород",
    departure: "11:15",
    arrival: "15:00",
    travelTime: "3 часа 45 минут",
  },
  {
    trainNumber: 1515,
    from: "Екатеринбург",
    to: "Ростов-на-Дону",
    departure: "12:30",
    arrival: "19:00",
    travelTime: "6 часов 30 минут",
  },
  {
    trainNumber: 1616,
    from: "Красноярск",
    to: "Москва",
    departure: "09:00",
    arrival: "19:30",
    travelTime: "10 часов 30 минут",
  },
  {
    trainNumber: 1616,
    from: "Омск",
    to: "Москва",
    departure: "07:30",
    arrival: "15:00",
    travelTime: "7 часов 30 минут",
  },
  {
    trainNumber: 1656,
    from: "Тюмень",
    to: "Екатеринбург",
    departure: "12:45",
    arrival: "15:00",
    travelTime: "2 часов 15 минут",
  },
  {
    trainNumber: 3546,
    from: "Казань",
    to: "Санкт-Петербург",
    departure: "18:00",
    arrival: "22:15",
    travelTime: "4 часов 15 минут",
  },
  {
    trainNumber: 8136,
    from: "Москва",
    to: "Нижний Новгород",
    departure: "01:30",
    arrival: "04:45",
    travelTime: "3 часов 15 минут",
  },
];

const Cells = document.querySelectorAll(".cell");
const SearchInput = document.querySelector("#search");
const SearchButton = document.querySelector("#searchBtn");
const SelectDays = document.querySelector("#days");
const CountWords = document.querySelector(".searchCount");

let SearcText = "";
let SearchCount = 0;

SearchInput.addEventListener("input", (event) => {
  SearcText = event.target.value.toLowerCase();
});

function search(text) {
  SearcText = SearcText.replace("<", "");
  SearcText = SearcText.replace(">", "");
  let result = text.replace(
    new RegExp(words, "g"),
    "<div style='color:Red; display:inline;'>" + words + "</div>"
  );
  document.getElementById("container").innerHTML = result;
}

SearchButton.addEventListener("click", (event) => {
  SearchCount = 0;
  test(false);
  Cells.forEach((item) => {
    const cellTitle = item.querySelector(".cell-title").textContent;
    const itemText = item.innerHTML;
    if (SelectDays.value.toLowerCase() === cellTitle.toLowerCase()) {
      if (SearcText.length > 0) {
        SearcText = SearcText.replace("<", "");
        SearcText = SearcText.replace(">", "");
        let result = itemText.replace(new RegExp(SearcText, "gi"), (match) => {
          SearchCount++;
          return `<div style='color:Red; display:inline;'>${match}</div>`;
        });
        item.innerHTML = result;
      }
    }
  });
  renderCount();
});

const renderCount = () => {
  if (SearcText.length > 0)
    if (SearchCount) {
      CountWords.innerHTML = `<span>Количество повторений: ${SearchCount}</span>`;
    } else CountWords.innerHTML = `<span>Ничего не найдено</span>`;
};

const test = (isStart = true) => {
  for (let i = 0; i < Cells.length; i++) {
    const trainInfo = `
    <div class="trainInfo">
<div class="info">
  <h3>Номер поезда: ${trainSchedule[i].trainNumber}</h3>
</div>
<div class="info route"><h3>${
      trainSchedule[i].from + " - " + trainSchedule[i].to
    }</h3></div>
<div class="info">
  <h3>Отпр: ${trainSchedule[i].departure}</h3>
</div>
<div class="info">
  <h3>Приб: ${trainSchedule[i].arrival}</h3>
</div>
<div class="info"><h3>Время пути: </h3></div>
<div class="info"><h3>${trainSchedule[i].travelTime}</h3></div>
</div>
`;
    const StartTrain = `
    <div class="info-block">${trainInfo}</div>
`;
    if (isStart) Cells[i].innerHTML += StartTrain;
    else {
      let infoBlock = Cells[i].querySelector(".info-block");
      infoBlock.innerHTML = trainInfo;
    }
  }
};

test();
