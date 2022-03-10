import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    max-width: 1000px;
    padding: 0.625rem 1rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    z-index: 1; 

    @media(max-width: 720px){
        display: none;
    }

    h1{
        img{
            max-width: 70px;
            width: 100%;
        }
    }

    nav{
        width: 100%;
        max-width: 480px;

        @media(max-width: 720px){
            display: none;
        }
        
        ul{
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            @media(min-width: 721px) and (max-width: 1080px){
                justify-content: center;
                gap: 30px;
            }

            li{
                display: flex;
                align-items: center;

                height: 40px;

                a{
                    font-size: 1.125rem;
                    font-weight: 900;
                    
                    color: #EFEFF5;
                    display: flex;
                    align-items: center;
                    height: 100%;

                    transition: 200ms all ease-in-out;

                    &:hover{
                        border-bottom: 1px solid var(--bg-cream);
                        color: var(--bg-cream);

                        @media(min-width: 721px) and (max-width: 1080px){
                            border:0;
                        }
                    }
                }

            }
        }
        
    }

    button{
        width: 100%;
        max-width: 115px;

        border-radius: 10px;
        border: 0;
        padding: 0.625rem;

        background: var(--bg-button);

        font-size: 0.75rem;
        font-weight: 700;

        color: #fff;

        transition: 200ms all ease-in-out;

        &:hover{
            color: var(--bg-button);
            background: var(--bg-cream);
        }

        @media(max-width: 720px){
            display: none;
        }
    }

`