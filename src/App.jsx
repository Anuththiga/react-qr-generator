import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState();
  const [qrcode, setQrcode] = useState();

  const handleClick = () => {
    QRCode.toDataURL(
      url,
      {
        width: 600,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
        placeholder="e.g. http://google.com"
      />
      <button onClick={handleClick}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
