document.querySelector(document).ready(function () {
	document.querySelector('.buzz').each(function () {
		document
			.querySelector(this)
			.attr('data-buzz', document.querySelector(this).text())
	})
})
