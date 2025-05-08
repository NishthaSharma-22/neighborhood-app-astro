const text = 'your journey through space begins now...'
let i=0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}
window.onload=typeWriter;
