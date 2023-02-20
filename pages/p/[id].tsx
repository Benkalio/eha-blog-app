import { GetServerSideProps, GetStaticProps } from "next";
import prisma from "../../prisma/client";

export const getStaticProps: GetStaticProps = async () => {
  const post = await prisma.post.findMany({
    where: { published: true },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return {
    props: { post },
    revalidate: 1000,
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};