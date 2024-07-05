import NewPage from '@/containers/NewPage';

const DetailNewPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  return <NewPage slug={slug} />;
};
export default DetailNewPage;
