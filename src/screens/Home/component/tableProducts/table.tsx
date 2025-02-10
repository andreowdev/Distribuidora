import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { useProdutos } from "@/hooks/useProdutos";
export default function TableHome() {
  const { produtos, loading, error } = useProdutos();
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table>
      <TableCaption>Lista de Produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Quantidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {produtos.map((produto) => (
          <TableRow key={produto.idProduto}>
            <TableCell>{produto.idProduto}</TableCell>
            <TableCell>{produto.nomeProduto}</TableCell>
            <TableCell>R${produto.preco},00</TableCell>
            <TableCell>{produto.quantidade }</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
