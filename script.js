// API theke button k anar jonno ei function
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((datas) => displayLesson(datas.data));
};
loadLessons();

const displayLesson = (lessons) => {  //lessons -> array of object receive kortese 5nbr line theke
  // 1.get the container & empty
  const levelContainer = document.getElementById("lavel-container");
  levelContainer.innerHTML = "";
  // 2.get into every lessons
  for (let lesson of lessons) {
    // 3.create Element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick = 'loadLevelWord(${lesson.level_no})' class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> lesson - ${lesson.level_no}</button>
    `;
    // 4.append into container
    levelContainer.append(btnDiv);
  }
};



//lesson e click korle API theke leson wise data anar jonno ei fuction go 18 nbr line button Onclick = loadLeavelWord()
const loadLevelWord = (lesson_id) => {
  // console.log(lesson_id);
  const url = `https://openapi.programming-hero.com/api/level/${lesson_id}`; //bactik reason dynamic
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data)); //.data eita holo API er
};

loadLevelWord();

const displayLevelWord = (lessonWord) => {
  // console.log(lessonWord);
  // 1.get the container & empty
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  // 2.get into every lessons here we use ForEach Loop
  lessonWord.forEach((element) => {
    console.log(element);
    // 3.create Element
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl text-center shadow-sm py-5 px-3 space-y-4">
            <h2 class="font-bold text-2xl">${element.word}</h2>
            <p class="font-medium">Meaning/Pronunciation</p>
            <div class="font-medium font-bangla text-xl">
                "${element.meaning}/${element.pronunciation}"
            </div>
            <div class="flex justify-between items-center">
                <button class="btn bg-sky-100 hover:bg-sky-300"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-sky-100 hover:bg-sky-300"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `;

        wordContainer.append(card);
  });
};
