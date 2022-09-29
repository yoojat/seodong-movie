import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useState } from 'react';
import useScroll from '../hooks/useScroll';
import Divider from '../components/Divider';

const ContentContainer = styled.div`
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 1280px;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  height: 100px;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: right;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  width: 80%;
  min-width: 600px;
  @media screen and (max-width: 992px) {
    width: 100%;
    min-width: inherit;
  }
  max-width: 1100px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div<{ photoUrl: string; innerWidth: number }>`
  background-image: url(${(props) => props.photoUrl});
  width: 30%;
  height: 240px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.innerWidth * 6) / 10}px;
  }
  background-size: cover;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 992px) {
    cursor: inherit;
    &:hover {
      opacity: inherit;
    }
  }
`;
const TextContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;

const TextContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

// 992px

const images = [
  '/mainPhotos/1.JPG',
  '/mainPhotos/2.JPG',
  '/mainPhotos/3.JPG',
  '/mainPhotos/4.JPG',
  '/mainPhotos/5.JPG',
  '/mainPhotos/6.JPG',
  '/mainPhotos/7.JPG',
  '/mainPhotos/8.JPG',
  '/mainPhotos/9.JPG',
  '/mainPhotos/10.JPG',
  '/mainPhotos/11.JPG',
  '/mainPhotos/12.png',
];

const Yoohee = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoPopUp, setIsPhotoPopUp] = useState(false);
  const { innerWidth } = useScroll();
  const TitleSrc = () => (
    <div>
      홍콩 영화들과 다양한 게임으로
      <br />
      즐길거리와 분위기를 모두 느낄 수 있는 공간
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/yoohee.png'
      seoTitle='즐길거리'
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>공간도 이미지</ContentItem>
        <Divider />
        <Space />
        <ContentItem>
          <PhotoSection>
            <PhotoContainer>
              {images.map((image, index) => (
                <PhotoItem
                  key={index}
                  photoUrl={image}
                  innerWidth={innerWidth}
                  onClick={() => {
                    if (innerWidth > 992) {
                      setIsPhotoPopUp(true);
                      setPhotoIndex(index);
                    }
                  }}
                />
              ))}
            </PhotoContainer>
          </PhotoSection>
        </ContentItem>

        <TextContainer>
          <TextContentCol>
            <TextContentRow>
              <p>노을이 예쁜 동네, 서동에 위치해 있어요.</p>
              <p>
                &apos;서동영화&apos;는 오직 여러분을 위해 만들어진 프라이빗
                공간입니다.
              </p>
              <p>
                왕가위 감독의 중경삼림, 화양영화, 해피투게더를 모티브로 공간을
                꾸며 보았어요.
              </p>
              <p>
                또는 공연실황, 닌테도 스위치, 스포츠경기, 넷플릭스, 유튜브 등도
                즐겨봐요!
              </p>
              <p>
                혼자서도 방문해주시고, 커플, 친구들도 함께 오셔서 이용하세요.
              </p>
              <p>
                간단한 취사도 가능하고, 외부 음식과 배달음식 반입도 가능해요!
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>서동영화의 작은 방은 사진관으로 꾸며봤어요.</p>
              <p>
                다채로운 조명과 색감을 통해, 이색적인 분위기를 연출해봤는데요.
              </p>
              <p>한편의 영화를 관람하신 후,</p>
              <div>연인, 친구들과 한컷의 사진을 찍어봐요!</div>
              <p>
                사진관 뿐만 아니라, 공간 곳곳에서의 예쁜 사진들을 찍어보시는것도
                추천드려요
              </p>
            </TextContentRow>
          </TextContentCol>
          <TextContentCol>
            <TextContentRow>
              <p>비치물품</p>
              <p>
                <ul>
                  <li>
                    - 빔프로젝터, 태블릿, 삼각대, 스피커, 냉난방기, 와이파이,
                    스튜디오조명, 촬영소품, 3인용 쇼파 등
                  </li>
                  <li>- 와인잔, 젓가락, 와인오프너, 전자렌지, 냄비, 가위 등</li>
                </ul>
                <br />
                <br />
                <br />
              </p>
              <p>안내사항</p>
              <p>
                <ul>
                  <li>
                    - 넷플릭스, 유튜브, 왓챠, 디즈니플러스 등 개인계정으로
                    사용가능합니다.
                  </li>
                  <li>
                    - 간단한 취사가 가능하며, 외부 음식과 배달음식 반입이
                    가능합니다.
                  </li>
                  <li>
                    - 숙박업소가 아니기에 침구류, 어메니티 제공이 되지 않습니다.
                  </li>
                  <li>- 내부에 화장실이 있습니다.</li>
                  <li>
                    - 영상 송출을 위한 노트북, 블루레이 등은 직접 가져오셔야
                    합니다.
                  </li>
                  <li>
                    - 공간 사용 후, 전열기기 전원을 꺼주시고, 설거지와 정리정돈
                    부탁드립니다.
                  </li>
                  <li>
                    - 무인으로 운영되는 숙소의 특성상, 방범을 위해 CCTV가
                    설치되어있습니다.
                  </li>
                  <li>
                    - 방역업체와의 계약을 통해, 주기적으로 소독 작업을 하고
                    있습니다.
                  </li>
                </ul>

                <br />
                <br />
              </p>
            </TextContentRow>
          </TextContentCol>
        </TextContainer>
        <TextContainer></TextContainer>
      </ContentContainer>
      {isPhotoPopUp && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoPopUp(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </DefaultContentLayout>
  );
};

export default Yoohee;
