export default async function ProductsDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="text-center h-screen">
      <p>My name is : {data.name}</p>
      <p>My name email is : {data.email}</p>
      <p>My name id is : {data.id}</p>
    </div>
  );
}
