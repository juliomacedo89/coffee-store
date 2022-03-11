import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    background: var(--bg-cream);
    margin: 0;
    border: 1px solid var(--bg-cream);

`

export const Content = styled.div `
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;

    .brands-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 6.25rem 0 0;
        
        h2{
            display: flex;
            text-align: center;
            justify-content: space-between;

            font-size: 1.5rem;
            font-weight: 500;

            max-width: 1200px;
            width: 100%;
            
            color: var(--bg-button);

            @media(min-width: 320px) and (max-width: 1080px){
                font-size: 1.25rem;
            }
            
            &::before{
                content: '';
                max-width: 450px;
                width: 34%;
               
                height: 4px;
                background: var(--bg-button);
                margin-right: 0.625rem;
                margin-top: 1rem;

                @media(max-width: 720px){
                    margin-top: 1.75rem;
                }
            }

            &::after{
                content: '';
            
                max-width: 450px;
                width: 34%;
       
                height: 4px;
                background: var(--bg-button);
                margin-left: 0.625rem;
                margin-top: 1rem;

                @media(max-width: 720px){
                    margin-top: 1.75rem;
                }
            }
        }
    }

    .brands-show{
        max-width: 1210px;
        min-width: 280px;
        width: 100%;
        margin: 5rem auto 6.5rem;

        @media(max-width: 720px){
            max-width: 600px
            min-width: 600px
        }
        
        
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3.75rem;

            flex-wrap: wrap;

            @media(max-width: 720px){
                gap: 2rem;
                
                justify-content: center;
            }

            img{
                @media(max-width: 720px){
                    max-width: 170px;
                    width: 100%;
                }
                
            }

            
        }
    }  

`