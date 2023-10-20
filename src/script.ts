import { WIDTH, HEIGHT } from "./data.js"
import background from "./obj/back.js"
import generator from "./obj/generator.js"
import black_hole from "./obj/hole.js"

const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const ctx = canvas.getContext( "2d" )

function init() {
	canvas.width = WIDTH
	canvas.height = HEIGHT

	window.requestAnimationFrame( main )
}

function main() {
	background.draw( ctx )
	black_hole.draw( ctx )
	generator.draw( ctx )

	window.requestAnimationFrame( main )
}

init()