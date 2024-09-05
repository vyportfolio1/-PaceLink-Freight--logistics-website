function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-${faqNumber}`);
    const arrow = document.getElementById(`arrow-${faqNumber}`);

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      arrow.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      arrow.classList.remove('rotate-180');
    }
  }