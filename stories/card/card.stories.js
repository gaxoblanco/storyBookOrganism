import { createCard } from "./card";

export default { title: 'Design System/Atoms/Card'}
const Template = ({ label, ...args }) => {
    return createCard({ label, ...args })
}

export const Default = Template.bind({})
Default.args = {
    src: 'https://source.unsplash.com/featured/300x201',
    tag: 'sport',
    title: 'Fifa',
    description: 'Lorem ipsum dolor sit amet,  adipiscing sit consectetur...',
    tagColor: 'blue'
}

export const Violet = Template.bind({})
Violet.args = {
    src: 'https://source.unsplash.com/featured/300x201',
    tag: 'shooter',
    title: 'Bulletstorm',
    description: 'Lorem ipsum dolor sit amet,  adipiscing sit consectetur...',
    tagColor: 'violet'
}