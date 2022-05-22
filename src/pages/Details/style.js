import styled from 'styled-components'

export const Container = styled.div`

    padding: 4rem 0;

    h1{
        margin: 3rem 0;
    }   

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
        transition: all 0.5s;
    }

    img:hover{
        transform: scale(1.1);
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button{
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        font-size: 100%;
        transition: all 0.5s;
    }

    button:hover{
        background-color: #5848c2;
        letter-spacing: 1px;
        transform: scale(1.1);
    }

    span{
        line-height:130%;
        margin-bottom: 3rem;
        font-size: 120%;
    }

    .release-date{
        opacity: 0.5;
        margin-bottom: 3rem;
    }

`