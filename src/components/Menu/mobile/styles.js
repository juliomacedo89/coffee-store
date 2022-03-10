import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    padding: .625rem 1rem;

    display: none;
    align-items: center;

    @media(max-width: 720px){
        display: flex;
        position: absolute;
        top: 0;
        /* z-index: 9999; */
    }

    .logo{
        width: 50%;

        img{
            width: 100%;
            max-width: 50px;
        }
    }

    .mobile{
        width: 50%;

        nav{
            width: 100%;

            ul{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 25%;

                li{
                    cursor: pointer;

                    img{
                        width: 100%;
                        max-width: 30px;
                    }
                }
            }
        }
    }


`