console.log("Welcome to Fevermusic");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));




let songs = [
    {songName: "Aankhon me teri", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Tere Naam", filepath: "song/1.mp3", coverpath: "covers/2.jpg"},
    {songName: "Rab kare tujhko", filepath: "song/1.mp3", coverpath: "covers/3.jpg"},
    {songName: "Dard-E-Disco", filepath: "song/1.mp3", coverpath: "covers/4.jpg"},
    {songName: "Durga hai meri maa", filepath: "song/1.mp3", coverpath: "covers/5.jpg"},
    {songName: "Main Agar Kahoon", filepath: "song/1.mp3", coverpath: "covers/6.jpg"},
    {songName: "Tu cheez badi hai mast", filepath: "song/1.mp3", coverpath: "covers/7.jpg"},
    {songName: "Rata Lambiyan", filepath: "song/1.mp3", coverpath: "covers/8.jpg"},
    {songName: "Sami Sami", filepath: "song/1.mp3", coverpath: "covers/9.jpg"},
    {songName: "Srinivalli", filepath: "song/1.mp3", coverpath: "covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()

//Handle Play/Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //Update Seekbar (Kitna gaana chal chuka hai uske liye)
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;  //value percentage m aayegi
});

//Progress bar k change hone ke correponding audio m change
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})

//Iska kaam h jitne bhi pause wale button side m hai unhe play bnade
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
        
    })
   
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{ //e woh h jispe click hua
        makeAllPlays();
        songIndex = parseInt(e.target.id); //jis song pe click hua h uska id
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;   //audioelement m click hua song aa gya.Song update
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0; //kyonki naya song starting se chalega isliye currentTime 0 set kro
        audioElement.play(); //us gaane ko play kro
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9)
    {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;   //audioelement m click hua song aa gya.Song update
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; //kyonki naya song starting se chalega isliye currentTime 0 set kro
    audioElement.play(); //us gaane ko play kro
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0)
    {
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;   //audioelement m click hua song aa gya.Song update
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; //kyonki naya song starting se chalega isliye currentTime 0 set kro
    audioElement.play(); //us gaane ko play kro
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})