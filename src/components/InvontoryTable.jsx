import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from 'konsta/react';
import { useSelector } from 'react-redux';

export default function InvontoryTable() {
  const inventory = useSelector(state=>state.inventory.inventory)
  console.log(inventory)
  return (
    <Table>
      <TableHead>
      <TableRow header>
        <TableCell header>Date</TableCell>
        <TableCell header className="text-right">
          Box N°
        </TableCell>
        <TableCell header className="text-right">
          Quantity
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {inventory.map(item=>(
        <TableRow key={item.title}>
          <TableCell>{item.date}</TableCell>
          <TableCell className="text-right">{item.title}</TableCell>
          <TableCell className="text-right">{item.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  );
}