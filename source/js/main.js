document.addEventListener('blur', function(e) {
	if(['INPUT, TEXTAREA, SELECT'].indexOf(e.target.tagName >= 0)) {
		e.target.parentNode.classList.add('has-focused');
	}
}, true);
