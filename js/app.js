let elForm = document.querySelector(".hero__form");
let elName = document.querySelector(".name__input");
let elFirstName = document.querySelector(".first__input");
let elNumber = document.querySelector(".number__input");
let elPeople = document.querySelector(".people__input");
let elList = document.querySelector(".list");
let arr = [];

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let obj = {
    name: elName.value,
    firstName: elFirstName.value,
    number: elNumber.value,
    people: elPeople.value,
  }

  arr.push(obj);
  render(arr)
})

function render (arr) {
  elList.innerHTML = null;

  arr.forEach(element => {
      elList.innerHTML += `
        <li class="list-item bg-danger bg-opacity-50 w-50 mx-auto mb-3 p-4 border-3">
          <p class="h4">Ismi: ${element.name}</p>
          <p class="h4">Familyasi: ${element.firstName}</p>
          <p class="h4">Nomeri: ${element.number}</p>
          <p class="h4">Kimligi: ${element.people}</p>
        </li>
      `
  });
}