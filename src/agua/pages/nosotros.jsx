import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nosotros.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Nosotros() {
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Nosotros"]}>
                
<div id="base-nosotros-d21b945381b74190a139e20f1cb76fa6" className={"baseLayer hide-native-scrollbar " + styles["base-nosotros-d21b945381b74190a139e20f1cb76fa6"]}   >
<div id="header-ed4160f9f7dd47788282df0bb416f547" className={"baseLayer hide-native-scrollbar " + styles["header-ed4160f9f7dd47788282df0bb416f547"]}   >
<div id="layer-12-21c1d58662844750a5f80c5d6679799a" className={"baseLayer hide-native-scrollbar " + styles["layer-12-21c1d58662844750a5f80c5d6679799a"]}   >
<Link to="/Contactanos"><img id="imageview-1-afad5c5184cd4db3af0ac323865fcd83" className={"baseImageView " + styles["imageview-1-afad5c5184cd4db3af0ac323865fcd83"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-3f24d11b983a4c2580ce5927748b90a1" className={"baseLayer hide-native-scrollbar " + styles["layer-13-3f24d11b983a4c2580ce5927748b90a1"]}   >
<span id="48eb1dde9d4e4f1c859dec70bae1c214" className={"baseIcon " + styles["icon-1-48eb1dde9d4e4f1c859dec70bae1c214"]}  >menu</span>
</div>
<div id="layer-14-9de3551748614912a9b59f785b32ed36" className={"baseLayer hide-native-scrollbar " + styles["layer-14-9de3551748614912a9b59f785b32ed36"]}   >
<div id="layer-15-c11af479175f4d3e8ddb3516c0789405" className={"baseLayer hide-native-scrollbar " + styles["layer-15-c11af479175f4d3e8ddb3516c0789405"]}   >
<Link to="/Nosotros"><div id="text-3-9326cb4070c3487db248118a693a989d" className={"baseText " + styles["text-3-9326cb4070c3487db248118a693a989d"]}   >Nosotros</div></Link>
</div>
<div id="layer-16-7152006d72be4411a34ffc783eb58bcf" className={"baseLayer hide-native-scrollbar " + styles["layer-16-7152006d72be4411a34ffc783eb58bcf"]}   >
<Link to="/NuestraHistoria"><div id="text-2-8eff13edcdc2456c9cd502a162ae0415" className={"baseText " + styles["text-2-8eff13edcdc2456c9cd502a162ae0415"]}   >Nuestra Historia</div></Link>
</div>
<div id="layer-17-87f18a347e9b46ba93fe94425c6bca3d" className={"baseLayer hide-native-scrollbar " + styles["layer-17-87f18a347e9b46ba93fe94425c6bca3d"]}   >
<Link to="/Medios"><div id="text-4-dfb743d76e504f59bccaee363d3b1b2f" className={"baseText " + styles["text-4-dfb743d76e504f59bccaee363d3b1b2f"]}   >Medios</div></Link>
</div>
<div id="layer-100-24b76e5b949746b98e51b6b786a0793e" className={"baseLayer hide-native-scrollbar " + styles["layer-100-24b76e5b949746b98e51b6b786a0793e"]}   >
<Link to="/Blog"><div id="text-28-f0cd643e78ed4e45835b20d47cd1094c" className={"baseText " + styles["text-28-f0cd643e78ed4e45835b20d47cd1094c"]}   >Blog</div></Link>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Nosotros;
            