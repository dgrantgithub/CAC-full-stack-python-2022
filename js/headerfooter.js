let header = `
    
    <div class="container-encabezado">
        
        <div class="item1-encabezado">
            <p>Unitarios & Federales</p>
        </div>
        
        <div class="item2-encabezado">    
            <nav>
                <a href="/html/0index.html">Home</a>
                <a href="/html/1menu.html">Menú</a>
                <a href="/html/3contacto.html">Contacto</a>
            </nav>
        </div>

    </div>
`
document.getElementById("idheader").innerHTML = header

let footer = `
    
    <div class="container-pie">
        
        <div class="item0-pie">
            <h3 style="color: #E9EAEC; padding: 1vh 2.5vw">Unitarios & Federales</h4>    
        </div>
            
        <div class="subcontenedor-pie">
                
            <div class="item1-pie" style="padding: 1.5vh 5vw">
                
                <div> <h5>Dirección</h5>
                <h5>3 de febrero 1852, Caseros, Argentina</h5> </div>
                
                <div> <h5>Horario</h5>
                <h5>12 a 24 hs</h5> </div>
                
                </div>

            <div class="item2-pie" style="padding: 1.5vh 5vw">
                <h5><img src="/img/flaticon/telefono.png" width="5%"> 4321-1234</h5>
                <h5><img src="/img/flaticon/whatsapp.png" width="5%"> 15-1234-4321</h5>
                <h5><img src="/img/flaticon/facebook.png" width="5%"> @Unitarios&Federales</h5>
                <h5><img src="/img/flaticon/instagram.png" width="5%"> @Unitarios&Federales</h5>
            </div>
                    
        </div>

    </div>
`

document.getElementById("idfooter").innerHTML = footer