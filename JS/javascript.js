var today =  new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
	greeting = 'Good evening!';
	}else if (hourNow > 12) {
		greeting = 'Good Afternoon!';
	}else if (hourNow > 0){
		greeting = 'Good Morning!';
	}else{
		greeting = 'Welcome';
	}



var welcome = document.getElementById('welcomeTime');

welcome.innerText = greeting;


window.sr = ScrollReveal();

	sr.reveal('.navbar', {
		duration:2000,
		origin: 'top',
	});

	sr.reveal('.header-content-right',{
		duration:2000,
		origin:'right',
		distance: '300px'
	});

	sr.reveal('.header-btn',{ 
		duration:2000,
		delay: 'right',
		origin:'bottom'
		});

	sr.reveal('#testimonial div',{
		duration:2000,
		origin: 'left',
		distance:'300px',
		viewFactor: 0.2
	});


	sr.reveal('.info-right',{
		duration:2000,
		origin: 'buttom',
		distance:'300px',
		
	});

	sr.reveal('#info-two',{
		duration:2000,
		origin:'left',
		distance: '500px',
	});

	sr.reveal('.socialMedia',{
		duration:2000
	});
	sr.reveal('.widget',{
	 interval: 1000
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e){
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});