import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import DefaultContent from '../components/defaultContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-image 3s;
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 33vh;
  font-size: 13px;
  word-spacing: 5px;
  right: 2%;

  @media screen and (min-width: 992px) {
    right: 7%;
    top: 35vh;
    font-size: 15px;
    word-spacing: 3px;
  }

  color: white;
  letter-spacing: 4px;
  line-height: 20px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const Prologue = () => {
  const TitleSrc = () => (
    <>
      <p>
        서동의 조그마한 빈집이 있었습니다.
        <br />
      </p>
      <p>
        오랫동안 버려지고 방치되었던 이 공간을
        <br />
        사랑하는 친구들과 연인들이 함께 추억을 나누는 곳으로 만들고 싶었죠.
      </p>
      <p>
        곰곰이 어린 시절을 회상해보며,
        <br />
        가족들과 함께 토요명화 를 보기위해,
        <br />
        텔레비젼 앞에 모였던 그때가 떠오르더라구요.
      </p>
      <p>그것이 서동영화의 시작이었습니다.</p>
      <p>
        누군가에게는 오래되고 낡은 공간일 뿐이겠지만,
        <br />
        또 다른 이에게는 추억과 사랑 그리고 나눔의 공간이 되기를.. <br />
      </p>
    </>
  );
  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/mainPhotos/1.JPG'
      seoTitle='프롤로그'
    ></DefaultContentLayout>
  );
};

export default Prologue;
