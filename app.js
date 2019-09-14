const correctAnswers = ['A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const good = document.querySelector('.good');
const ok = document.querySelector('.ok');
const meh = document.querySelector('.meh');
const pathetic = document.querySelector('.pathetic');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    if (score === 100) {
      good.classList.remove('good');
      ok.classList.add('ok');
      meh.classList.add('meh');
      pathetic.classList.add('pathetic');
    } else if (score === 75) {
      ok.classList.remove('ok');
      meh.classList.add('meh');
      pathetic.classList.add('pathetic');
    } else if (score === 50) {
      meh.classList.remove('meh');
      pathetic.classList.add('pathetic');
    } else {
      pathetic.classList.remove('pathetic');
    }
  });

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  form.reset();
});
