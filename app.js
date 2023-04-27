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
    show_loader();
    await sleep(2000);
    hide_loader();
    let won = computed_numbers[0] == num_1 && computed_numbers[1] == num_2 && computed_numbers[2] == num_3 && computed_numbers[3] == num_4 && computed_numbers[4] == num_5;

    if (won) {
        show_positive_message(`Vous avez gagner , vous remportez une somme de ${mise * 10} EURO`);
        return;
    }

    show_negative_message(`Vous avez Perdu les numeros gagnants sont ${computed_numbers}`);
   
}