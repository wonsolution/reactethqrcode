import './App.css';
import EtherumQRCode from './EthereumQRCode';

function App() {
    return (
        <div className="App">
            <EtherumQRCode value={3} to={"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"} size={400} />
            <EtherumQRCode value={2} to={"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"} size={200} />
            <EtherumQRCode value={1} to={"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"} size={100} />
        </div>
    );
}

export default App;
