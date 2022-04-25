import styled from 'styled-components';

interface WrapperProps {
    children?: React.ReactNode;
}

const StyledWrapper = styled.div`
    padding: 20px;
    background-color: white;

    & > h1 {
        color: red;
        font-family: 'Water Brush'
    }

    &:hover {
        background-color: red;
    }
`;

const Wrapper = ({children}: WrapperProps) => (
    <StyledWrapper>{children}</StyledWrapper>
)

export default Wrapper;