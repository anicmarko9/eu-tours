import type { Session } from "next-auth";
import type { GetServerSideProps, NextPage } from "next";
import Layout from "src/components/Layout";
import { getServerAuthSession } from "src/server/auth";

const Home: NextPage<{ data: Session | null }> = ({ data }) => {
  return (
    <Layout>
      <p>{data?.user?.name}</p>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await getServerAuthSession(ctx);
  return {
    props: { data },
  };
};
