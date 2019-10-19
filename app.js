const TypeWriter = (txtElement, words, wait = 3000) => {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type method
document.addEventListener('DOMContentLoaded', init);

//init on DOM Load
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init TypeWriter
    new TypeWriter(txtElement, words, wait);
}