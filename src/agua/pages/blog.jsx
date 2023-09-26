import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';
import AguaNotOverwritable from '../../aguaNotOverwritable';



function Blog() {
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Blog"]}>
                
<div id="layer-153-bd1a4cc7182041d4af526a80f98832b7" className={"baseLayer hide-native-scrollbar " + styles["layer-153-bd1a4cc7182041d4af526a80f98832b7"]}   >
<div id="header-c52749d738af4cb2aeb1f3958a36dd14" className={"baseLayer hide-native-scrollbar " + styles["header-c52749d738af4cb2aeb1f3958a36dd14"]}   >
<div id="layer-12-d5f835997d214f4bae09156b1edd9f56" className={"baseLayer hide-native-scrollbar " + styles["layer-12-d5f835997d214f4bae09156b1edd9f56"]}   >
<Link to="/HomePage"><img id="imageview-1-048ea018f16847af940f6b0816fd6d56" className={"baseImageView " + styles["imageview-1-048ea018f16847af940f6b0816fd6d56"]}  alt="imageview-1" src='/assets/vai-logo.png'  /></Link>
</div>
<div id="layer-13-b8f8f405ed314cc7acb1a778a80600d0" className={"baseLayer hide-native-scrollbar " + styles["layer-13-b8f8f405ed314cc7acb1a778a80600d0"]}   >
<span id="87c698c880d741dca21bc27cea73f07b" className={"baseIcon " + styles["icon-1-87c698c880d741dca21bc27cea73f07b"]}  >menu</span>
</div>
<div id="layer-14-3773c8c51c184cfa98c5c41969ceccd8" className={"baseLayer hide-native-scrollbar " + styles["layer-14-3773c8c51c184cfa98c5c41969ceccd8"]}   >
<div id="layer-15-200fdb66052a4e2c9004a7d94e09a35e" className={"baseLayer hide-native-scrollbar " + styles["layer-15-200fdb66052a4e2c9004a7d94e09a35e"]}   >
<Link to="/Nosotros"><div id="text-3-0573d9edfe3c4a0e8603881bd1f43605" className={"baseText " + styles["text-3-0573d9edfe3c4a0e8603881bd1f43605"]}   >Nosotros</div></Link>
</div>
<div id="layer-16-933e445af05040e791d59ee54393480d" className={"baseLayer hide-native-scrollbar " + styles["layer-16-933e445af05040e791d59ee54393480d"]}   >
<Link to="/NuestraHistoria"><div id="text-2-4c1320068e294fadab680cbcd4c7fccc" className={"baseText " + styles["text-2-4c1320068e294fadab680cbcd4c7fccc"]}   >Nuestra Historia</div></Link>
</div>
<div id="layer-17-8b22875b5b214f9cb60aa9e2c8f98c82" className={"baseLayer hide-native-scrollbar " + styles["layer-17-8b22875b5b214f9cb60aa9e2c8f98c82"]}   >
<Link to="/Medios"><div id="text-4-47613fba94b4455e89cd58392a7ada32" className={"baseText " + styles["text-4-47613fba94b4455e89cd58392a7ada32"]}   >Medios</div></Link>
</div>
<div id="layer-100-b755eb1e058e4867af04d216160a258d" className={"baseLayer hide-native-scrollbar " + styles["layer-100-b755eb1e058e4867af04d216160a258d"]}   >
<Link to="/Blog"><div id="text-28-a909e7dcca674e7e9dfd7b4a82042715" className={"baseText " + styles["text-28-a909e7dcca674e7e9dfd7b4a82042715"]}   >Blog</div></Link>
</div>
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Blog;
            