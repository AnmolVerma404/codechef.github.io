import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from "next/image";

export const Nav = styled.div`
position: sticky;
display: flex;
background:#4a74f5;
top:0;
left:0;
flex-direction:row; 
justify-content: space-between;
align-items:center;
padding: 0.2rem;
z-index: 12;
`;


export const NavMenu = styled.div`
display: flex;
flex-direction:row;
width:fit-content;
margin-right:15rem;
@media screen and (max-width: 767px) {
	display: none;
}
`;

export const MobNav = styled.div`
    font-size: 2rem;
    margin-right: 2rem;

@media screen and (min-width: 767px) {
	display: none;
}    
`;

export const NavItem = styled.div`
    color:white;
    font-family:"-apple-system",sans-serif;
    font-size:1.5rem;
    width:fit-content;
    margin:5%;
  :hover{
     color:red;
     font-weight:bolder;
    }
  
   &:active {
      color: green;
      font-weight:bold;
  }

  @media screen and (max-width: 1024px){
      font-size:1.3rem;
      margin:3%;
  }
  @media  screen and (max-width: 768px) {
      font-size:1.1rem;
      margin:2%;
  }
`;

export const Logo = styled.img`
     width:90px;
     margin-bottom:2px;
     margin-left:3rem;
`;

export const Back = styled.img`
    min-height:200px;
    width:100%;
`;
export const BackImg = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
`;
