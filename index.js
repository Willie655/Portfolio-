const marquee = document.getElementById('marquee');
let pos = window.innerWidth;

function moveMarquee() {
  pos -= 2; // Adjust the speed by changing the decrement value
  if (pos + marquee.offsetWidth < 0) {
    pos = window.innerWidth;
  }
  marquee.style.transform = translateX(${pos}px);
  requestAnimationFrame(moveMarquee);
}

moveMarquee();
