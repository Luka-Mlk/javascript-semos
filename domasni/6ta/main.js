const profileWrapper = document.querySelector(".profiles-wrapper");
console.log(profileWrapper);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      const personDiv = document.createElement("div");
      personDiv.classList.add("profile-clickable");
      const popup = document.createElement("a");
      popup.href = "";
      popup.id = `show-${person.id}`;
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
      console.log(person);
    })
  );
