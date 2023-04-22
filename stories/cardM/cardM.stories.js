import { createCardM } from "./cardM";

export default { title: 'Design System/Molecules/Banner' }

const Template = ({ label, ...args }) => {
    return createCardM({ label, ...args })
}

export const Default = Template.bind({});
Default.args = {
  cards: [
    { src: 'https://source.unsplash.com/featured/300x201',
      tag: 'sport',
      title: 'Fifa',
      description: 'Lorem ipsum dolor sit amet,  adipiscing sit consectetur...',
      tagColor: 'blue'},
    { src: 'https://source.unsplash.com/featured/300x201',
      tag: 'sport',
      title: 'Monkey Island',
      description: 'Lorem ipsum dolor sit amet,  adipiscing sit consectetur...',
      tagColor: 'blue'},
    { src: 'https://source.unsplash.com/featured/300x201',
      tag: 'sport',
      title: 'Bulletstorm',
      description: 'Lorem ipsum dolor sit amet,  adipiscing sit consectetur...',
      tagColor: 'blue'},
  ],
};