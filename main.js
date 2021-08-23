Webcam.set({
    width: 360,
    height: 300,
    img_format: 'png',
    png_format: 90
});
camera= document.getElementById("camera");
Webcam.attach(camera);
function take_snapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML= "<img id='image' src='"+data_uri+"'>";
    })
}
console.log("ML5 Version:", ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1hTPrwxz0/modl.json", modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded is Working");
}