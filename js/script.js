// word animation

const interact = document.querySelectorAll('.word span');

interact.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	 }, 750 * (idx+1))
});

// progress bar

let progress = document.getElementById('progressbar');

        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
        }

