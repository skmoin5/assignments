

// for jquary prectics


$('#btn').on('click',function () {
   
    let dt = new Date();
let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    
  if (true == true) {
    let newdiv = $("<div></div>").html(`<span class="span">
    ${input.value}
    <div class="row">
        <span >&#10004; </span>
        <span >${time}</span>
    </div>
    </span>`);
    $("#msg").append(newdiv);
    $(newdiv).addClass("message receivemsge");
    
  }

  else{
    newdiv = $("<div></div>").html(`<span class="span">
    ${input.value}
    <div class="row">
        <span >&#x23f1; </span>
        <span >${time}:${min}</span>
    </div>
    </span>`);
    $("#msg").append(newdiv);
    $(newdiv).addClass("message receivemsge")
   
  }
  
})
