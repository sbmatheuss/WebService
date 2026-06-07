import "./ItemLista.css";

const ItemLista = ({id, titulo, autor, ano, preco, foto, excluirClick, alterarClick}) => {
    
    return (
        <tr>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{ano}</td>
            <td className="text-end">
                <img src={foto} alt="Capa do Livro" width="75" />
            </td>
            <td className="text-end">{preco}</td>
            <td>
                <i className="exclui text-danger fw-bold" title="Excluir"
                 onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar"
                 onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    )
}
export default ItemLista;

