const episodes = document.querySelectorAll('.episode');

episodes.forEach(episode => {
    const videoToggle = episode.querySelector('.video-toggle');
    const videoPlayer = videoToggle.querySelector('iframe');

    episode.addEventListener('click', () => {
        if (videoPlayer.style.display === 'block') {
            videoPlayer.style.display = 'none';
        } else {
            episodes.forEach(ep => {
                ep.querySelector('.video-player').style.display = 'none';
            });

            videoPlayer.style.display = 'block';
        }
    });
});
