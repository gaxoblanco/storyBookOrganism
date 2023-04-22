import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { createButton } from "./button";
import ButtonDocumentation from "./button.md"

export default {
    title: 'Design System/Atoms/Button',
    //decoradores
    decorators: [(story) => {
        const decorator = document.createElement('div')
        decorator.style.margin = '24px'
        decorator.appendChild(story())
        return decorator
    }],
    // documentacion del componente
    parameters: {
        docs: {
            page: null,
            description: {
                component: ButtonDocumentation
            }
        },
        //detecta el mouse over
        actions: {
            handles: ['mouseover']
        },
        backgrounds: {
            default: 'blackfriday',
            values: [
                {name: 'blackfriday', value: '#00000'},
                {name: 'default', value: '#ffffff'},
            ]
        }
    },
    argTypes: {
        label: {
            name: 'label',
            control: {
                type: 'text'
            }
        },
        style: {
           name: 'style',
           options: ['filled', 'outlined'],
            control: {
                type: 'radio'
            }
        },
        size: {
            name: 'size',
            options:['small','medium', 'large'],
             control: {
                 type: 'radio'
             }
        },
        color: {
            name: 'color',
            options:['primary','neutral', 'warning'],
             control: {
                 type: 'radio',
             }
        },
        onClick: {
            onClick: 'Event',
            action: 'clicked'
        }
    }
}
//le pasamos su texto y los argumentos que tenga 
const Template = ({ label, ...args }) => {
    return createButton({ label, ...args })
}

export const Default = Template.bind({})
Default.args = {
    label: 'Button'
}


Default.play = async ({args, canvasElement}) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Button')).toBeInTheDocument();
}