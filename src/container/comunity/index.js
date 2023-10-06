import {
  createElement,
  createHeader,
  createButton,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

page.append(title)

// ===

const BUTTON_LIST = [
  {
    text: 'База знань',
    viewed: true,
  },
  {
    text: 'Інформація',
    viewed: false,
  },
]

const createList = () => {
  const buttonList = createElement('div', 'header')

  BUTTON_LIST.forEach((buttonData) => {
    const button = createElement(
      'button',
      buttonData.viewed
        ? 'button menu menu--viewed'
        : 'button menu',
      buttonData.text,
    )

    buttonList.append(button)
  })
  return buttonList
}

const menu = createList()
page.append(menu)

//=====

const mainBlock = () => {
  const block = document.createElement('main')
  block.classList.add('comunity')

  const IMAGE_COMUNITY = {
    src: '/img/comunity 1.png',
  }

  const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('img__comunity')

    img.src = IMAGE_COMUNITY.src

    return img
  }
  const image = createImg()
  block.appendChild(image)

  const backComunity = () => {
    const back = document.createElement('div')
    back.classList.add('post', 'button')

    const postTitle = document.createElement('p')
    postTitle.classList.add('post__info--title')
    postTitle.textContent = 'Що таке база знань?'

    const postComunity = document.createElement('p')
    postComunity.classList.add('post__info--comunity')
    postComunity.textContent = `База знаний — база данных, содержащая правила вывода и информацию о
      человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
      информацию, являющуюся результатом решения предыдущих задач.`

    back.appendChild(postTitle)
    back.appendChild(postComunity)
    return back
  }

  const ground = backComunity()
  block.appendChild(ground)

  const button = createButton(
    'button',
    'button__bottom--comunity',
    "Перейти до ком'юніті у Телеграм",
  )

  block.appendChild(button)
  return block
}

const content = mainBlock()
page.append(content)
