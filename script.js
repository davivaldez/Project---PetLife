const elementsQuestion = document.querySelectorAll('.question');

elementsQuestion.forEach( (question) => {
  const elementArrow = question.querySelector('.arrow-off');

  question.addEventListener('click', () => {
    question.classList.toggle('active');

    elementArrow.classList.toggle('arrow-on');
  })
});
