import { getAllProducts } from "@/data-access/products/get-products";
import Image from "next/image";

const GridProducts = async () => {
  const allProducts = await getAllProducts();
  return (
    <section className="grid grid-cols-1 gap-3 ">
      {allProducts.map((prod) => (
        <div key={prod.id_produto} className=" bg-white">
          <h3 className="bg-slate-800 text-white text-center">
            {prod.nome_produto}
          </h3>
          <div className="flex">
            {prod.foto_produto ? (
              <Image
                src={`${prod.foto_produto}`}
                alt="foto produto"
                width={200}
                height={200}
              />
            ) : (
              <p>sem imagem</p>
            )}

            <div>
              <p>{prod.descricao}</p>
              <p>{prod.preco}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GridProducts;
