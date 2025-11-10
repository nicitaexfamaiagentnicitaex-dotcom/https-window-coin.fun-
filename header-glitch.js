document.addEventListener('DOMContentLoaded', () => {
  const glitchTitle = document.querySelector('.glitch-title');
  if (!glitchTitle) return;

  const rawText = glitchTitle.textContent;
  if (!rawText) return;

  const characters = [...rawText];
  glitchTitle.textContent = '';

  characters.forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'glitch-char';
    span.style.setProperty('--i', index);
    span.textContent = char === ' ' ? '\u00A0' : char;
    glitchTitle.appendChild(span);
  });
});

