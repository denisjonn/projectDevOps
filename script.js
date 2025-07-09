document.addEventListener('DOMContentLoaded', function() {
    // Lesson navigation functionality
    const topics = document.querySelectorAll('.topic');
    
    topics.forEach(topic => {
        topic.addEventListener('click', function() {
            // Remove active class from all topics
            document.querySelectorAll('.topic').forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked topic
            this.classList.add('active');
            
            // Update lesson content based on selected topic
            const lessonId = this.getAttribute('data-lesson');
            loadLessonContent(lessonId);
        });
    });
    
    // Function to load lesson content
    function loadLessonContent(lessonId) {
        const lesson = lessons[lessonId];
        
        if (!lesson) return;
        
        // Update lesson title
        document.getElementById('lesson-title').textContent = lesson.title;
        
        // Update breadcrumbs
        const breadcrumbs = document.getElementById('breadcrumbs');
        breadcrumbs.innerHTML = lesson.breadcrumbs.map(item => `<span>${item}</span>`).join('<span>›</span>');
        
        // Update video
        const videoIframe = document.getElementById('lesson-video');
        videoIframe.src = `https://www.youtube.com/embed/${lesson.videoId}`;
        
        // Update content
        document.getElementById('lesson-content').innerHTML = lesson.content;
        
        // Add animation effect
        const lessonContent = document.querySelector('.lesson-content');
        lessonContent.style.animation = 'none';
        setTimeout(() => {
            lessonContent.style.animation = 'fadeIn 0.6s ease-out';
        }, 10);
    }
    
    // Add floating effect to some elements
    const hearts = document.querySelectorAll('.hearts span');
    hearts.forEach((heart, index) => {
        heart.classList.add('floating');
        heart.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add hover effect to menu items
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Load first lesson by default
    loadLessonContent('1');
});