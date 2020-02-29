let addPix = document.getElementById('update-pg');
let  album = document.getElementById('album');
let selectImg = document.getElementById('file');



let count = 0;






// Add event listener to the elements

addPix.addEventListener('click', addAlbum);
selectImg.addEventListener('change', loadImg);

function addAlbum(e){

  // Get the element to output the count or amount of elements added

let countAlbum = document.getElementById('count-output');

  // Create the elements for each album

let card = document.createElement('div');
let cardImg = document.createElement('div');
let cardBody = document.createElement('div');
let img = document.createElement('img');
let instruction = document.createElement('p');
let cardFooter = document.createElement('div');
let editButton = document.createElement('button');
let deleteButton = document.createElement('button');
let imgInput = document.createElement('input');
let uploadImg = document.createElement('p');
let imgLabel = document.createElement('label');
let hoursAgo = document.createElement('div');




// Add classes to the elements created
card.className = 'card';
cardImg.className = 'card-img';
cardBody.className = 'card-body';
cardFooter.className = 'card-footer';
editButton.className = 'sm-btn hover';
deleteButton.className = 'sm-btn bg-danger hover';
imgInput.className = 'display-none';
imgLabel.className = 'hover';
hoursAgo.className = 'time';


// Add id to the created element
img.id = 'img-output';
editButton.id = 'edit-text';
deleteButton.id = 'delete';
imgInput.id = 'file';


// Add content to the text

instruction.innerText = 'Please click on Edit button to add description of when and where the picture was taken so as to remind the viewers of this event';

editButton.innerText = 'Edit';

deleteButton.innerText = 'Delete';

imgLabel.innerText = 'Upload Image';

hoursAgo.innerText = '9 Hours ago';

// Other Attributes
imgInput.name = 'image';
imgInput.type = 'file';
imgInput.accept = 'image/*';
let att = document.createAttribute('for')
att.value = 'file';

imgLabel.setAttributeNode(att);

// append child
// image label is the child and upload image element is the parent
uploadImg.appendChild(imgLabel);

cardImg.appendChild(img);

cardFooter.append(editButton, deleteButton, imgInput, uploadImg, hoursAgo);

cardBody.append(instruction, cardFooter);

card.append(cardImg, cardBody);


album.appendChild(card);

// this count the number of element added to the page

count = count + 1;
countAlbum.innerHTML = `You have created ${count} Album so far`


  e.preventDefault();
}


//this is responsible for changing the image on each album


function loadImg(e){
let image = document.getElementById('img-output');
let src = document.createAttribute('src');
src.value = URL.createObjectURL(e.target.files[0]);

image.setAttributeNode(src);


  e.preventDefault();
}