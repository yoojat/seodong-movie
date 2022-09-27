import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '서동영화-부산오티티룸',
  keyword = '부산공유주방, 부산모임공간, 부산베이킹공방, 부산공간대여, 부산파티룸, 부산장소대여, 부산대공유주방, 부산대장소대여, 부산대모임공간부산대DVD,부산넷플릭스카페,부산넷플릭스,부산모임공간,부산공간대여,부산파티룸,부산장소대여,부산오티티,부산커플데이트,부산대장소대여,부산대모임공간',
  contents = '힙한 동네 서동에 위치한 프라이빗 공간대여 서동영화 입니다. 부산넷플릭스, 오티티룸, 모임공간, 커플데이트 등으로 많은분들이 이용하고 계세요! ',
}: Props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='keywords' content={keyword} />
      <meta name='Distribution' content='creplay' />
      <meta name='Copyright' content='creplay' />
      <meta name='robots' content='idnex,follow' />
      <meta content={contents} />
      <meta name='description' content={contents} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='서동영화' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={contents} />
      <meta property='og:image' content='/mainPhotos/2.JPG' />
      <meta property='og:url' content='https://seodong-movie.vercel.app/' />
      <meta property='al:ios:url' content='applinks://docs' />
      <meta property='al:ios:app_store_id' content='12345' />
      <meta property='al:ios:app_name' content='App Links' />
      <meta property='al:android:url' content='applinks://docs' />
      <meta property='al:android:app_name' content='App Links' />
      <meta property='al:android:package' content='org.applinks' />
      <link rel='canonical' href='https://seodong-movie.vercel.app/' />

      <meta
        property='al:web:url'
        content='http://applinks.org/documentation'
      ></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
