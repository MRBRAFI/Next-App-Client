import Link from "next/link";

export default async function AllProducts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div className="text-center h-screen">
      This is product page
      <div className="flex ">
        {data.map((user, i) => (
          <Link href={`/products/${user.id}`} key={i}>
            This is user : {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
