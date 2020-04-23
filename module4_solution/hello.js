(function(window) {
    var hellospeaker = new Object();
    var speakword = "Hello";
    hellospeaker.speak = function(name) {
        console.log(speakword + " " + name);
    };
    window.hellospeaker = hellospeaker;
})(window);