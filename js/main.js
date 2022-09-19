"use strict";

const gettingUsersInfo = async function () {
  const fetchingUsers = await fetch("https://dummyjson.com/users").then(response => response.json()).then(data => {
    const dataUsers = data.users;

    console.log(dataUsers);
    dataUsers.forEach(element => {
      const wrapp = $(".wrapp");
      var card = crElement("div", " card p-2 mb-3 mt-3", `
      <img src="${element.image}" class="card-img-top cimg pt-0" alt="rasm">
  <div class="card-body">
   <span class=" d-flex"> <h5 class="card-title">${element.firstName}</h5><h5 class="card-title ms-2 mb-3">${element.lastName}</h5></span>
    <p class="card-text"><strong>Email:  </strong>${element.email}</p>
    <p class="card-text"><strong>Phone:  </strong>${element.phone}</p>
    <p class="card-text"><strong>Domain:  </strong>${element.domain}</p>
   <span class="hidee info_text_hide"><p class="card-text "><strong>${element.userAgent}</strong></p>
   <p class="card-text mb-3">${element.university}</p></span>
    <button class="btn btn-primary more_btn">More info</button>
  </div>`);
      card.dataset.id = element.id;
      wrapp.appendChild(card);

    

    });
    let elBtn = document.querySelectorAll(".more_btn");
    let fullinfo = document.querySelectorAll(".hidee");
    for (let index = 0; index < elBtn.length; index++) {
      console.log(elBtn[index]);
      elBtn[index].addEventListener("click", () => {
        
        fullinfo[index].classList.toggle("info_text_hide");
      });
    }

    //     let moree = $a(".moree");

    //     moree.forEach((btn) => {
    //       var btnn = btn
    //       btnn.addEventListener("click", (e)=>{
    //  var hidenText=$(".hidee");
    //  hidenText.classList.toggle("info_text_hide")
    //       })
    //     });



  });
  // fetchingUsers()
};

//  
gettingUsersInfo()






