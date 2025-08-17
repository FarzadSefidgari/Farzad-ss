
/* --- Header shadow on scroll --- */
header.scrolled {
  box-shadow: 0 10px 26px rgba(0,0,0,.18);
  background: rgba(0,0,0,.25);
  backdrop-filter: blur(8px);
}

/* --- Reveal animations --- */
.reveal {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  will-change: opacity, transform;
  transition: opacity .6s cubic-bezier(.2,.7,.2,1),
              transform .6s cubic-bezier(.2,.7,.2,1);
}
.reveal.reveal-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* --- Active nav link style --- */
header nav a.active {
  color: #fff;
  background: rgba(255,255,255,.06);
  border-radius: 10px;
}
