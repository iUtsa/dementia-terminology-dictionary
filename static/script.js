// Function to search and scroll to the term
function searchTerm() {
    const searchInput = document.getElementById('searchTerm').value.toLowerCase();
    const terms = document.querySelectorAll('#termsList .term-link');

    let found = false;
    terms.forEach(term => {
        if (term.textContent.toLowerCase().includes(searchInput)) {
            term.scrollIntoView({ behavior: 'smooth', block: 'center' });
            term.classList.add('highlight');
            setTimeout(() => term.classList.remove('highlight'), 2000);
            found = true;
        }
    });

    if (!found) alert('Term not found');
}

//pronunciation function

function playPronunciation() {
    const utterance = new SpeechSynthesisUtterance("Alzheimer's");
    utterance.lang = "en-US";
    
    const pronounceBtn = document.getElementById("pronounceBtn");
    
    // Add active class to show pulsing effect and disable button
    pronounceBtn.classList.add("active");
    pronounceBtn.disabled = true;

    // Remove active class and re-enable button after speaking
    utterance.onend = () => {
        pronounceBtn.classList.remove("active");
        pronounceBtn.disabled = false;
    };
    
    // Trigger pronunciation
    window.speechSynthesis.speak(utterance);
}