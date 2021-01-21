
$('p').css('background', 'purple');
$('.first').toggleClass('hidden');

$('p').text('<strong>Hello world</strong>');

$('p').html('<strong>Hello world</strong>');
$('p').append('<strong>another</strong>');

// $('div').remove();

$('button').click(() => {
    $('.first').toggleClass('hidden');
})


console.log("JavaScript is working!");

let colors = ["orange", "blue" , "green", "purple"]

let post = {
    title: "My Post",
    description: "My First Post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 33;

if (age >= 18) {
    console.log("you're an adult!");
} else {
    console.log("you're a kid!");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(colors);

let myFunction = x => {
    console.log(x)
}

let greeter = name => {
    console.log (`Hello, ${name}`);
    if (name === "Adam") {
        console.log ("he is an adult");
    }
}

greeter ("Adam");
greeter ("Peter");
greeter ("Mate");
greeter ("Reka");
greeter ("Patrik");

colors.forEach(color => {
    console.log(color);
});

console.log("This is the end of our code");

