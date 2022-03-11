import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    background: var(--bg-brown);
    margin: 0;
    border: 1px solid var(--bg-brown);

`

export const Content = styled.div `
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;

    .footer-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 2.5rem 0 10rem;

        @media(min-width: 721px) and (max-width: 1080px){
            margin: 2.5rem 0 5rem;
        }
        @media(max-width: 720px){
            margin: 2.5rem 0 3rem;
        }

        h2{
            display: flex;
            text-align: center;
            justify-content: space-between;

            font-size: 1.5rem;
            font-weight: 500;

            max-width: 1200px;
            width: 100%;
            
            color: var(--bg-cream);

            @media(min-width: 320px) and (max-width: 1080px){
                font-size: 1.25rem;
            }
            
            &::before{
                content: '';
                max-width: 450px;
                width: 34%;
               
                height: 4px;
                background: var(--bg-cream);
                margin-right: 0.625rem;
                margin-top: 1rem;
            }

            &::after{
                content: '';
            
                max-width: 450px;
                width: 34%;
       
                height: 4px;
                background: var(--bg-cream);
                margin-left: 0.625rem;
                margin-top: 1rem;

                
            }
        }
    }

    .footer-contact{
        width: 100%;
        max-width: 1126px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        @media(min-width: 721px) and (max-width: 1080px){
            flex-wrap: wrap;
            
            max-width: 550px;
            width: 100%;
            
            justify-content: space-between;

            gap: 10rem;
        }

        @media(min-width: 320px) and (max-width: 720px){
            flex-direction: column;
            align-items: center;
            gap: 3.125rem;
        }
        
        h3{
            font-size: 1.75rem;
            font-weight: 700;
            color: #fff;
            
            margin-bottom: 0.625rem;

            @media(min-width: 721px) and (max-width: 1080px){
                text-align: flex-start;
            }

            @media(max-width: 720px){
                text-align: center;
            }
        
        }

        a{
            font-size: 1.125rem;
            font-weight: 500;
            color: #fff;

            transition: 200ms all ease-in-out;
            
            &:hover{
                color: var(--bg-button);
            }
        }

        ul{
            display: flex;
            flex-direction: column;
            gap: .5rem;

            @media(min-width: 721px) and (max-width: 1080px){
                flex-direction: column;
                
            }
            @media(max-width: 720px){
                flex-direction: column;
                text-align: center;
            }
        }
        

        .cream{
            color: var(--bg-cream);
        }


        .social{
            flex-direction: row;
            justify-content: space-between;

            
            img{
                transition: 200ms all ease-in-out;

                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        
    }

    .footer-development{
        width: 100%;
        max-width: 1280px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        
        h3{
            font-size: .875rem;
            text-align: center;
            color: var(--bg-cream);
        
        }
        
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.25rem;

            margin: 1.25rem auto;

            img{
                max-width: 30px;
                width: 100%;

                &:hover{
                    background: var(--bg-button);
                    border-radius: 10%;
                    padding: 1px;
                    
                }
            }
        }

        &::before{
            content: '';

            max-width: 1200px;
            width: 100%;
            height: 4px;

            background: var(--bg-cream);

            margin-left: 0.625rem;
            margin-top: 10rem;

            @media(min-width: 721px) and (max-width: 1080px){
                margin-top: 6rem;
            }
            @media(max-width: 720px){
                margin-top: 4rem;
            }
        }
    
`

