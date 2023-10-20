
const vw = document.body.clientWidth
const vh = document.body.clientHeight

export const WIDTH = vw
export const HEIGHT = vh

export const diagonal = WIDTH > HEIGHT ? WIDTH/2 : HEIGHT/2

export function randomColor():string {
	const rand = () => Math.floor( Math.random() * 255 )
	return `rgb(${ rand() },${ rand() },${ rand() })`
}

export function toRadian( deg:number ):number {
	return ( Math.PI / 180 ) * deg
}
