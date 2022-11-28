"use strict";
const profileWrapper = document.querySelector(".profiles-wrapper");
// console.log(profileWrapper);
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) =>
//     json.forEach((person) => {
//       const personDiv = document.createElement("div");
//       personDiv.classList.add("profile-clickable");
//       personDiv.id = person.id;
//       const popup = document.createElement("a");
//       popup.href = "";
//       popup.id = `show-${person.id}`;
//       popup.classList.add("popup");
//       popup.innerHTML = "View profile";
//       const profileImg = document.createElement("img");
//       profileImg.src = "img/userProfile.png";
//       const userName = document.createElement("h2");
//       userName.innerHTML = person.name;
//       personDiv.appendChild(popup);
//       personDiv.appendChild(profileImg);
//       personDiv.appendChild(userName);
//       profileWrapper.appendChild(personDiv);
//       // console.log(person);
//     })
//   );
async function loadPersons() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((person) => {
    console.log(person);
    const personDiv = document.createElement("div");
    personDiv.classList.add("profile-clickable");
    // personDiv.id = person.id;
    const popup = document.createElement("button");
    popup.id = person.id;
    popup.onclick = function () {
      const userInfo = document.getElementById("userPopup");
      userInfo.classList.remove("hidden");
      const x = document.createElement("h1");
      x.innerHTML = "X";
      x.style =
        "user-select:none; color:white; font-size:40px; text-align:right;";
      x.onclick = function () {
        userInfo.classList.add("hidden");
        document.getElementById("profiles-wrapper").style.filter = "none";
      };
      userInfo.appendChild(x);
      const personIMG = document.createElement("img");
      personIMG.src = "img/userProfile.png";
      userInfo.appendChild(personIMG);
      const personName = document.createElement("h4");
      personName.innerHTML = "Name: " + person.name;
      userInfo.appendChild(personName);
      const personUser = document.createElement("h4");
      personUser.innerHTML = "Username: " + person.username;
      userInfo.appendChild(personUser);
      const personEmail = document.createElement("h4");
      personEmail.innerHTML = "Email: " + person.email;
      userInfo.appendChild(personEmail);
      const personCity = document.createElement("h4");
      personCity.innerHTML = "City: " + person.address.city;
      userInfo.appendChild(personCity);
      const personStreet = document.createElement("h4");
      personStreet.innerHTML = "Street: " + person.address.street;
      userInfo.appendChild(personStreet);
      const website = document.createElement("h4");
      website.innerHTML = "Website: " + person.website;
      userInfo.appendChild(website);
      document.getElementById("profiles-wrapper").style.filter = "blur(1px)";
    };
    popup.classList.add("popup");
    popup.innerHTML = "View profile";
    const profileImg = document.createElement("img");
    profileImg.src = "img/userProfile.png";
    const userName = document.createElement("h2");
    userName.innerHTML = person.name;
    personDiv.appendChild(popup);
    personDiv.appendChild(profileImg);
    personDiv.appendChild(userName);
    profileWrapper.appendChild(personDiv);
    // console.log(person);
  });
}
loadPersons();
// Obid da postavam na sekoe kopje onclick funkcija
// async function countPersons() {
//   const popup = document.getElementsByClassName("popup");
//   for (let i = 0; i < popup.length; i++) {
//     popup.onclick = "show()";
//   }
// }
