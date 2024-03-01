import './Filtre.css';

function Filtre(props) {
  
  return (
    <div>
      {/* <button className="burger-btn">&#9776;</button> */}
        <ul className="menu-list">
            <li>
                <button onClick={() => props.handleFiltre('Réalisateur alphabétique (A-Z)')}>
                    Réalisateur alphabétique (A-Z)
                </button>
            </li>
            <li>
                <button onClick={() => props.handleFiltre('Réalisateur alphabétique (Z-A)')}>
                    Réalisateur alphabétique (Z-A)
                </button>
            </li>
            <li>
                <button onClick={() => props.handleFiltre('Titre alphabétique (A-Z)')}>
                    Titre alphabétique (A-Z)
                </button>
            </li>
            <li>
                <button onClick={() => props.handleFiltre('Titre alphabétique (Z-A)')}>
                    Titre alphabétique (Z-A)
                </button>
            </li>
            <li>
                <button onClick={() => props.handleFiltre('Par année (du plus récent)')}>
                    Par année (du plus récent)
                </button>
            </li>
            <li>
                <button onClick={() => props.handleFiltre('Par année (du plus ancien)')}>
                    Par année (du plus ancien)
                </button>
            </li>
        </ul>
    </div>
  
  );
}


export default Filtre;
