
import tag from './price_tag@2x.png'
import style from './index.scss'
import createTag from './createTag'
createTag()
let img = new Image()
img.src = tag
img.classList.add(style.tag)
img.classList.add(style.aaa)

let root = document.getElementById('root')
root.append(img)

