
// javascript
let input = document.getElementById('input');
let send = document.getElementById('send');
let msg = document.getElementById('msg');
let btn = document.getElementById('btn');
let vai =  document.getElementById('vai')
let network = navigator.onLine;



btn.addEventListener('click',function () {
let newdiv = document.createElement('div');
let m = new Date ();
let time = m.getHours();
let min  = m.getMinutes();




if (network == true) {
    newdiv.innerHTML =  `<span class="span">
${input.value}
<div class="row">
    <span >&#10004; </span>
    <span >${time}:${min}</span>
</div>
</span>`;
}

else{
    newdiv.innerHTML =  `<span class="span">
${input.value}
<div class="row">
    <span >&#x23f1; </span>
    <span >${time}:${min}</span>
</div>
</span>`;
}

msg.appendChild(newdiv);
newdiv.setAttribute('class', 'message receivemsge');





if (network == true) {
    let newdiv = document.createElement('div');
    newdiv.innerHTML = `<span class="span">
    THANK YOU
    <div class="row">
    <span >${time}:${min}</span>
        <span >&#10004;</span>
        
    </div>
    </span>`;
    msg.appendChild(newdiv);
    newdiv.setAttribute('class', 'message sendmsge'); 
}
}

)




function abc() {
    if (network == true) {
  vai.innerHTML = 'ONLINE';
    }

    else{
        vai.innerHTML = 'OFFLINE';
    }

    
}


abc()
































































// var para = $('p');
// para.hide()
// $('button').on('click', function (event) {
//     para.toggleClass('red');
//     para.toggle();

// });