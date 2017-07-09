let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgs = document.getElementsByClassName("picture");
let modalImg = document.getElementById("img-wrapper");
let captionText = document.getElementById("caption-text");

for (let currentImg of imgs) {
    currentImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the users clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

//map script
let latitude = 42.697708;
let longitude = 23.321868;
let title = 'Concert';
let map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: {
        lat: latitude,
        lng: longitude
    },
    zoom: 13
});

let marker = new google.maps.Marker({
    position: {
        lat: latitude,
        lng: longitude
    },
    map:map,
    title: title
});

$('#map-canvas').width(700).height(300);

// function addCommentOnPage(comment) {
//     let comment = $('#comment-form');
//     comment.after('<div>' + comment + '</div>');
//
//     let d = new Date();
//     let month = d.getMonth()+1;
//     let day = d.getDate();
//     let output = day + '/' +
//         ((''+month).length<2 ? '0' : '') + month + '/' +
//         ((''+day).length<2 ? '0' : '') + d.getFullYear();
//
//     comment.after('<div>' + output + '</div>');
//     comment.hide();
// }
//
// function markLike() {
//     $('#btn-like').append('<span>&nbsp;OK<span>').attr('disabled','disabled');
//
// }
//
// function markUnlike() {
//     $('#btn-unlike').append('<span>&nbsp;OK<span>').attr('disabled','disabled');
// }
