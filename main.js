document.getElementById('Asia').onclick = asia
document.getElementById('Africa').onclick = africa
document.getElementById('NAmerica').onclick = Namerica
document.getElementById('SAmerica').onclick = Samerica
document.getElementById('Antartica').onclick = antartica
document.getElementById('Europe').onclick = europe
document.getElementById('Australia').onclick = australia


function asia()  {
    document.getElementById('video').src = "https://www.youtube.com/embed/iZttVVkdm6c?controls=0&start=10&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';
}
function africa()  {
    document.getElementById('video').src = "https://www.youtube.com/embed/Ee0Qh_nIoHw?controls=0&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';

}
function Namerica() {
    document.getElementById('video').src = "https://www.youtube.com/embed/rqqoBKfe1E4?controls=0&autoplay=1&mute=1";
    document.getElementById('video-container').style.display ='block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';


}
function Samerica() {
    document.getElementById('video').src = "https://www.youtube.com/embed/gghgYaYeG_M?controls=0&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';

}
function antartica() {
    document.getElementById('video').src = "https://www.youtube.com/embed/F8rzb4nQs5I?controls=0&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';

}
function europe() {
    document.getElementById('video').src = "https://www.youtube.com/embed/sBYtr8vfA2M?controls=0&amp;start=10&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';

}
function australia() {
    document.getElementById('video').src = "https://www.youtube.com/embed/4fYOANcoDSI?controls=0&autoplay=1&mute=1";
    document.getElementById('video-container').style.display = 'block';
    document.querySelectorAll('.vanish').forEach(x=>x.style.display = 'none');
    document.querySelector('.appear').style.display = 'block';

}

