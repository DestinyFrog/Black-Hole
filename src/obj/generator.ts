import { diagonal, randomColor, toRadian, WIDTH, HEIGHT } from "../data.js";
import Gim from "../gim.js";
import black_hole from "./hole.js";

class SpaceBody extends Gim {
	radius: number;
	private angle: number;
	private distance: number;

	constructor() {
		const x = 50
		const y = 50

		super( x, y, randomColor() )
		this.radius = Math.floor( Math.random() * 20 ) + 5
		this.angle = Math.floor( Math.random() * 359 )
		this.distance = diagonal
	}

	draw( ctx:CanvasRenderingContext2D ):void {
		this.distance--

		this.x = black_hole.x + ( Math.cos( toRadian( this.angle ) ) * this.distance )
		this.y = black_hole.y + ( Math.sin( toRadian( this.angle ) ) * this.distance )

		

		ctx.fillStyle = this.color
		ctx.beginPath()
		ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2 )
		ctx.fill()
	}
}

class Generator extends Gim {
	bodies: SpaceBody[];

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
	}
}

const generator = new Generator()
export default generator