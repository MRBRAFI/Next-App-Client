import Link from "next/link";

export default function AllProducts() {
  return (
    <div className="text-center h-screen">
      This is product page
      <div className="flex gap-52">
        <Link href="/products/1">Products 1</Link>
        <Link href="/products/2">Products 2</Link>
        <Link href="/products/3">Products 3</Link>
        <Link href="/products/4">Products 4</Link>
        <Link href="/products/5">Products 5</Link>
      </div>
    </div>
  );
}
