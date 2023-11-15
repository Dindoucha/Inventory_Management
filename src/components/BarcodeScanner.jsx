import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import beepSound from "../assets/beep.mp3"

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
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={handleScan}
        delay={3000}
      />
      <p>{data}</p>
    </>
  );
}

export default BarcodeScanner;
