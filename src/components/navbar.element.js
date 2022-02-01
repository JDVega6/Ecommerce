
import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;

   
    background: #A1FFCE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
    
`;

export const NavbarWrapper = styled.div`

width:100%;
max-width: 1250px;
height: 100%;
align-items: Center;
display: flex;
justify-content: space-between;
margin: auto;
`;

export const IconLogo = styled.div`
margin-left: 1rem;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-size: 1.5rem;
font-family: 'Gwendolyn', cursive;

p   {
    &:nth-child(2){
        font-size: 2rem;
        color:green;
    }

    &:nth-child(3){

        font-size: 1rem;
        font-weight: 500;
        color: green;
    }

}

svg{

    fill: green;
    margin-right: 0.1rem;
}
`;


export const Menu = styled.ul`

height: 100%;
display:flex;
justify-content: space-between;
list-style: none;

@media screen and (max-width: 960px){
 
    position:absolute;
    top: 70px;
    right: ${({ open }) => (open ? "0" : "100%")};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    background: #A1FFCE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
    
    transition: 2s all ease;

}

`;


export const MenuItem = styled.li`
height: 100%;


@media screen and (max-width: 960px){

width: 100%;
height: 70px;
display: flex;
justify-content:center;
align-items:center;
}

`;


export const MenuItemLink = styled.a`
display:flex;
justify-content: center;
align-items:center;
height:100%;
padding: 0rem 1rem;
color: #E8602A;
font-size: 1rem;
font-family: 'Source Sans 3', sans-serif;;
font-weight: 300;
cursor:pointer;
transition: 0.5s all ease;

&:hover{
    color: green;
    background: #A1FFCE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    transition: 0.5s all ease;
}

div {
    width: 100%;
    height: 100%;
    display: flex;
    align:center;
    justify-content: center;
    align-items:center;

    svg {
        display: none;
        fill: green;
        margin-right: 0.5rem;
    }
}



@media screen and (max-width: 960px){}
    width: 100%;

    div {
        width: 20%;
        justify-content: left;

        svg{
            display: flex;
        }
    }


`;



export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
display: flex;
align-items: center;
cursor:pointer;


&:hover{
    color: green;
    background: #A1FFCE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    transition: 0.5s all ease;
}

svg{
    fill: #e07924;
    margin-right:0.5rem;
}

}
`

