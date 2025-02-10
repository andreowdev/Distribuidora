import axios from 'axios';
import { CategoriaDTO } from '@/DTO/categoriasDTO';

export class CategoriaDAO {
    async getCategorias(): Promise<CategoriaDTO[]> {
        try {
            const response = await axios.get("http://localhost:3001/categorias");
            return response.data;
        } catch(error) {
            console.error("Erro ao obter as categorias:", error);
            return[];
        }
    }
}