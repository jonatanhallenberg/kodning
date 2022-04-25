import buttonStyles from './buttonStyle.module.css';

interface ButtonType {
    variant: "primary" | "secondary";
}

const ButtonUsingCSSModule = ({ variant }: ButtonType) => (
    <button type="button" className={`${buttonStyles.myButton} ${variant === 'secondary' ? buttonStyles.myButtonGreen : ''}`}>Klicka här!</button>
);

export default ButtonUsingCSSModule;