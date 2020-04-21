function selectCard(cardNumber) {

    var cards = [
        document.getElementById('c1'),
        document.getElementById('c2'),
        document.getElementById('c3'),
        document.getElementById('c4'),
        document.getElementById('c5')
    ];

    document.getElementById('c' + cardNumber).classList.add('selected-move-right-rotate');
    document.getElementById('c' + cardNumber + 'Inner').classList.add('selected-inner-rotate');
    for(var i = 0; i < cards.length; i++){
        if(i != cardNumber -1)
        {
            cards[i].classList.add('move-left-' + cards[i].id);
        }
    }
}