import React from 'react';
import { Link } from 'react-router-dom';
import styles from './beneficios.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Beneficios() {
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Beneficios"]}>
                
<div id="layer-331-3ad708cc3de64e9b8c3b00dd8ae7a3ca" className={"baseLayer hide-native-scrollbar " + styles["layer-331-3ad708cc3de64e9b8c3b00dd8ae7a3ca"]}   >
<div id="header-70d7dd171e07439da221ae96e7fb3531" className={"baseLayer hide-native-scrollbar " + styles["header-70d7dd171e07439da221ae96e7fb3531"]}   >
<div id="layer-12-c8160d62a9dc4173b9513726207acbe4" className={"baseLayer hide-native-scrollbar " + styles["layer-12-c8160d62a9dc4173b9513726207acbe4"]}   >
<Link to="/HomePage"><img id="imageview-1-7fb9cb963be144bc922935a3b7bf9a5b" className={"baseImageView " + styles["imageview-1-7fb9cb963be144bc922935a3b7bf9a5b"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-19fc5115527a4bcb8d73088b8c84c482" className={"baseLayer hide-native-scrollbar " + styles["layer-13-19fc5115527a4bcb8d73088b8c84c482"]}   >
<span id="3347c13729664c9fa1c9a414d7fc9f6c" className={"baseIcon " + styles["icon-1-3347c13729664c9fa1c9a414d7fc9f6c"]}  >menu</span>
</div>
<div id="layer-14-b331dc20302146e2852ce5f6ff7cb5cf" className={"baseLayer hide-native-scrollbar " + styles["layer-14-b331dc20302146e2852ce5f6ff7cb5cf"]}   >
<div id="layer-15-80c343d9dc2a4faf8e84b3c63fe8f4fa" className={"baseLayer hide-native-scrollbar " + styles["layer-15-80c343d9dc2a4faf8e84b3c63fe8f4fa"]}   >
<Link to="/Empresas"><div id="text-3-65ce2c63e4234cdb99f7abfdd6d92e82" className={"baseText " + styles["text-3-65ce2c63e4234cdb99f7abfdd6d92e82"]}   >Empresas</div></Link>
</div>
<div id="layer-16-4ddde3414e2e4241b4d3e1c15ed2cb50" className={"baseLayer hide-native-scrollbar " + styles["layer-16-4ddde3414e2e4241b4d3e1c15ed2cb50"]}   >
<div id="text-2-370d8d81b3994c45b1c59e651edc89aa" className={"baseText " + styles["text-2-370d8d81b3994c45b1c59e651edc89aa"]}   >Contactanos</div>
</div>
<div id="layer-17-5971592f599443b2926d527d2db9561d" className={"baseLayer hide-native-scrollbar " + styles["layer-17-5971592f599443b2926d527d2db9561d"]}   >
<div id="text-4-cc9592d702264d989196472376915e49" className={"baseText " + styles["text-4-cc9592d702264d989196472376915e49"]}   >Beneficios</div>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Beneficios;
            