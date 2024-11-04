interface Iproducts {
  id_produto: number;
  nome_produto: string;
  descricao: string;
  preco: number;
  quantidade_estoque: number;
  id_categoria: number;
  cria_em: string;
  foto_produto: string;
}

export async function getAllProducts(): Promise<Iproducts[]> {
  const res = await fetch("http://localhost:3333/produtos", {
    next: {
      tags: ["all-products"],
    },
  });

  const resData = await res.json();

  return resData.dados;
}
