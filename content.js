const array = [
    "hello", 
    "hi", 
    "baby", 
    "ki koro tumi", 
    "babu khaiso ?", 
    "kemon acho ?", 
    "kemon lagche",
    "Guli korbo kintu",
    "vabi valo ache ?",
    "kotha bondho", 
    "arey baba", 
    "ki obostha", 
    "ki jani",  
    "bhalo achi", 
    "amake chera",  
    "chol pagla", 
    "ki khobor?", 
    "oi ja", 
    "ki bhai?", 
    "ki re?", 
    "jato shala vag", 
    "gadha tui", 
    "jhogra hobe?", 
    "chasmish kothakar", 
    "kichu nai", 
    "dure ja"
];

const random = Math.floor(Math.random() * array.length);

const url = "https://cataas.com/cat";

const image = document.getElementById("cat");
image.src = url;

const text = document.getElementById("text");
text.innerHTML = decodeURI(array[random]);