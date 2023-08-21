//your JS code here. If required.
const heading = document.getElementsByTagName("h1")[0];


window.addEventListener('resize', function(){
	const width = window.innerWidth, height = window.innerHeight;
	heading.innerText = `Width: ${width} and Height: ${height}`
})