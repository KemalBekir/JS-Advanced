function solve() {
    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let date = document.querySelector("#date");
    let addButton = document.querySelector("#add");
    let section = document.querySelectorAll("section");
  
    let openDiv = section.item(1).querySelectorAll("div").item(1);
    let progresDiv = section.item(2).querySelectorAll("div").item(1);
    let finishDiv = section.item(3).querySelectorAll("div").item(1);
  
    addButton.addEventListener("click", function (e) {
      e.preventDefault();
  
      let taskInput = task.value;
      let descriptionInput = description.value;
      let dateInput = date.value;
  
      if (taskInput !== "" && descriptionInput !== "" && dateInput !== "") {
        let article = document.createElement("article");
  
        let h3 = ce("h3", taskInput);
        let p1 = ce("p", `Description: ${descriptionInput}`);
        let p2 = ce("p", `Due Date: ${dateInput}`);
        let div = ce("div", "", "flex");
  
        let startBtn = ce("button", "Start", "green");
        let deleteBtn = ce("button", "Delete", "red");
        let finishBtn = ce("button", "Finish", "orange");
  
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        openDiv.appendChild(article);
  
        startBtn.addEventListener("click", function () {
          progresDiv.appendChild(article);
          startBtn.remove();
          div.appendChild(finishBtn);
        });
  
        deleteBtn.addEventListener("click", function () {
          article.remove();
        });
  
        finishBtn.addEventListener("click", function () {
          finishDiv.appendChild(article);
          div.remove();
        });
      }
    });
  
    function ce(el, text, className, id) {
      let e = document.createElement(el);
      if (text) {
        e.textContent = text;
      }
      if (className) {
        e.classList = className;
      }
      if (id) {
        e.id = id;
      }
      return e;
    }
  }

// function solve() {
//     let input = document.querySelector('#task');
//     let text = document.querySelector('#description');
//     let date = document.querySelector('#date');
//     let orangeSectionDiv = document.getElementsByTagName('section')[1].children[1];
//     let yellowSectionDiv = document.getElementsByTagName('section')[2].children[1];
//     let greenSectionDiv = document.getElementsByTagName('section')[3].children[1];
//     let addBtn = document.querySelector('#add');

//     addBtn.addEventListener('click', addTask);


//     function addTask(e) {
//         e.preventDefault();
//         if (input.value != '' && text.value != '' && date.value != '') {
//             let articleEl = document.createElement('article');
//             articleEl.innerHTML = `<h3>${input.value}</h3>
//          <p>Description: ${text.value}</p>                   
//          <p>Due Date: ${date.value}</p>
//          <div class = "flex">
//             <button class = "green">Start</button>
//             <button class = "red">Delete</button>
//          </div>                   
//         `;

//             orangeSectionDiv.appendChild(articleEl);

//             input.value = '';
//             text.value = '';
//             date.value = '';
//         }
//     }
// }



