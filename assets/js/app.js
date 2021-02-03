let showdata = document.querySelector("#showdata");
let container = document.querySelector("#container");
let posts = document.querySelector("#block");
let list = document.querySelector(".information");
let counter = 0;

showdata.addEventListener("click", function () {
  async function getResponse() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${counter}&_end=${counter + 6}`);
    let content = await response.json();


    let firstRow = document.createElement("div");
    firstRow.className = "information";
    let secondRow = document.createElement("div");
    secondRow.className = "information";
    let thirdRow = document.createElement("div");
    thirdRow.className = "information";
    let roodElement = document.createElement("div");
    roodElement.className = "rood-element";
    for (let i = 0; i < 6; i++) {
      if (i <= 1) {
        firstRow.innerHTML += `
      <div class="block">          
      <div class="block-info">
      <div class="block-title">
        ${content[i].title}
      </div>
      <div class="block-text">
      ${content[i].body}
      </div>
      <div class="block__read-more">Read More</div>
      </div>
      </div>
    `;
      }
      if (i > 1 && i <= 3) {
        secondRow.innerHTML += `
    <div class="block">          
    <div class="block-info">
    <div class="block-title">
      ${content[i].title}
    </div>
    <div class="block-text">
    ${content[i].body}
    </div>
    <div class="block__read-more">Read More</div>
    </div>
    </div>
  `;
      }
      if (i > 3 && i <= 5) {
        thirdRow.innerHTML += `
    <div class="block">          
    <div class="block-info">
    <div class="block-title">
      ${content[i].title}
    </div>
    <div class="block-text">
    ${content[i].body}
    </div>
    <div class="block__read-more">Read More</div>
    </div>
    </div>
  `;
      }
    }

    roodElement.append(firstRow);
    roodElement.append(secondRow);
    roodElement.append(thirdRow);

    showdata.before(roodElement);
    counter += 6;
  }
  getResponse();
});
