document.addEventListener('DOMContentLoaded', function() {

    function areLessonsLoaded() {
        return window.lessons && Object.keys(window.lessons).length > 0;
    }

    function loadLessonContent(lessonId) {
        if (!areLessonsLoaded()) {
            console.error('Данные уроков не загружены!');
            return;
        }

        const lesson = window.lessons[lessonId];
        
        if (!lesson) {
            console.error(`Урок с ID ${lessonId} не найден!`);
            return;
        }
        

        document.getElementById('lesson-title').textContent = lesson.title;
        
        const breadcrumbs = document.getElementById('breadcrumbs');
        breadcrumbs.innerHTML = lesson.breadcrumbs.map(item => `<span>${item}</span>`).join('<span>›</span>');
        
        const videoIframe = document.getElementById('lesson-video');
        videoIframe.src = `https://www.youtube.com/embed/${lesson.videoId}`;

        document.getElementById('lesson-content').innerHTML = lesson.content;
        

        const lessonContent = document.querySelector('.lesson-content');
        lessonContent.style.animation = 'none';
        setTimeout(() => {
            lessonContent.style.animation = 'fadeIn 0.6s ease-out';
        }, 10);
    }

    document.querySelectorAll('.topic').forEach(topic => {
        topic.addEventListener('click', function() {

            document.querySelectorAll('.topic').forEach(t => {
                t.classList.remove('active');
            });

            this.classList.add('active');
            

            const lessonId = this.getAttribute('data-lesson');
            loadLessonContent(lessonId);
        });
    });
    

    const checkLessonsLoaded = setInterval(() => {
        if (areLessonsLoaded()) {
            clearInterval(checkLessonsLoaded);

            loadLessonContent('1');

            document.querySelector('.topic[data-lesson="1"]').classList.add('active');
        }
    }, 100);
    

    const hearts = document.querySelectorAll('.hearts span');
    hearts.forEach((heart, index) => {
        heart.classList.add('floating');
        heart.style.animationDelay = `${index * 0.5}s`;
    });
    

    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
