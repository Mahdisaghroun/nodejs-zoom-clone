const videoGird=document.getElementById('video-gird')
console.log('ddd');
const MyVideo = document.createElement('video');
MyVideo.muted=true;
let MyVideoStream ;
navigator.mediaDevices.getUserMedia({
    video : true ,
    audio :true
}).then(stream=>{
    MyVideoStream=stream;
})
const addVideoStream =(video ,stream )=>{
    video.srcObject = stream ;
    video.addEventlistener('loadedmetadata',()=>{
        video.play();
    })
    VideoGrid.append(video);
}