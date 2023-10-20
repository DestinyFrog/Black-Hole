import { WIDTH, HEIGHT } from "./data.js"

class Gim {
	x:number
	y:number
	color: string

	constructor( x?:number, y?:number, color?:string ) {
		this.x = x || WIDTH/2
		this.y = y || HEIGHT/2
		this.color = color || "aliceblue"
	}
}

export default Gim;