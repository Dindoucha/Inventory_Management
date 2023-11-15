import { useState } from "react";
import BarcodeScannerComponent from "./BarcodeScannerComponent";
import beepSound from "../assets/beep.mp3"
import { Block } from "konsta/react";
function BarcodeScanner() {
  const [data, setData] = useState("Not Found");

  const playBeepSound = () => {
    const audio = new Audio(beepSound);
    audio.play();
  };

  const handleScan = (err, result) => {
    if (result) {
      setData(result.text);
      playBeepSound();
    } else {
      setData("Not Found");
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
