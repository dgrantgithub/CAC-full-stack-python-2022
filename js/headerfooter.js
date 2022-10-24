let header = `
<header>
    <div class="container">
        <a href="0index.html" class="logo"><p>Unitarios & Federales</p></a>
        <nav>
            <a href="1menu.html">Menú</a>
            <a href="2nosotros.html">Sobre Nosotros</a>
            <a href="3contacto.html">Contacto</a>
        </nav>
    </div>
</header>
`
document.getElementById("idheader").innerHTML = header

let footer = `
    
<div class="container-pie-y-copyright">
    <div class="container-pie">
        
        <div class="item0-pie">
            <h4>Unitarios & Federales</h4>    
        </div>
            
        <div class="subcontenedor-pie">
                
            <div class="item1-pie">
                
                <div> <h5>Dirección</h5>
                <h5>3 de febrero 1852, Caseros, Argentina</h5> </div>
                
                <div> <h5>Horario</h5>
                <h5>12 a 24 hs</h5> </div>
                
            </div>

            <div class="item2-pie">
                <h5><img src="/img/flaticon/telefono.png" width="5%"> 4321-1234</h5>
                <h5><img src="/img/flaticon/whatsapp.png" width="5%"> 15-1234-4321</h5>
                <h5><img src="/img/flaticon/facebook.png" width="5%"> @Unitarios&Federales</h5>
                <h5><img src="/img/flaticon/instagram.png" width="5%"> @Unitarios&Federales</h5>
            </div>
                    
        </div>

    </div>
    
    <div class="copyright">
        <small>&copy; 2022 <b>Unitarios & Federales</b> - Todos los Derechos Reservados </small>
    </div>
</div>
    
`

document.getElementById("idfooter").innerHTML = footer