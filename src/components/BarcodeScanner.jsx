import { useDispatch } from 'react-redux';
import BarcodeScannerComponent from "./BarcodeScannerComponent";
import beepSound from "../assets/beep.mp3"
import { addItem } from '../InventorySlice';
import { Block } from "konsta/react";

function BarcodeScanner() {
  const dispatch = useDispatch()
  const handleAddItem = (title) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    dispatch(addItem({ title, date: formattedDate }));
  };
  
  const playBeepSound = () => {
    const audio = new Audio(beepSound);
    audio.play();
  };

  const handleScan = (err, result) => {
    if (result) {
      handleAddItem(result.text)
      playBeepSound();
    }
  };

  return (
    <Block strong inset className="space-y-4 h-4/6">  
      <BarcodeScannerComponent
        onUpdate={handleScan}
        delay={3000}
      />
    </Block>
  );
}

export default BarcodeScanner;
