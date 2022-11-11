"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const log = console.log;
const resEle = document.querySelector(".results");
const input = document.querySelector("input");
const show = document.querySelector(".show");
let users = [];
show === null || show === void 0 ? void 0 : show.addEventListener('click', getData);
//====================================================================
// ==== Show Random People
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://randomuser.me/api?results=51");
        const data = yield res.json();
        const persons = yield data.results;
        resEle.innerHTML = "";
        persons.forEach((person) => {
            let tempEle = document.createElement("div");
            tempEle.className = "user";
            // Build the user markup
            tempEle === null || tempEle === void 0 ? void 0 : tempEle.innerHTML = `
        <img src=${person.picture.medium} >
        <div class="text">
            <h4>${person.name.first} ${person.name.last}</h4>
            <p><span class="location"><small>${person.location.country}, ${person.location.state}</small></span></p>
            <p class="email"><span>${person.email}</span></p>
        </div>`;
            users.push(tempEle);
            resEle === null || resEle === void 0 ? void 0 : resEle.appendChild(tempEle);
        });
    });
}
// getData()
//====================================================================
// ==== Filter People through the Input Field ========================
input === null || input === void 0 ? void 0 : input.addEventListener("input", e => {
    users.forEach(user => {
        if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            user.classList.remove("hide");
        }
        else {
            user.classList.add('hide');
        }
    });
});
// =======================================================================================================
// =======================================================================================================
// =======================================================================================================
// const resDiv = document.querySelector(".results")
// const getData = async () => {
//     const res = await fetch("https://randomuser.me/api?results=50")
//     const data = await res.json();
//     let resArr: string[]  = [];
//     let resp: string;
//     data.results.forEach((item => {
//         resp += `
//         <img src=${item.picture.large} alt=${item.name.first} />
//         <div class="user__info">
//             <h3 class="title">${item.name.first} ${item.name.last}
//         </div>
//         `
//     })
//     resDiv?.appendChild(resp)
//     log(resDiv)
// } 
// getData();
// // const result = document.createElement("div")
// //  result.innerHTML = `
// // resArr.push(result)
// // log(resArr);
// // resDiv?.innerHTML = resArr;
// // log(data.results)
