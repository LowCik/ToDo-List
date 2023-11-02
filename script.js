function addTodoItem(currentID) {
  let handle = document.createElement("div");
  let item = document.createElement("textarea");

  let group = document.createElement("div");
  group.classList = "item-list";
  handle.classList = "handle";
  handle.innerHTML += `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 256 256"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M96 203.996A4.002 4.002 0 0 1 91.996 208H68.004A4.002 4.002 0 0 1 64 203.996v-23.992A4.002 4.002 0 0 1 68.004 176h23.992A4.002 4.002 0 0 1 96 180.004v23.992zm0-64A4.002 4.002 0 0 1 91.996 144H68.004A4.002 4.002 0 0 1 64 139.996v-23.992A4.002 4.002 0 0 1 68.004 112h23.992A4.002 4.002 0 0 1 96 116.004v23.992zm0-64A4.002 4.002 0 0 1 91.996 80H68.004A4.002 4.002 0 0 1 64 75.996V52.004A4.002 4.002 0 0 1 68.004 48h23.992A4.002 4.002 0 0 1 96 52.004v23.992zm64 0A4.002 4.002 0 0 0 164.004 80h23.992A4.002 4.002 0 0 0 192 75.996V52.004A4.002 4.002 0 0 0 187.996 48h-23.992A4.002 4.002 0 0 0 160 52.004v23.992zm0 64a4.002 4.002 0 0 0 4.004 4.004h23.992a4.002 4.002 0 0 0 4.004-4.004v-23.992a4.002 4.002 0 0 0-4.004-4.004h-23.992a4.002 4.002 0 0 0-4.004 4.004v23.992zm0 64a4.002 4.002 0 0 0 4.004 4.004h23.992a4.002 4.002 0 0 0 4.004-4.004v-23.992a4.002 4.002 0 0 0-4.004-4.004h-23.992a4.002 4.002 0 0 0-4.004 4.004v23.992z"
  />
</svg>`;
  item.placeholder = "Ecrire ici ...";
  item.cols = 40;
  item.rows = 4;

  group.appendChild(handle);
  group.appendChild(item);
  document.getElementById(currentID).appendChild(group);
} //rajoute un item dans la liste

function getTitle(){
  $(document).ready(function () {
    var val = $.trim($("textarea").val());
    if (val != "") {
        alert(val);
    }
});
}

function addTodoList() {
  const d = new Date();
  const randID = Math.random() * 1000000;

  const newList = document.createElement("ul");
  const titleHeader = document.createElement("div");
  const button = document.createElement("button");
  const title = document.createElement("h2");
alert("oui");
  title.innerText=getTitle();
  button.textContent = "+";
  newList.id = randID;
  newList["date-date"] = d.getDate();
  button.addEventListener("click", () => addTodoItem(randID));
  titleHeader.appendChild(title);
  titleHeader.appendChild(button);
  newList.appendChild(titleHeader);
  document.querySelector("main").after(newList);
} // rajoute une liste
