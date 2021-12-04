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
    </span>
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
    </span>
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
function higher()
{
    document.getElementById('main').innerHTML =     `<br>
    <video class="mainplayer" autoplay controls>
    <source src="https://sherry65-code.github.io/homeflix.source1/higher.mp4"></source>
    </video>
    <br>
    <br>
    <br>
    <span class="videotitle">Lemaitre - Higher
    </span>
    `;
}
function trailer1()
{
    document.getElementById('main').innerHTML =     `<br>
    <video class="mainplayer" autoplay controls>
    <source src="https://sherry65-code.github.io/homeflix.source1/trailer1.mp4"></source>
    </video>
    <br>
    <br>
    <br>
    <span class="videotitle">HomeFlix - Trailer - Coming Soon
    </span>
    `;
}
function download()

{
    window.open('https://sherry65-code.github.io/legends.com');
}