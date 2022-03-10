import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    background: var(--bg-cream);
    margin: 0;
    border: 1px solid var(--bg-cream); //ENTENDER!
`

export const Content = styled.div `
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;

    .store-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 5rem 0 3.75rem;
        
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
            }

            &::after{
                content: '';
            
                max-width: 450px;
                width: 34%;
       
                height: 4px;
                background: var(--bg-button);
                margin-left: 0.625rem;
                margin-top: 1rem;
            }
        }
    }

    .products-show{
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        
        display: flex;
        align-items: center;
        justify-content: center;

        flex-wrap: wrap;
    
        gap: 2.5rem;
        padding: 0 1rem;

        overflow: visible;


        @media(min-width: 320px) and (max-width: 1080px){
            overflow-x: scroll;
            flex-wrap: nowrap;

            justify-content: space-between;
            gap: 1rem;

            &::-webkit-scrollbar{
                display: none;
            }
        }

        // -----------------CAROUSEL ----------------
        
        /* .carousel-root{
            max-width: 1200px;
            min-width: 800px;
            width: 100%;

            padding: 0 1rem;
        }
        
        .carousel.carousel-slider {
            overflow: visible;
            max-width: 1200px;
            min-width: 800px;
            width: 100%;
            margin-left: -10px;
        }

        .slider-wrapper.axis-horizontal{
            overflow: hidden;
            ul{
                max-width: 1200px;
                min-width: 800px;

                overflow: visible;
                
                margin-left: -50px;
            }
        }

        .carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
            height: 50px;
            
            background: transparent;

            right: 1.5%;
            top: 98%;

            @media(min-width: 721px) and (max-width: 1080px){
                display:none;
            }
        }

        .carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
            height: 50px;

            background: transparent;

            left: 1%;
            top: 98%;

            @media(min-width: 721px) and (max-width: 1080px){
                display:none;
            }

        }

        .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
            opacity: 1;
        }

        .carousel .control-next.control-arrow:before {
            content: '';

            border: solid var(--bg-button);
            border-width: 0 5px 5px 0;

            display: inline-block;

            padding: 0.625rem;

            margin-left: 0px;

            transform: rotate(-45deg);

            -webkit-transform: rotate(-45deg);
        }

        .carousel .control-prev.control-arrow:before {
            content: '';

            border: solid var(--bg-button);
            border-width: 0 5px 5px 0;

            display: inline-block;

            padding: 0.625rem;


            transform: rotate(135deg);
            
            -webkit-transform: rotate(135deg);
        }

        .carousel-status{
            display: none;
        }

        .control-dots{
            margin-bottom: -60px;
            @media(min-width: 721px) and (max-width: 1080px){
                display:none;
            }
        }

        .dot {
            background: var(--bg-button);

        }

        .slider.animated{
            height: 500px;
            align-items: center;
        } */
        // -------------------------------------------------

        .product-item{
            min-width: 260px;
            max-width: 260px;
            width: 100%;
            height: 450px;

            display: flex;
            flex-direction: column;
            
            padding: 1rem;
            border: 0;
            box-shadow: 0px 0px 15px  rgba(0, 0, 0, 0.4);
            border-radius: 25px;

            background: var(--bg-brown);


            @media(min-width: 320px) and (max-width: 1080px){
                min-width: 230px;
            }

            .product-image{
                max-width: 230px;
                width: 100%;
                height: 150px;

                margin-bottom: 0.625rem;
               
                img{
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
            }
        
        
            .presentation{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                
                gap: 10px;

                max-width: 230px;
                width: 100%;

                margin-bottom: 3.125rem;
            

                .product-title{
                    font-size: 1.625rem;
                    font-weight: 700;
                    
                    color: #fff;
                }

                .product-description{
                    font-size: 0.75rem;
                    line-height: 1.375rem;
                    font-weight: 400;
                    text-align: start;
                    
                    color: var(--bg-cream); 
                }
            }
        
            .product-sale{
                display: flex;
                align-items: center;
                justify-content: space-between;

                max-width: 230px;
                width: 100%;
            

                .product-price{
                    font-size: 1.375rem;
                    font-weight: 700;

                    color: #fff;
                }  

                .product-order{
                    max-width: 120px;

                    padding: .5rem 1.125rem;
                    border: 0;
                    border-radius: 10px;

                    background: var(--bg-button);

                    font-size: 1rem;
                    font-weight: 700;
                    color: #EFEFF5;

                    transition: filter 200ms;

                    &:hover{
                        background: var(--bg-cream);
                        color: var(--bg-brown);
                    }
                }
            
            }       
        }
    }

    

`