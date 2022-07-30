const model = [
  {
    id: 1,
    name: "Iron Man",
    src: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg",
    metaData: "Iron-man",
    active: "active",
    show: "show",
    counter: 0,
  },
  {
    id: 2,
    name: "Doctor Strange",
    src: "https://sm.ign.com/ign_mear/news/d/doctor-str/doctor-strange-in-the-multiverse-of-madness-continues-its-re_2emp.jpg",
    metaData: "doctor-strange",
    counter: 0,
  },
  {
    id: 3,
    name: "Thor",
    src: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
    metaData: "Thor",
    counter: 0,
  },
  {
    id: 4,
    name: "Star Lord",
    src: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/Star-Lord_AIW_Profile.jpg",
    metaData: "Star-Lord",
    counter: 0,
  },
];

const controller = {
  init: function () {
    view.renderInit(model);
  },
  imgEventHandler: function (eventTarget) {
    if (eventTarget.tagName === "IMG") {
      model[eventTarget.id - 1].counter++;
      view.updateCounter(
        model[eventTarget.id - 1].id,
        model[eventTarget.id - 1].counter
      );
    }
  },
};

const view = {
  renderInit: function (data) {
    const tabs = document.getElementById("v-pills-tab");
    const contentContainer = document.getElementById("v-pills-tabContent");
    for (let i = 0; i < data.length; i++) {
      let buttonToInsert = `<button
    class="nav-link ${data[i].active}"
    id="v-pills-${data[i].metaData}-tab"
    data-bs-toggle="pill"
    data-bs-target="#v-pills-${data[i].metaData}"
    type="button"
    role="tab"
    aria-controls="v-pills-${data[i].metaData}"
    aria-selected="true"
  >
  ${data[i].name}
  </button>`;

      let contentToInsert = ` <div
      class="tab-pane fade ${data[i].active} ${data[i].show}"
      id="v-pills-${data[i].metaData}"
      role="tabpanel"
      aria-labelledby="v-pills-${data[i].metaData}-tab"
    >
      <img
        src=${data[i].src}
        alt="${data[i].name} "
        id ="${data[i].id}"
      />
      <h3 class="my-2" id ="name-${data[i].id}">${data[i].name}</h3>
      <h5 id ="count-${data[i].id}">Counter: ${data[i].counter}</h5>
    </div>`;
      tabs.insertAdjacentHTML("beforeend", buttonToInsert);
      contentContainer.insertAdjacentHTML("beforeend", contentToInsert);
    }
    contentContainer.addEventListener("click", function (e) {
      controller.imgEventHandler(e.target);
    });
  },
  updateCounter: function (id, counter) {
    document.getElementById(`count-${id}`).innerText = `Counter: ${counter}`;
  },
};
controller.init();
