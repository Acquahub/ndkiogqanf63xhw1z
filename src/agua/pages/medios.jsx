import React from 'react';
import { Link } from 'react-router-dom';
import styles from './medios.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Medios() {
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Medios"]}>
                
<div id="layer-154-2b40e79c805744f7b45baf9f64b67b11" className={"baseLayer hide-native-scrollbar " + styles["layer-154-2b40e79c805744f7b45baf9f64b67b11"]}   >
<div id="header-d1a7f1095dfe4b519c8594efae51f291" className={"baseLayer hide-native-scrollbar " + styles["header-d1a7f1095dfe4b519c8594efae51f291"]}   >
<div id="layer-12-aec68a66da0f432caabd4f7ee92a1288" className={"baseLayer hide-native-scrollbar " + styles["layer-12-aec68a66da0f432caabd4f7ee92a1288"]}   >
<Link to="/Blog"><img id="imageview-1-757fb1ea2d1c418595ef8b1644e66ff5" className={"baseImageView " + styles["imageview-1-757fb1ea2d1c418595ef8b1644e66ff5"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-8260c6cb82c74880a52c2d28878a5374" className={"baseLayer hide-native-scrollbar " + styles["layer-13-8260c6cb82c74880a52c2d28878a5374"]}   >
<span id="1b2bed7f43044f2997a7fe122fa13f76" className={"baseIcon " + styles["icon-1-1b2bed7f43044f2997a7fe122fa13f76"]}  >menu</span>
</div>
<div id="layer-14-24b7b31b34db42cfbadde728789ca258" className={"baseLayer hide-native-scrollbar " + styles["layer-14-24b7b31b34db42cfbadde728789ca258"]}   >
<div id="layer-15-e55da1ca377c44998f1519caf99b7ea2" className={"baseLayer hide-native-scrollbar " + styles["layer-15-e55da1ca377c44998f1519caf99b7ea2"]}   >
<Link to="/Nosotros"><div id="text-3-16a192126ad24ea680a08ac417101060" className={"baseText " + styles["text-3-16a192126ad24ea680a08ac417101060"]}   >Nosotros</div></Link>
</div>
<div id="layer-16-c134adcbf022448a8979b36347d73eb1" className={"baseLayer hide-native-scrollbar " + styles["layer-16-c134adcbf022448a8979b36347d73eb1"]}   >
<Link to="/NuestraHistoria"><div id="text-2-665a8ca593fb47c0a70044a2e65e6ab8" className={"baseText " + styles["text-2-665a8ca593fb47c0a70044a2e65e6ab8"]}   >Nuestra Historia</div></Link>
</div>
<div id="layer-17-195baaa59967496eb74afd40bad518cd" className={"baseLayer hide-native-scrollbar " + styles["layer-17-195baaa59967496eb74afd40bad518cd"]}   >
<Link to="/Medios"><div id="text-4-3743c46eb20e439bbb263ea6326048f1" className={"baseText " + styles["text-4-3743c46eb20e439bbb263ea6326048f1"]}   >Medios</div></Link>
</div>
<div id="layer-100-614f0646548e4803b25964f734abd0ed" className={"baseLayer hide-native-scrollbar " + styles["layer-100-614f0646548e4803b25964f734abd0ed"]}   >
<div id="text-28-b7f4bcbb31674ed5872329a67e471b1b" className={"baseText " + styles["text-28-b7f4bcbb31674ed5872329a67e471b1b"]}   >Blog</div>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Medios;
            