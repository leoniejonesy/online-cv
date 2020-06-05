function selectCard(cardNumber) {

    var cards = [
        document.getElementById('c1'),
        document.getElementById('c2'),
        document.getElementById('c3'),
        document.getElementById('c4'),
        document.getElementById('c5')
    ];

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