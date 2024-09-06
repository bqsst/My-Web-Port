function scrollSection(sectionId){
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top:section.offsetTop,
        behavior:'smooth'
    });
}

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight / 3) {
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('underline', 'text-violet-500');
                button.classList.add('text-gray-600');
            });
            const activeButton = document.querySelector(`button[onclick="scrollSection('${section.id}')"]`);
            activeButton.classList.add('underline', 'text-violet-500');
        }
    });
});

function updateMultipleProgressBars(progressMap) {
    for (const [id, progress] of Object.entries(progressMap)) {
        var progressBar = document.getElementById(id);
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }
}

updateMultipleProgressBars({
    'progress-bar-1': 60,
    'progress-bar-2': 70,
    'progress-bar-3': 60,
    'progress-bar-4': 60,
    'progress-bar-5': 60,
    'progress-bar-6': 80,
    'progress-bar-7': 60,
    'progress-bar-8': 75,
    'progress-bar-9': 65
});
