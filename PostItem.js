import styled from "styled-components";

const PostItem = () => {
    return (
        <>
            <PostItemContainer>
                <PostImageContainer>
                    <link rel="stylesheet" type="text/css" href="style.css"></link>
                </PostImageContainer>
                <PostDataContainer>
                    <PostDataTitle>드래곤볼 에디션 : 아이폰X 직접 조립 후기</PostDataTitle>
                    <PostDataDate>Apr 11, 2020</PostDataDate>
                    <PostDataTag>#development</PostDataTag>
                </PostDataContainer>
            </PostItemContainer>
          
            
          
        </>
    )
}


const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
  
    margin: 50px 100px;
  
    display: flex;
    flex-direction: row;
`;

const PostImageContainer = styled.div`
    height: 150px;
    width: 150px;
    
    background-image: url(image.jpeg);
    background-position: top center;
`;

const PostDataContainer = styled.div`
    height: 130;
    width: 280;
  
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PostDataTitle = styled.p`
    color: rgb(22, 78, 171);
    font-size: 20px;
    font-weight: 700;
  
    margin: 0 0 20px 0;
    padding: 0;
`;

const PostDataDate = styled.p`
    color: lightgray;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

const PostDataTag = styled.p`
    color: lightgray;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

export default PostItem;
