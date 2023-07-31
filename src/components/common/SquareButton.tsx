import React from "react";
import styled from "styled-components";

interface ButtonProps {
    variant?: "contained" | "outlined";
    color?: "primary" | "secondary" | "tertiary" | "danger";
    children: string;
}

const SquareButton: React.FC<ButtonProps> = ({
    variant,
    children,
    ...props
}) => {
    return (
        <ButtonStyles className={variant} {...props}>
            {children}
        </ButtonStyles>
    );
};

const ButtonStyles = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    transition: background-color 0.5s;

    // default (text only)
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.dark};

    /** Hover **/
    &:hover {
        filter: invert(0.9);
    }

    /** Variants **/
    // contained
    &.contained {
        background-color: ${({ theme }) => theme.color.primary};
        border: 2px solid ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.light};
    }

    // outlined
    &.outlined {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.primary};
    }

    /** Color styles */
    // primary
    &.primary {
        background-color: ${({ theme }) => theme.color.primary};
        border: 2px solid ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.light};
    }

    // secondary
    &.secondary {
        background-color: ${({ theme }) => theme.color.secondary};
        border: 2px solid ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.light};
    }
`;

export default SquareButton;
