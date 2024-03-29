import * as C from './styles'; 
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem/index';

    
type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={25}>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={10}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={15}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width={10}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    );
}