export default async function ProductsDetails({ params }) {
  const { id } = await params;
  return (
    <div className="text-center h-screen">Products Details Page : {id}</div>
  );
}
