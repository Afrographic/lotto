function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function show_positive_message(message) {
    let info = document.querySelector(".info");
    info.firstElementChild.src = "images/check.svg";
    info.lastElementChild.innerHTML = message;
    info.classList.add("info_visible");
    info.classList.remove("negative");
    info.classList.add("positive");
    await sleep(4000);
    info.classList.remove("info_visible");
}


async function show_negative_message(message) {
    let info = document.querySelector(".info");
    info.firstElementChild.src = "images/error.svg";
    info.lastElementChild.innerHTML = message;
    info.classList.add("info_visible");
    info.classList.remove("positive");
    info.classList.add("negative");
    await sleep(4000);
    info.classList.remove("info_visible");

    this.hide_loader();
}


function show_loader() {
    let loader = document.querySelector("#ankh_api_loader");
    loader.classList.add("active");
}

function hide_loader() {
    let loader = document.querySelector("#ankh_api_loader");
    loader.classList.remove("active");
}
