import { HEIGHT, WIDTH } from "../data.js";

class Background {
	color = "#414a6c"

	draw( ctx:CanvasRenderingContext2D ):void {
		ctx.fillStyle = this.color
		ctx.fillRect( 0, 0, WIDTH, HEIGHT )
	}
}

const background = new Background()
export default background