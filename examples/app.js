// Perform dom minipulation using NeoQuery 
const nq = new NEOQUERY();

nq.$(() => console.log('DOM has loaded'))

// get an element by id 
const btn = nq.$('#btn')
btn.on('click', () => nq.alert())
btn.text('click for an alert')
btn.css('background-color', 'red');

// get element by class name 
const div = nq.$('.some-div');
div.css({height: '50px', width: '150px', margin: '20px'})
div.css('background-color', 'red')

// get element by html tag
const title = nq.$('h1');
title.css('color', 'red');
title.css('background-color', 'black');
title.text('NeoQuery Title')

// loop through elements
nq.$('li').each(function(i) {
    if (i % 3 === 0) nq.$(this).css('color', 'green');
    else nq.$(this).css('color', 'orange');
});