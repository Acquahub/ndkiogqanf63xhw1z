import React from 'react';
import { Link } from 'react-router-dom';
import styles from './carpooling.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Carpooling() {
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Carpooling"]}>
                
<div id="base-carpooling-f9b7db27055043768cd54515cd49b2b3" className={"baseLayer hide-native-scrollbar " + styles["base-carpooling-f9b7db27055043768cd54515cd49b2b3"]}   >
<div id="header-815625d1bd0d4a6291e4a0f24e0659f0" className={"baseLayer hide-native-scrollbar " + styles["header-815625d1bd0d4a6291e4a0f24e0659f0"]}   >
<div id="layer-12-e3e760d1d56e409cbaf77850bc38965b" className={"baseLayer hide-native-scrollbar " + styles["layer-12-e3e760d1d56e409cbaf77850bc38965b"]}   >
<Link to="/HomePage"><img id="imageview-1-0907da0e514647f0b88595e07600e92f" className={"baseImageView " + styles["imageview-1-0907da0e514647f0b88595e07600e92f"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-9d3157e2d25c4cbaa24565d830deb423" className={"baseLayer hide-native-scrollbar " + styles["layer-13-9d3157e2d25c4cbaa24565d830deb423"]}   >
<span id="c19ce77960444fcda7ee7ef7864d5451" className={"baseIcon " + styles["icon-1-c19ce77960444fcda7ee7ef7864d5451"]}  >menu</span>
</div>
<div id="layer-14-4d8594d95b1f4b6a85fd2a5679a5f530" className={"baseLayer hide-native-scrollbar " + styles["layer-14-4d8594d95b1f4b6a85fd2a5679a5f530"]}   >
<div id="layer-15-3b2c042525ea4eaf91023110ca2aa455" className={"baseLayer hide-native-scrollbar " + styles["layer-15-3b2c042525ea4eaf91023110ca2aa455"]}   >
<Link to="/Carpooling"><div id="text-3-c5abf13af3ef4278ad1cff0c5b8d1342" className={"baseText " + styles["text-3-c5abf13af3ef4278ad1cff0c5b8d1342"]}   >Carpooling</div></Link>
</div>
<div id="layer-16-3f14f7a7c0f3471e9ef5726ec539b9ff" className={"baseLayer hide-native-scrollbar " + styles["layer-16-3f14f7a7c0f3471e9ef5726ec539b9ff"]}   >
<Link to="/Ventajas"><div id="text-2-92f90c2f21df464196d4ec17e54b8332" className={"baseText " + styles["text-2-92f90c2f21df464196d4ec17e54b8332"]}   >Ventajas</div></Link>
</div>
<div id="layer-17-955a69db770e49aaa4beaa38a2f9667a" className={"baseLayer hide-native-scrollbar " + styles["layer-17-955a69db770e49aaa4beaa38a2f9667a"]}   >
<Link to="/Sostenibilidad"><div id="text-4-642acde0d8a045569748d8788df44c84" className={"baseText " + styles["text-4-642acde0d8a045569748d8788df44c84"]}   >Sostenibilidad</div></Link>
</div>
<div id="layer-100-2ef56a98d2e84d8b8551f641297090e5" className={"baseLayer hide-native-scrollbar " + styles["layer-100-2ef56a98d2e84d8b8551f641297090e5"]}   >
<Link to="/Ayuda"><div id="text-28-3cbf797c6246401c83b8bdc94f2aee09" className={"baseText " + styles["text-28-3cbf797c6246401c83b8bdc94f2aee09"]}   >Ayuda</div></Link>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Carpooling;
            