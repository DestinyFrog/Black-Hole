import { diagonal, randomColor, toRadian, WIDTH, HEIGHT } from "../data.js";
import Gim from "../gim.js";
import black_hole from "./hole.js";

class SpaceBody extends Gim {
	radius: number
	private angle: number
	private distance: number
	private speed = 1

	constructor() {
		super( undefined, undefined, randomColor() )

		this.radius = Math.floor( Math.random() * 10 ) + 5
		this.angle = Math.floor( Math.random() * 359 )
		this.distance = diagonal

		this.x = black_hole.x + ( Math.cos( toRadian( this.angle ) ) * this.distance )
		this.y = black_hole.y + ( Math.sin( toRadian( this.angle ) ) * this.distance )
	}

	draw( ctx:CanvasRenderingContext2D ):void {
		this.distance -= this.speed
		this.angle++

		this.x = black_hole.x + ( Math.cos( toRadian( this.angle ) ) * this.distance )
		this.y = black_hole.y + ( Math.sin( toRadian( this.angle ) ) * this.distance )

		let cx = Math.pow( this.x - black_hole.x , 2 )
		let cy = Math.pow( this.y - black_hole.y , 2 )
		let hip = Math.sqrt( cx + cy ) - this.radius/2 - black_hole.radius/2
		if ( hip < black_hole.radius/2 ) generator.cut()

		ctx.fillStyle = this.color
		ctx.beginPath()
		ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2 )
		ctx.fill()
	}
}

class Generator extends Gim {
	bodies: SpaceBody[]

	constructor() {
		super();
		this.bodies = [
			new SpaceBody()
		]
	}

	draw( ctx:CanvasRenderingContext2D ):void {
		this.bodies.forEach( obj => obj.draw( ctx ) )
	}

	cut():void {
		this.bodies.shift()
		this.bodies.push( new SpaceBody() )
		this.bodies.push( new SpaceBody() )
		black_hole.radius++
	}
}

const generator = new Generator()
export default generator