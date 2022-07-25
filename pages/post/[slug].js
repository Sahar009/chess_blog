import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import {PortableText} from '@portabletext/react';
import { Toolbar } from '../../components/toolbar';
import { Footer } from '../../components/footer';
import { Subscribe } from '../../components/suscribe';

export const  Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'rqwr3d50',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Toolbar />
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.body}>
          <PortableText value={body} />
          
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://rqwr3d50.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      }
    }
  }
};

export default Post;