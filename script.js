var openCard = 0;
var index = 1;

function selectCard(cardNumber) {

    if(index > 5)
        index = 1;

    if(cardNumber != openCard)
    {
        var card = document.getElementById('c' + cardNumber + 'Inner').getElementsByClassName('back')[0];
        card.innerHTML = "";
        var template = document.getElementById('c' + index + 'back');
        var clone = template.content.cloneNode(true);
        card.appendChild(clone);
        index++;
        openCard = cardNumber;
    }

    for(var i = 1; i <= 5; i++){
        if(i != cardNumber){
            document.getElementById('c' + i).classList.remove('priority');
            document.getElementById('c' + i + 'Inner').classList.remove('flip' + i);
        }
    }

    setTimeout(function(){ 
        document.getElementById('c' + cardNumber + 'Inner').classList.toggle('flip' + cardNumber);
    }, 100);

    setTimeout(function(){ 
        document.getElementById('c' + cardNumber).classList.toggle('priority');
    }, 300);
}