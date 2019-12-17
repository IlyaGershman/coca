function onRangeChange(val) {
    var filler = document.getElementById("filler");
    filler.style.clip = `rect(0px 400px ${filler.offsetHeight/val}px 0px)`;
}
