import styled from "styled-components";




export const Btn = styled.button`
  background: ${props => props.primary ? "#2C2D5B" : "transparent"};
  color: ${props => props.primary ? "white" : "#2C2D5B"};
  padding: 1.15rem 2.25rem;
  border: 1px solid #2C2D5B;
  border-radius: 0.5rem;
  display: inline-grid;
  place-items: center;
  outline: none;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;

  &:hover{
  background: #2C2D5BD9;
  color: white;
  }
`;


export const DefaultHeader = styled.div`
    text-transform: capitalize;
  h2{
    font-size: 2.25rem;
    /* font-weight: 700; */
    @media (max-width: 768px) { 
      font-size: 1.5rem;
     }	
    
    b{
      position: relative;
      display: inline-block;
      z-index: 10;
      line-height: 1;

      &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0px;
        right: 0px;
        /* margin: 0px auto; */
        bottom: -9px;
        background-color: #F67366;
        z-index: -1;
      }
    }
  }

`;


export const FieldSet = styled.fieldset`

  legend{
    color: #979797;
  }
  
  input{
    border-color: #979797;
    
  }
`;


// Services
export const ServicesDiv = styled.div`
  .icon{
    width: 60px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(151, 151, 151, 0.25);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #2C2D5B;
    /* gap: 2rem; */
  } 
  h5{
    text-transform: capitalize;
    color: #2C2D5B;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  p{
    color: #4F4F4F;
    font-size: 0.875rem;
  }
`;


export const OperationsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 90%;
  width: 100%;
  margin: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;

   }	

  .withNo{
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    h6{
      font-weight: 700;
      font-size: 2rem;
      color: #F67366;
    }
    span{
      background-color: #230B34;
      color: #FFF;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
  p{
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
  }
`;