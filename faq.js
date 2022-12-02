const faqData = [
  {
    id: 1,
    question: 'Who are we?',
    answer:
      'We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.',
  },
  {
    id: 2,
    question: 'What do we do?',
    answer:
      'Building learning communities with Our Affordable & Competent Courses',
  },
  {
    id: 3,
    question: 'Are the community classes boring?',
    answer: 'No, not at all!!!',
  },
];

const accordianBody = document.querySelector('.accordian_body');
// const faqs = [];

function showFaq() {
  faqData.forEach((element) => {
    createFaq(element.question, element.answer);
  });
}

showFaq();

function createFaq(question, answer) {
  const faq = document.createElement('div');
  faq.classList.add('faq');
  accordianBody.append(faq);

  const faq_header = document.createElement('div');
  faq_header.classList.add('faq_header');
  faq.append(faq_header);

  const h3 = document.createElement('h3');
  h3.textContent = question;
  faq_header.append(h3);

  const btn = document.createElement('button');
  btn.textContent = '+';
  btn.classList.add('show_btn');
  faq_header.append(btn);

  // Hidden paragraph
  const p = document.createElement('p');
  p.innerText = answer;
  p.classList.add('hidden');
  faq.append(p);
}

btnStatusUpdate();

function btnStatusUpdate() {
  const showParagraph = document.querySelectorAll('.show_btn');
  showParagraph.forEach((element) => {
    element.addEventListener('click', () => {
      const answer = element.parentElement.parentElement.lastChild;
      answer.classList.toggle('hidden');
    });
  });
}
