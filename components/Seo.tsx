import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 서동영화</title>
      ) : (
        <title>서동영화-부산오티티룸</title>
      )}
    </Head>
  );
}
