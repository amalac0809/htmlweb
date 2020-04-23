(function() {
    var names = ["Sam","John","Jason","Paul","Jim","Aston","Jake","Sara"];
    for(var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0);
        if((firstLetter == 'j')||(firstLetter == 'J'))
            {
                byeSpeaker.speak(names[i]);
            }
        else{
            hellospeaker.speak(names[i]);
        }
    }
})();