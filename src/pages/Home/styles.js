import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

h1{
    text-align: center;
    margin: 4rem 0;
}

ul{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
}
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
`

export const Movie = styled.li` 
  display: flex;
  flex-direction: column;  
  align-items: center;

img{
    width: 230px;
    bottom: 1rem;
    margin-bottom: 2rem;

}

span{
    font-weight: bold;
    font-size: 120%;
    text-align: center;
}

a img{
    transition: all 0.5s;
    border-radius: 1rem;
}

a img:hover{
    transform: scale(1.1);
    border-radius: 2rem;
}

`