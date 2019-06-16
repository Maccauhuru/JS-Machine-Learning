// Your code will go here
let mobilenet;
let puffin;
// open up your console - if everything loaded properly you should see 0.3.0
console.log('ml5 version:', ml5.version);

function setup(){
    createCanvas(400, 400);
    fill(0);
    mobilenet = ml5.imageClassifier('MobileNet',modelReady);
    puffin = createImg('images/puffin.jpg',imageReady)
    document.getElementsByTagName("img")[0].setAttribute("class", "hideimg");

}

function modelReady(){
    console.log('Model is ready for use!');
    mobilenet.predict(puffin , results);
}

function imageReady(){
    image(puffin,0,0 ,width,height);
}


function results(error,data){
if(error){
    console.error(error)
} else{
    console.log(data);
    let label =
        `
    Name :  
    
    Confidence:${data[0].confidence}
    `;
    fill(0);
    textSize(20);
    text(label,10);
    createDiv(`Label:  ${data[0].label}`);
    createDiv('Confidence: ' + nf(data[0].confidence, 0, 2));
}
}

