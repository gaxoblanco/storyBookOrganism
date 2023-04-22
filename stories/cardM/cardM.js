import './cardM.css'
import '../card/card.css'
import { createCard } from '../card/card';

export const createCardM = ({cards}) => {
  const container = document.createElement('div');
  const avatar = document.createElement('div')
  const img = document.createElement('img')
  const cardBig = document.createElement('div')
  const cardBigContent = document.createElement('div')
  const content = document.createElement('div')
  const h3 = document.createElement('h3')
  const a = document.createElement('a')
  const p = document.createElement('p')

  container.appendChild(cardBig)
  container.appendChild(content)
  container.className = 'banner_container'
  content.className = 'banner_content_cards'
  
  cardBig.appendChild(avatar)
  cardBig.appendChild(cardBigContent)
  cardBig.className = 'card_big'

  avatar.appendChild(img)
  avatar.className = 'card_big__avatar'

  cardBigContent.appendChild(h3)
  cardBigContent.appendChild(p)

  img.src = cards[0].src
  a.innerHTML = cards[0].tag
  h3.innerHTML = cards[0].title
  p.innerHTML = cards[0].description

  cards.slice(1, 3).forEach(card => {
    const { src, tag, title, description, tagColor } = card;
    const cardEl = createCard({ src, tag, title, description, tagColor });
    content.appendChild(cardEl);
  });
  
  return container;
}