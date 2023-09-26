import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ayuda.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Ayuda() {
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Ayuda"]}>
                
<div id="base-ayuda-762de92433ce42d6b1a1f1923b2c7131" className={"baseLayer hide-native-scrollbar " + styles["base-ayuda-762de92433ce42d6b1a1f1923b2c7131"]}   >
<div id="header-87318423c5bb493b9aaaf472380965f8" className={"baseLayer hide-native-scrollbar " + styles["header-87318423c5bb493b9aaaf472380965f8"]}   >
<div id="layer-12-df27723e13984232ac01cfd20c2f64c7" className={"baseLayer hide-native-scrollbar " + styles["layer-12-df27723e13984232ac01cfd20c2f64c7"]}   >
<Link to="/HomePage"><img id="imageview-1-68e535147fda411cadd189977f573297" className={"baseImageView " + styles["imageview-1-68e535147fda411cadd189977f573297"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-4cf3be5a078f4398b41f8a4c7b4c9deb" className={"baseLayer hide-native-scrollbar " + styles["layer-13-4cf3be5a078f4398b41f8a4c7b4c9deb"]}   >
<span id="66d026095a554fa49dfabbbc7d6ee677" className={"baseIcon " + styles["icon-1-66d026095a554fa49dfabbbc7d6ee677"]}  >menu</span>
</div>
<div id="layer-14-9cce69fd1d1b42b2bcb485c558fda034" className={"baseLayer hide-native-scrollbar " + styles["layer-14-9cce69fd1d1b42b2bcb485c558fda034"]}   >
<div id="layer-15-36cd3bb913124bada2f6d1d5037da3fe" className={"baseLayer hide-native-scrollbar " + styles["layer-15-36cd3bb913124bada2f6d1d5037da3fe"]}   >
<Link to="/Carpooling"><div id="text-3-6c88a132680c448fb8bb344f43d40be0" className={"baseText " + styles["text-3-6c88a132680c448fb8bb344f43d40be0"]}   >Carpooling</div></Link>
</div>
<div id="layer-16-55f39b87465446df917a034b9a1c04dc" className={"baseLayer hide-native-scrollbar " + styles["layer-16-55f39b87465446df917a034b9a1c04dc"]}   >
<Link to="/Ventajas"><div id="text-2-e19639166f944e5fb674291bf5e2b68e" className={"baseText " + styles["text-2-e19639166f944e5fb674291bf5e2b68e"]}   >Ventajas</div></Link>
</div>
<div id="layer-17-a0da9053b1324138ae043ecbf127487d" className={"baseLayer hide-native-scrollbar " + styles["layer-17-a0da9053b1324138ae043ecbf127487d"]}   >
<Link to="/Sostenibilidad"><div id="text-4-25b1173fa70b4b9da757cbb260827bf8" className={"baseText " + styles["text-4-25b1173fa70b4b9da757cbb260827bf8"]}   >Sostenibilidad</div></Link>
</div>
<div id="layer-100-0e684442501249839c0ffec6e1597a08" className={"baseLayer hide-native-scrollbar " + styles["layer-100-0e684442501249839c0ffec6e1597a08"]}   >
<Link to="/Ayuda"><div id="text-28-6579c3c9e39c4dd58209454e3b7c01ac" className={"baseText " + styles["text-28-6579c3c9e39c4dd58209454e3b7c01ac"]}   >Ayuda</div></Link>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Ayuda;
            