const log = console.log;
const resEle = document.querySelector(".results");
const input = document.querySelector("input");
const show = document.querySelector(".show")
let users = [];

show?.addEventListener('click', getData)


//====================================================================
// ==== Show Random People
async function getData() {
    const res = await fetch("https://randomuser.me/api?results=51")
    const data = await res.json();
    const persons = await data.results;
    resEle.innerHTML = "";
    
    persons.forEach((person: any) => {
        let tempEle = document.createElement("div");
        tempEle.className = "user"
        // Build the user markup
        tempEle?.innerHTML = `
        <img src=${person.picture.medium} >
        <div class="text">
            <h4>${person.name.first} ${person.name.last}</h4>
            <p><span class="location"><small>${person.location.country}, ${person.location.state}</small></span></p>
            <p class="email"><span>${person.email}</span></p>
        </div>`;
        users.push(tempEle)
        resEle?.appendChild(tempEle);
    }) 
}

// getData()


//====================================================================
// ==== Filter People through the Input Field ========================

input?.addEventListener("input", e => {
    users.forEach(user => {
        if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            user.classList.remove("hide")
        } else {
            user.classList.add('hide')
        }
    })

})




































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