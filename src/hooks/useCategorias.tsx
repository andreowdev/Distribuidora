import { CategoriaDAO } from "@/repository/categoriasDAO";
import { CategoriaDTO } from "@/DTO/categoriasDTO";
import { useState, useEffect } from "react";

export function useCategorias() {
    const [categorias, setCategorias] = useState<CategoriaDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const categoriasDao = new CategoriaDAO();

        const fetchCategorias = async () => {
            try {
                const categoriasData = await categoriasDao.getCategorias();
                setCategorias(categoriasData);
            } catch {
                setError("Erro ao carregar as categorias");
            } finally {
                setLoading(false);
            }
        };

        fetchCategorias();
    }, []);

    return { categorias, loading, error };
}