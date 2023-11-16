import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Block
} from 'konsta/react';
import { useSelector } from 'react-redux';

export default function InvontoryTable() {
  const inventory = useSelector(state=>state.inventory.inventory)
  return (
  <Block strong inset className="space-y-4">
    <Table>
      <TableHead>
      <TableRow header>
        <TableCell header  colspan="2">Date</TableCell>
        <TableCell header className="text-right">
          Boite N°
        </TableCell>
        <TableCell header className="text-right">
          Quantity
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {inventory.map(item=>(
        <TableRow key={item.title}>
          <TableCell colspan="2">{item.date}</TableCell>
          <TableCell className="text-right">{item.title}</TableCell>
          <TableCell className="text-right">{item.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  </Block>
  );
}