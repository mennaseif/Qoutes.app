var qoute =[
    {
        'qoute':"The best revenge is massive success.",
        'author':"--Frank Sinatra"
    },

    {
        'qoute':"It's not what happens to you, but how you react to it that matters.",
        'author':"--Epictetus"
    },

    {
        'qoute':"You miss 100% of the shots you don't take.",
        'author':"--Wayne Gretzy"
    },

    {
        'qoute':"Do not take life too seriously. You will not get out alive.",
        'author':"--Elbert Hubbard"
    },

    {
        'qoute':"It's not what happens to you, but how you react to it that matters.",
        'author':"--Epictetus"
    },

    {
        'qoute':"Resentment is like drinking poison and waiting for your enemies to die.",
        'author':"--Nelson Mandela"
    },

    {
        'qoute':"Be yourself; everyone else is already taken.",
        'author':"--Oscar Wilde"
    },
]

 function getQoutes(){
    var num = Math.floor(Math.random()*qoute.length)
    console.log(num);

    document.getElementById('qoute').innerHTML = qoute[num].qoute;
    document.getElementById('author').innerHTML = qoute[num].author;


 }