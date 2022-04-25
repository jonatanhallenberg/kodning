import styled from 'styled-components';

interface StyledButtonProps {
    variant?: "primary" | "secondary"
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${ props => props.variant === "primary" ? "red" : "green" };
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 15px;
    border-radius: 3px;

    &:hover {
        transform: scale(1.5);
    }
`;

interface ButtonType {
    variant?: "primary" | "secondary";
}

const ButtonUsingStyledComponents = ({ variant = "primary" }: ButtonType) => (
    <StyledButton type="button" variant={variant}>Klicka här!</StyledButton>
)

export default ButtonUsingStyledComponents;