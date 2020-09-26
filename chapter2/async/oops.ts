function asyncFunction(callback : Function){
	setTimeout(callback, 200)
}
let color : string  = 'blue';
(color => {
 asyncFunction(() => {
	 console.log(`the color is ${color}`)
 })

}

)(color)
 color = 'green';
