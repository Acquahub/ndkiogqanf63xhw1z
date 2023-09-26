import React from 'react';
import { Link } from 'react-router-dom';
import styles from './empresas.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Empresas() {
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Empresas"]}>
                
<div id="base-empresas-1aedc72966c44cf09d75825cf8225b28" className={"baseLayer hide-native-scrollbar " + styles["base-empresas-1aedc72966c44cf09d75825cf8225b28"]}   >
<div id="base-sostenibilidad-301710361cb1466fabe9ca06846bc570" className={"baseLayer hide-native-scrollbar " + styles["base-sostenibilidad-301710361cb1466fabe9ca06846bc570"]}   >
<div id="header-d81f2b444024464192475e2ee1e4fbb2" className={"baseLayer hide-native-scrollbar " + styles["header-d81f2b444024464192475e2ee1e4fbb2"]}   >
<div id="layer-12-1fade0bb8cc94274aa57b1c56ae6a083" className={"baseLayer hide-native-scrollbar " + styles["layer-12-1fade0bb8cc94274aa57b1c56ae6a083"]}   >
<Link to="/HomePage"><img id="imageview-1-f12eba9143214d18967174a3bb867137" className={"baseImageView " + styles["imageview-1-f12eba9143214d18967174a3bb867137"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-b88e08975317439480a7468b7f24282c" className={"baseLayer hide-native-scrollbar " + styles["layer-13-b88e08975317439480a7468b7f24282c"]}   >
<span id="6f3df4f0188b4ee2a8174cf068789bb1" className={"baseIcon " + styles["icon-1-6f3df4f0188b4ee2a8174cf068789bb1"]}  >menu</span>
</div>
<div id="layer-14-a1b342375f7040eca7df7b21010f6067" className={"baseLayer hide-native-scrollbar " + styles["layer-14-a1b342375f7040eca7df7b21010f6067"]}   >
<div id="layer-15-bd168834073a47f5a5214f63cf358486" className={"baseLayer hide-native-scrollbar " + styles["layer-15-bd168834073a47f5a5214f63cf358486"]}   >
<Link to="/Empresas"><div id="text-3-039a2d895a2049e1be1efc17811d71e2" className={"baseText " + styles["text-3-039a2d895a2049e1be1efc17811d71e2"]}   >Empresas</div></Link>
</div>
<div id="layer-16-7af8200e45944f08ab4c054682c43363" className={"baseLayer hide-native-scrollbar " + styles["layer-16-7af8200e45944f08ab4c054682c43363"]}   >
<Link to="/Contactanos"><div id="text-2-c8d766c7fb6a4f978e7df90473cf5669" className={"baseText " + styles["text-2-c8d766c7fb6a4f978e7df90473cf5669"]}   >Contactanos</div></Link>
</div>
<div id="layer-17-973ff82982f74f3394c3e3be3834cc93" className={"baseLayer hide-native-scrollbar " + styles["layer-17-973ff82982f74f3394c3e3be3834cc93"]}   >
<Link to="/Beneficios"><div id="text-4-b361d9cb72bb48e3aa4eb641528af2e2" className={"baseText " + styles["text-4-b361d9cb72bb48e3aa4eb641528af2e2"]}   >Beneficios</div></Link>
</div>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Empresas;
            