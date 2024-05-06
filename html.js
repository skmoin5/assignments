let body = document.getElementById('body');

body.innerHTML = `<div class="chat-container">
<div class="profile">
    <img src="./media/th.jpg" alt="Sender Avatar" class="pic">
    <div class="colum">
        <span>BOB</span>
        <span id="vai"></span>
    </div>
</div>
<div class="message-container" id="msg">
    <div class="message sendmsge sfixed">
        <span class="span">
            Hey there
            <div class="row">
                <span>&#x23f1;</span>
                <span id="current">01:00</span>
            </div>
        </span>
    </div>
</div>
<div class="inputdiv">
    <input type="text" placeholder="type massage" id="input" class=" input">
    <button id="btn" class="button">Send</button>
</div>
</div>
`;