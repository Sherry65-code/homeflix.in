var his = "";
his = document.getElementById('main').innerHTML;

window.addEventListener('load' , ()=>{
document.getElementById('loader').style= "visibility: hidden";
loggin();
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
function songs()
{
document.getElementById('main').innerHTML = `   <div class="banner">
<h1>Heoric Songs</h1></div><br><br><br><br>
<br><br>
<button class="display" onclick="bottom_of_the()">
    <img src="./images/MISSIO - Bottom to deep Sea.png" alt="" class="left">
    <button class="ans">
        MISSIO - Bottom of the deep blue sea (Youtube)
    </button>
            </button>




            <br><br>
<button class="display" onclick="kaise_hua()">
<img src="./images/kaise hua.png" alt="" class="left">
<button class="ans">
Kaise Hua - Vishal Mishra (Youtube)        </button>
        </button>



<!-- Songs start -->

    <br><br>
<button class="display" onclick="higher()">
<img src="./images/higher.png" alt="" class="left">
<button class="ans">
Lematire - Higher (Youtube)      </button>
</button>
<!-- End -->





<br><br>
<button class="display" onclick="trailer1()">
<img src="./images/trailer1.png" alt="" class="left">
<button class="ans">
HomeFlix - Trailer - Coming Soon     </button>
        </button>

<br><br>
<button class="display" onclick="download()">
<img src="https://wallpapercave.com/wp/wp5313405.jpg" alt="" class="left">
<button class="ans">
Invento Racing Legends - Click To Download Now     </button>
    </button>
`;
}