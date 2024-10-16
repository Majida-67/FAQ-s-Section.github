const value = document.querySelectorAll('.accordian');
value.forEach(accord => {

    const icon = accord.querySelector('.icons');
    const answer = accord.querySelector('.answers');

    accord.addEventListener('click', () => {

        // icon.classList.toggle('active');
        // answer.classList.toggle('active')

    if (icon.classList.contains('active')) {
        icon.classList.remove('active');
        answer.style.maxHeight = null;
    } else {
        icon.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }


    });
});

console.log('hello');
