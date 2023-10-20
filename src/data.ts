
const vw = document.body.clientWidth
const vh = document.body.clientHeight

export const WIDTH = vw
export const HEIGHT = vh

export const diagonal = Math.sqrt( Math.pow( WIDTH/2, 2 ) + Math.pow( HEIGHT/2, 2 ) )

const rand = () => Math.floor( Math.random() * 255 - 60 ) + 60
export const randomColor = ():string => `rgb(${ rand() },${ rand() },${ rand() })`

export const toRadian = ( deg:number ):number => ( Math.PI / 180 ) * deg
