function BlogPost({slug}: any) {
  return (
    <div>
      <h1>Viewing {slug}</h1>
    </div>
  );
}

export function getStaticProps(context: any) {
  const {slug} = context.params;

  return {
    params: {
      slug,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'first-post',
        },
      },
      {
        params: {
          slug: 'second-post',
        },
      },
      {
        params: {
          slug: 'third-post',
        },
      },
    ],
    fallback: true,
  };
}

export default BlogPost;
