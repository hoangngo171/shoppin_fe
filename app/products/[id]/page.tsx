interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetail({
  params,
}: Props) {

  const { id } = await params;

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8080";

  const res = await fetch(
    `${apiUrl}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-purple-50 h-96 rounded-xl flex items-center justify-center text-8xl">
          🔋
        </div>

        <div>

          <h1 className="text-3xl font-bold text-purple-700">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-4">
            {product.desc}
          </p>

          <div className="mt-6">

            <span className="text-3xl font-black text-purple-700">
              {product.price}
            </span>

          </div>

          <button className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-lg">
            Thêm vào giỏ hàng
          </button>

        </div>

      </div>

    </div>
  );
}