let myDiv = $('<div></div>');

myDiv.text('Click Here');

let body = $('body');
body.append(myDiv);

let input = $('#myInput');

let ul = $('<ul></ul>').appendTo(body);

myDiv.on('click', createLi);

let bootButton = $('#bootstrap-button');
bootButton.on('click', createLi);

function createLi(){
    $(`<li>${input.val()}</li>`).appendTo(ul);
    input.val('');
    console.log('Div Cliked!');
    console.log(input.val());
}