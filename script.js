let count = 0;
let translate = 0;
fetch("./data.json")
    .then(result => result.json())
    .then(data => {
        count = data.length;
        let dot = "";
        let diapo = "";
        for (let slide of data) {
            diapo += `<div class="slide">
                        <div class="title">${slide.title}</div>
                        <div class="content">
                            <div class="picture">
                                <img src="${slide.image}">
                            </div>
                            <div class="details">
                                <div class="description" title="${slide.description}">${slide.description}</div>
                                <div class="type">
                                    ${getType(slide.type)}
                                </div>
                            </div>
                        </div>
                        ${getButton(slide.type)}
                        
                    </div>`;
                    dot += `<div class="dot"></div>`
        }
        document.querySelector(".diapo").innerHTML = diapo ;

        document.querySelector(".diapo").innerHTML += `<div class="dot-list">${dot}</div>`;

        document.querySelector(".diapo .dot").classList.add("active");
        play();
    });

    function play(){
        setInterval(()=>{
            next();
        },5000);
    }

    function next(){
        if((count-1)*400 == translate){
            translate = 0;
        }else{
            translate += 400;
        }
        document.querySelectorAll(".slide").forEach(slide => slide.style.transform = `translate(-${translate}px,0px)`);
        document.querySelector(`.dot.active`).classList.remove("active");
        document.querySelector(`.dot:nth-child(${translate/400+1})`).classList.add("active");
    }

    function getType(type){
        switch(type){
            case "webinaire":
                return `<i class="fa-solid fa-video"></i>${type}`;
                break;
            case "raccourcis":
                return "";
                break;

        }
    }

    function getButton(type){
        switch(type){
            case "webinaire":
                return `<a class="subscribe" href="/inscription.html" target="_blank">Je participe</a>`;
                break;
            case "raccourcis":
                return `<a class="join" href="/inscription.html" target="_blank">Je découvre</a>`;
                break;

        }
        
    }