import './button.css'

export const createButton = ({
    style = 'outlined',
    size = 'small',
    color = 'blue',
    label,
    onClick
}) => {
    const button = document.createElement('button')
    button.type = 'submit'
    button.role = 'button'
    button.innerHTML = label
    button.addEventListener('click', onClick)
    button.className = [
        'button',
        `button--${size}`,
        `button--${style}`,
        `button--${color}`,
    ].join(' ')

    return button
}