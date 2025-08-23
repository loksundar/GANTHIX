// Inject acronym rows and run simple animations

const acronym = [
  { letter: 'G', meaning: 'Generative' },
  { letter: 'A', meaning: 'AI' },
  { letter: 'N', meaning: 'Next‑gen' },
  { letter: 'T', meaning: 'Transformation' },
  { letter: 'H', meaning: 'Human‑centered' },
  { letter: 'I', meaning: 'Intelligence' },
  { letter: 'X', meaning: 'eXperiments' } // or eXcellence
];

const list = document.getElementById('acronym-list');
acronym.forEach(item => {
  const li = document.createElement('li');
  li.className = 'acronym-row';
  li.innerHTML = `<div class="letter" aria-hidden="true">${item.letter}</div>
                  <div class="meaning"><strong>${item.meaning}</strong></div>`;
  list.appendChild(li);
});

const brandWord = document.getElementById('brand-word');
const chars = [...brandWord.querySelectorAll('.char')];

function animateBrand(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  chars.forEach((ch, i) => {
    if(reduceMotion){
      ch.style.opacity = 1;
      ch.style.transform = 'none';
      ch.style.filter = 'none';
    }else{
      setTimeout(() => {
        ch.style.opacity = 1;
        ch.style.transform = 'translateY(0) scale(1)';
        ch.style.filter = 'blur(0)';
      }, 220 * (i + 1));
    }
  });
}

function animateRows(){
  const rows = document.querySelectorAll('.acronym-row');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  rows.forEach((row, i) => {
    if(reduceMotion){
      row.classList.add('show');
    }else{
      setTimeout(() => row.classList.add('show'), 160 * (i + 1) + 1200);
    }
  });
}

function setYear(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
}

window.addEventListener('DOMContentLoaded', () => {
  setYear();
  animateBrand();
  animateRows();
});
