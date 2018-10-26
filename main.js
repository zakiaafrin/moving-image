var button = document.querySelector('.start');
var matrix = document.querySelector('#matrix');
var size = 30;
var past_i = 0;
var past_j = 0;

var table = new Array(size);
for (var i = 0; i < size; i++) {
    table[i] = new Array(size).fill(" &nbsp; ");
}

function clickButton() {
    button.style.visibility = 'hidden';
    matrix.innerHTML = pre_table();
    setTimeout(() => {
        var now_i = 15;
        var now_j = 15;
        table[past_i][past_j] = " &nbsp; ";
        now_i += Math.floor(Math.random() * 2);
        now_j += Math.floor(Math.random() * 2);
        table[now_i][now_j] = `<img src = "pic.png" style = "width:10vw; height:28vh;"></img>`;
        past_i = now_i;
        past_j = now_j;
        clickButton();
    }, 1000);
}

function pre_table() {
    var result = [];
    for (var k = 0; k < size; k++) {
        result += table[k].join(" &nbsp; ") + '<br/>';
    }
    return result;
}

button.addEventListener('click', function (e) {
    clickButton();
})