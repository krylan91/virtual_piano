document.addEventListener("keydown", e => {
    if (e.code == "KeyA" || e.code == "KeyS" || e.code == "KeyD" ||
        e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" ||
        e.code == "KeyJ" || e.code == "KeyW" || e.code == "KeyE" ||
        e.code == "KeyT" || e.code == "KeyY" || e.code == "KeyU") {
        let keyName = e.key.toUpperCase();
        let audio = new Audio("resources/audio/" + keyName + ".mp3");
        audio.play().then(() => console.log("The '" + keyName + "' key is pressed"));
    } else {
        console.warn("There is no such note, you fool");
    }
})