import s from 'styled-components';

export const Container = s.div`
    font-family: 'Roboto';
    background: #edf7f3;
    width: 100vw;
    height: 100vh;
    padding: 48px 0;
`;

export const Button = s.button`
    background: #53FEA8;
    color: #000;
    border: 0;
    padding: 8px 16px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
`;

export const Input = s.input`
    height: 32px;
    padding: 0 12px;
    border: 1px solid #afbdb7;
    border-radius: 4px;
    margin-right: 16px;

`;

export const Card = s.div`
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    width: 300px;


    h2 {
        color: #5ead7b;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 16px;
    }
`;

export const Content = s.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    & p {
        color: #646b68;
        margin-top: 8px;
    }
`;

export const Hero = s.div`
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .illustration {
        height: 300px;
    }
`