import './card.css'

export const createCard = ({tagColor = 'violet', src, tag, title, description}) => {
  const card = document.createElement('div')
  const avatar = document.createElement('div')
  const img = document.createElement('img')
  const content = document.createElement('div')
  const h3 = document.createElement('h3')
  const a = document.createElement('a')
  const p = document.createElement('p')

  card.appendChild(avatar)
  avatar.appendChild(img)
  card.appendChild(content)
  content.appendChild(a)
  content.appendChild(h3)
  content.appendChild(p)

  img.src = src
  a.innerHTML = tag
  h3.innerHTML = title
  p.innerHTML = description

  avatar.className = 'card__avatar'
  content.className = 'card__content_text'
  a.className = [
    'card_tag',
    `card_tag--${tagColor}`
  ].join(' ')

  card.className = [
    'card',
    `card--${tagColor}`
  ].join(' ')

  return card
}