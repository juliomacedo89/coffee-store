import styled from 'styled-components'

export const Container = styled.header `
    width: 100%;
    position: relative;
`

export const Content = styled.div `
    width: 100%;
   
    
    .header-banner{
        margin-top: -7.8rem;
        position: relative;

        &:after {
            position: absolute;
            content:"";
            height:100%;
            width:100%;
            top:0;
            left:0;
            background: linear-gradient(180deg, rgba(33, 33, 35, 0.8) -35.49%, rgba(192, 130, 103, 0) 124.72%);
        }

        img{
            display: flex;
            margin: 0 auto;

            width: 100%;
            max-height: 720px;
            min-height: 450px;
            object-fit: cover;
        }

        .banner-text{
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;
            
            position:absolute;
            top: 50%;
            left: 0;

            z-index: 1;

            @media(max-width: 720px){
                z-index: 0;
            }

            h2{
                font-family: 'Roboto', sans-serif;
                font-size: 4.5rem;
                font-weight: 900;

                color: var(--bg-cream);

                margin-bottom: .375rem;

                @media(min-width: 721px) and (max-width: 1080px){
                    font-size: 3rem;
                }
                @media(max-width: 720px){
                    font-size: 2rem;
                }
            }

            span{
                font-family: 'Roboto', sans-serif;
                font-size: 1.5rem;
                font-weight: 400;

                color: var(--bg-brown);

                margin-bottom: 3.125rem;

                @media(min-width: 721px) and (max-width: 1080px){
                    font-size: 1rem;
                }
                @media(max-width: 720px){
                    font-size: .825rem;
                }
            }

            button{
                width: 100%;
                max-width: 250px;

                border-radius: 20px;
                border: 0;
                padding: 0.625rem 3.75rem;

                background: var(--bg-button);

                font-size: 1.25rem;
                font-weight: 500;

                color: #fff;

                transition: 200ms all ease-in-out;

                @media(min-width: 721px) and (max-width: 1080px){
                    width: 100%;
                    max-width: 180px;

                    font-size: 1rem;
                }
                @media(max-width: 720px){
                    width: 100%;
                    max-width: 100px;

                    font-size: 1rem;

                    padding: 0.5rem 2rem;
                }

                &:hover{
                    color: var(--bg-button);
                    background: var(--bg-cream);
                }
            }
        }      
    }

    

`