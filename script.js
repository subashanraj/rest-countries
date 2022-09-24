var res = fetch("https://restcountries.com/v3.1/all")
   // console.log(res);
res.then((data) => data.json()).then((data1) => {
    console.log(data1)
    result = data1;
    let ans = []
    for (let i = 0; i < data1.length; i++) {
        if (result[i].cioc === "AFG" || result[i].cioc === "ALB" || result[i].cioc === "IND")
            ans.push(result[i])

    }
    let lat1 = ans[0].latlng[0];
    let long1 = ans[0].latlng[1]
    console.log(lat1)
    console.log(long1)

    let lat2 = ans[1].latlng[0];
    let long2 = ans[1].latlng[1]
    console.log(lat2)
    console.log(long2)

    let lat3 = ans[2].latlng[0];
    let long3 = ans[2].latlng[1]
    console.log(lat3)
    console.log(long3)

    //    // console.log(ans);

    //     //console.log(result[3].flags.png)
    document.getElementById("title1").innerHTML = ans[0].name.common;
    document.getElementById("flag1").src = ans[0].flags.png;
    document.getElementById("name1").innerHTML = ans[0].capital;
    document.getElementById("region1").innerHTML = ans[0].region;
    document.getElementById("cd1").innerHTML = ans[0].cioc;
    document.getElementById("name1").innerHTML = ans[0].capital;


    document.getElementById("title2").innerHTML = ans[1].name.common;
    document.getElementById("flag2").src = ans[1].flags.png;
    document.getElementById("name2").innerHTML = ans[1].capital;
    document.getElementById("region2").innerHTML = ans[1].region;
    document.getElementById("cd2").innerHTML = ans[1].cioc;
    document.getElementById("name2").innerHTML = ans[1].capital;


    document.getElementById("title3").innerHTML = ans[2].name.common;
    document.getElementById("flag3").src = ans[2].flags.png;
    document.getElementById("name3").innerHTML = ans[2].capital;
    document.getElementById("region3").innerHTML = ans[2].region;
    document.getElementById("cd3").innerHTML = ans[2].cioc;
    document.getElementById("name3").innerHTML = ans[2].capital;




    let button = document.querySelectorAll('button')


    button.addEventListener("click", weather);
    function weather() {
        const res2 = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat2}&lon=${long2}&appid=d2e8b26f4c431c3e787138578a2f06c7&units=metric`);
        res2.then((data) => data.json()).then((data2) => {
            console.log(data2)
            console.log(data2.base)
            //document.getElementById("hidden").innerHTML = ""
            let cards = document.querySelector('.weather-wrapper')
            //create card
            let row = document.createElement("div")
            row.setAttribute("class", "row g-3 container")
            cards.append(row)

            let Column = document.createElement("div")
            Column.setAttribute("class", "col col-lg-4 col-sm-12")
            row.append(Column)

            let card = document.createElement("div")
            card.setAttribute("class", "card h-100")
            card.setAttribute("style", "width: 18rem;")
            Column.append(card)

            let body = document.createElement("div")
            body.setAttribute("class", "card-body text-center")
            card.append(body)

            let list1 = document.createElement("h6")
            list1.innerText = `Weather : ${data2.weather[0].main}`
            body.append(list1)

            let list2 = document.createElement("h6")
            list2.innerText = `Temperature : ${data2.main.temp}`
            body.append(list2)

            let list3 = document.createElement("h6")
            list3.innerText = `Wind Speed : ${data2.wind.speed}`
            body.append(list3)

            let button1 = document.createElement("button")
            button1.setAttribute("class", "btn btn-primary")
            button1.innerText = "Reset"
            body.append(button1)

            //Location reset
            button1.addEventListener("click", () => {
                location.reload()
            })
        })


    }
})