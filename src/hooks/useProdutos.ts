import { ProdutosDao } from "@/repository/produtosDao";
import { useState, useEffect } from "react";
import { ProdutoDTO } from "@/DTO/produtoDTO";

export function useProdutos() {
  const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const produtosDao = new ProdutosDao();

    const fetchProdutos = async () => {
      try {
        const produtosData = await produtosDao.getProdutos();
        setProdutos(produtosData);
      } catch {
        setError("Erro ao carregar os produtos");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return { produtos, loading, error };
}
