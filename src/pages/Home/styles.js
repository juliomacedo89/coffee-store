import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;


`

export const Content = styled.div `
    width: 100%;
    height: 100%;
    padding: 1.6rem 1.3rem;

    background-color: var(--bg-button);
 
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;


    .closeMobileModal{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        img{
            width: 100%;
            max-width: 20px;
        }
    }

    .mobileModalInteraction{
        width: 100%;

        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;

            li{
                a{
                    font-size: 1.5rem;

                    color: var(--bg-cream);
                }
            }
        }

    }

`