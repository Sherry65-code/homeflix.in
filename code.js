var his = "";
his = document.getElementById('main').innerHTML;

window.addEventListener('load' , ()=>{
document.getElementById('loader').style= "visibility: hidden";
// loggin();
});

function bottom_of_the()
{
    document.getElementById('main').innerHTML =     `<br>
    <video class="mainplayer" autoplay controls>
    <source src="https://sherry65-code.github.io/homeflix.source1/bottom_of_the.mp4"></source>
    </video>
    <br>
    <br>
    <br>
    <span class="videotitle">MISSIO - Bottom of the deep blue 
    sea</span>
    `;
}
function kaise_hua()
{
    document.getElementById('main').innerHTML =     `<br>
    <video class="mainplayer" autoplay controls>
    <source src="https://sherry65-code.github.io/homeflix.source1/kaise_hua.mp4"></source>
    </video>
    <br>
    <br>
    <br>
    <span class="videotitle">Kaise Hua - Vishal Mishra
    sea</span>
    `;
}
function backbut()
{
    document.getElementById('main').innerHTML = his;
}
function loggin()
{
    document.getElementById('login').style = "visibility:hidden;";
}