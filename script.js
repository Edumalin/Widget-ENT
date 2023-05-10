fetch("./data.json")
    .then(result => result.json())
    .then(data => {
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
                                <div class="description">${slide.description}</div>
                                <div class="type">
                                    <i class="fa-solid fa-video"></i>
                                    ${slide.type}
                                </div>
                            </div>
                        </div>
                    </div>`;
                    dot += `<div class="dot"></div>`
        }
        document.querySelector(".diapo").innerHTML = diapo ;

        document.querySelector(".diapo").innerHTML += `<div class="dot-list">${dot}</div>`;

        document.querySelector(".diapo .slide").classList.add("active");
        play();
    });

    function play(){

    }
