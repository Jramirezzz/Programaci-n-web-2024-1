import React from "react"
export function Carrete(){
    return(
      
        <div class="container">
  
  <div id="theCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#theCarousel" data-slide-to="1"></li>
      <li data-target="#theCarousel" data-slide-to="2"></li>
      <li data-target="#theCarousel" data-slide-to="3"></li>
      
    </ol>

    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="http://www.bcu.ac.uk/mediaitem/visual-communication-illustration-02-130585258441045504.jpg?quality=90" alt="Ilustracion" /> 
         <div class="carousel-caption d-none d-md-block">
    <h3>Gusti Ilustración</h3>
    <p>Exposición</p>
  </div>
      </div>

     
    
      <div class="item">
        <img src="https://ugc.kn3.net/i/origin/http://thisiscolossal.com/wp-content/uploads/2011/02/anthony-2-600x424.jpg" alt="fotografia" width="600" height="424"/> 
         <div class="carousel-caption d-none d-md-block">
    <h3> Xataka Fotografía</h3>
    <p>Concurso</p>
  </div>
      </div>

     <div class="item">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e86e8b59124321.5a15e4ccd8622.jpg" alt="pintura" width="600" height="424"/>
         <div class="carousel-caption d-none d-md-block">
    <h3>DoArt Pintura</h3>
    <p>Curso</p>
  </div>
      </div>
       <div class="item">
        <img src="https://cdn.dribbble.com/users/324248/screenshots/3978513/planet2_800.jpg" alt="diseno" width="600" height="424"/> 
         <div class="carousel-caption d-none d-md-block">
    <h3>UX UI Diseño Gráfico</h3>
    <p>Curso</p>
  </div>
      </div>


    <a class="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">anterior</span>
    </a>
    <a class="right carousel-control" href="#theCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">siguiente</span>
    </a>
  </div>
</div>


      </div>
    )
  } 