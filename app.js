// Recuperer les nombres entres par l'utilisateur et sa mise
var num_1 = -1;
var num_2 = -1;
var num_3 = -1;
var num_4 = -1;
var num_5 = -1;
let computed_numbers = [];
let mise = -1;

function get_mise(e) {
    mise = e.value;
}


function set_1_number(e) {
    num_1 = e.value;
}
function set_2_number(e) {
    num_2 = e.value;
}
function set_3_number(e) {
    num_3 = e.value;
}
function set_4_number(e) {
    num_4 = e.value;
}
function set_5_number(e) {
    num_5 = e.value;
}


// jongler et donner le resultat

function valid_number(num) {
    num = parseInt(num);
    return (num >= 0 && num <= 100) && !isNaN(num);
}

function jongler_proxy() {
    let can_proceed = valid_number(num_1) && valid_number(num_2) && valid_number(num_3) && valid_number(num_4) && valid_number(num_5);
    if (!can_proceed) {
        show_negative_message("Veuillez inserez des nombres entre 0 et 100!");
        return;
    }
    if (parseInt(mise) <= 0 || isNaN(parseInt(mise))) {
        show_negative_message("Veuillez inserez une mise valide!");
        return;
    }
    jongler();
}

function int_generator(max) {
    return Math.floor(Math.random() * max);
}

function jongler() {

    for (let i = 0; i <= 4; i++) {
        computed_numbers.push(int_generator(100));
    }
    check_for_the_match();
}

async function check_for_the_match() {
    show_winning_nums();
    $("#lotto_static").classList.remove("visible");
    $("#lotto_motion").classList.add("visible");
    $("#user_input").style.display = 'none';
    $("#jongler_btn").style.display = 'none';
    await sleep(6000);
    $("#lotto_static").classList.add("visible");
    $("#lotto_motion").classList.remove("visible");
    $("#retry_btn").classList.remove("none");
    $("#lotto_static").classList.add("none");

    show_user_nums();

    hide_loader();
    let won = computed_numbers[0] == num_1 && computed_numbers[1] == num_2 && computed_numbers[2] == num_3 && computed_numbers[3] == num_4 && computed_numbers[4] == num_5;

    if (won) {
        $("#win").classList.remove("none");
        $("#total_gain").innerHTML = parseInt(mise) * 10;
    } else {
        $("#lose").classList.remove("none");
    }

}

function show_user_nums() {

    $("#user_numeros").innerHTML = `
      <p class="tac">Voici vos numeros </p>
      <div class="row g8 winning_num fadeFromBottom">
         <div style="background-image: url(images/1.png);">${num_1}</div>
        <div style="background-image: url(images/3.png);">${num_2}</div>
        <div style="background-image: url(images/4.png);">${num_3}</div>
        <div style="background-image: url(images/5.png);">${num_4}</div>
        <div style="background-image: url(images/6.png);">${num_5}</div>
      </div>
      
    `;

    $("#user_numeros").classList.remove("none");
}

// timing show
async function show_winning_nums() {
    $("#winning_num_wrapper").classList.remove("none");
    for (const num of computed_numbers) {
        await sleep(1000);
        let image_index = int_generator(8);
        let div = document.createElement("div");
        div.className = "scaleIn";
        div.style = `background-image: url(images/${image_index}.png);`;
        div.innerHTML = num;
        $("#winning_num").appendChild(div);
    }
}

function reload() {
    window.location.reload();
}