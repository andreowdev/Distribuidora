import axios from 'axios';
import { ProdutoDTO } from '@/DTO/produtoDTO';

export class ProdutosDao {
    async getProdutos(): Promise<ProdutoDTO[]> {  
        try {
            const response = await axios.get("http://localhost:3001/produtos");
            return response.data;
        } catch (error) {
            console.error("Erro ao obter os produtos:", error);
            return []; 
        }
    }
}
