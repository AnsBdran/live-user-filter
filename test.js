const log = console.log;
const resEle = document.querySelector(".results")

async function getData() {
    // log(resEle)
    const res = await fetch("https://randomuser.me/api?results=50")
    const data = await res.json();
    const persons = await data.results;
     persons.forEach((person: any) => {
         let ele = document.createElement("div");
         ele.innerHTML = `<img src=${person.picture.large} ><h2>${person.name.first}</h2>`
        //  log(ele)
         resEle?.appendChild(ele)
        }) 
        // for (let person of persons) {
            //     let ele = document.createElement("div");
            //     ele.innerHTML = `<img src=${person.picture.large} /><h2>${person.name.first}</h2>`
            //     log(ele)
            //     resEle?.appendChild(ele)
            // }
            resEle?.innerHTML = "NNNNNNNN"
        }
// }


getData()