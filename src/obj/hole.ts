import Gim from "../gim.js"

class Hole extends Gim {
	radius = 10

	constructor( x?:number, y?:number ) {
		super( x, y, "black" )
	}

	draw( ctx:CanvasRenderingContext2D ) {
		ctx.fillStyle = this.color
		ctx.beginPath()
		ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2 )
		ctx.fill()
	}
}

const black_hole = new Hole()
export default black_hole