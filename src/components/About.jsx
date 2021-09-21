import React from "react";
import "./About.css";

export default function About (){
    return (
        <div className = "about">
           <h1> App Weather </h1>
           <h2>Creada por : Alejandro Jameson</h2>
           <h3>La aplicación Weather está diseñada especialmente para ser tan sencilla e intuitiva como sea posible. Con solo un clic usted recibirá las condiciones meteorológicas en su barra de estado en su localización actual.

                El estado del clima está magníficamente animado para que usted casi pueda experimentarlo, viendo cómo el tiempo cobra vida.

                La aplicación utiliza fuentes fiables de datos y las actualizaciones en vivo son realmente pequeñas para que usted no utilice su capacidad de datos.
           </h3>
           <img src="https://www.tn23.tv/wp-content/uploads/2020/03/120.jpg" alt="" />
        </div>
    )
}