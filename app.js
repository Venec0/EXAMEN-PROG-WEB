//VARIABLE QUE MANTIENE CARRITO VISIBLE

var Carritovisible=false;

//SE ESPERA A QUE LOS ELEMENTOS DE LA PÁGINA CARGUEN PARA QUE EJECUTE SCRIPT

if (document.readyState== 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){

    //SE AGREGA FUNCIONALIDAD AL BOTÓN DE ELIMINAR ITEM

    var botonesEliminarItem = document.getElementsByClassName('btn-delete');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }


    //SE AGREGA FUNCIONALIDAD AL BOTÓN SUMA

    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantid');
    for(var i=0;i<botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

    //SE AGREGA FUNCIONALIDAD AL BOTÓN RESTA

    var botonesRestarCantidad = document.getElementsByClassName('restar-cantid');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    //SE AGREGA FUNCIONALIDAD AL BOTÓN "AGREGAR AL CARRITO"

    var botonesAgregarAlCarrito = document.getElementsByClassName('buttom-item');
    for(var i=0;i<botonesAgregarAlCarrito.length; i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click',agregarAlCarritoClicked);
    }

    //SE AGREGA FUNCIONALIDAD AL BOTÓN "REALIZAR PAGO"

    document.getElementsByClassName('pay-button')[0].addEventListener('click', pagarClicked)
}

function pagarClicked(event){
    alert("GRACIAS POR SU COMPRA!");

    //SE ELIMINAN TODOS LOS ITEMS DEL CARRITO.

    var carritoItems = document.getElementsByClassName('shopping-cart-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}

//ELIMINACIÓN DEL ITEM DEL CARRITO.

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    actualizarTotalCarrito();

    ocultarCarrito();
}

//SE AUMENTA EN UNO LA CANTIDAD DE ITEM DEL CARRITO.

function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('item-cart-amount')[0].value);
    var cantidadActual = selector.getElementsByClassName('item-cart-amount')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('item-cart-amount')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

//SE RESTA EN UNO LA CANTIDAD DE ITEM DEL CARRITO.
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('item-cart-amount')[0].value);
    var cantidadActual = selector.getElementsByClassName('item-cart-amount')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('item-cart-amount')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('item-title')[0].innerText;
    console.log
    var precio = item.getElementsByClassName('item-price')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    //FUNCIÓN QUE AGREGA EL ITEM AL CARRITO, SE MANDA POR PARÁMETROS LOS VALORES.

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    //SE HACE VISIBLE EL CARRITO CUANDO SE AGREGA POR PRIMERA VEZ.

    hacerVisibleCarrito();

    //ACTUALIZA EL VALOR
    actualizarTotalCarrito();
}

function hacerVisibleCarrito(){
    Carritovisible = true;
    var carrito = document.getElementsByClassName('shopping-cart')[0];
    carrito.style.marginRight = '0';
    carrito.style = '1';

    var items = document.getElementsByClassName('items-container')[0];
    items.style.width = '60%';
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('shopping-cart-items')[0];

    //SE CONTROLA QUE EL ITEM QUE ESTA INGRESANDO SE ENCUENTRA YA EN EL CARRITO.

    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('cart-item-title');
    for(var i=0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito [i].innerText==titulo){
            alert("EL ITEM YA SE ENCUENTRA EN EL CARRITO.");
            return;
        }
    }
    
    //SE AGREGA EL ITEM AL CARRITO.

    var itemCarritoContenido = `
    <div class="item-cart">
        <img src="${imagenSrc}" alt="" width="80px">
        <div class="cart-item-details">
            <span class="cart-item-title">${titulo}</span>
            <div class="amount-selector">
                <i class="fa-solid fa-minus restar-cantid"></i>
                <input type="text" value="1" class="item-cart-amount" disabled>
                <i class="fa-solid fa-plus sumar-cantid"></i>
            </div>
            <span class="cart-item-price">${precio}</span>
        </div>
        <span class="btn-delete">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //FUNCIONALIDAD QUE PERMITE ELIMINAR EL NUEVO ITEM DEL CARRITO.

    item.getElementsByClassName('btn-delete')[0].addEventListener('click',eliminarItemCarrito);

    //FUNCIÓN QUE PERMITE SUMAR EL ITEM NUEVO DEL CARRITO.

    var botonSumarCantidad = item.getElementsByClassName('sumar-cantid')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //FUNCIÓN QUE PERMITE RESTAR EL ITEM NUEVO DEL CARRITO.

    var botonRestarCantidad = item.getElementsByClassName('restar-cantid')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);   
}

//FUNCIÓN QUE CONTROLA CUANDO HAY ITEMS EN EL CARRITO, SI NO HAY ESTE SE OCULTA.

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('shopping-cart-items')[0];
    if (carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('shopping-cart')[0];
        carrito.style.marginRight = '-30%'
        carrito.style.opacity = '0';
        Carritovisible = false;

        var items = document.getElementsByClassName('items-container')[0];
        items.style.width = '100%';
    }
}

//SE ACTUALIZA TOTAL DEL CARRITO:

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('shopping-cart')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('item-cart');
    var total =0;

    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('cart-item-price')[0];

        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('item-cart-amount')[0];
        console.log(cantidad);
        var cantidad = cantidadItem.value;
        total = total+(precio * cantidad);
    }
    total = Math.round(total*100)/100;
    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toLocaleString("es");
    }

/* VALIDACIONES */

//VALIDACIÓN QUE INDICA QUE SE AGREGÓ UN ITEM AL CARRITO.

    $(document).ready(function() {
        $('.buttom-item').click(function() {
          var itemTitle = $(this).siblings('.item-title').text();
          var itemPrice = $(this).siblings('.item-price').text();
          alert('Has agregado "' + itemTitle + '" al carrito. Precio: ' + itemPrice);
        });
      });

//VALIDACIÓN QUE OCULTA CARRITO DE COMPRAS.
    $(document).ready(function() {
        $('.shopping-cart').hide();
    });
//VALIDACIÓN QUE HACE APARECER Y DESAPARECER CARRITO DE COMPRAS AL APRETAR MI COMPRA.
    $(document).ready(function() {
        $('.btnMiCompra').click(function() {
          $('.shopping-cart').toggle();
        });
      });
      
/* COSAS POR HACER:

    TODO: REDIRECCIONAMIENTO DE PÁGINAS.
    TODO: INCORPORAR UNA BASE DE DATOS CON Y QUE FUNCIONE CON EL LOGIN DEL USUARIO.
    TODO: AGREGAR FUNCIÓN AL CARRITO EL CUAL SE ENCARGA DE UN PEQUEÑO CARRITO EN <HEADER> EL CUAL SE ENCARGA DE DESPLEGAR.
    TODO: AGREGAR VALIDACIONES.
    TODO: HACER QUE LOS PRODUCTOS NO APAREZCAN AUTOMÁTICAMENTE EN LA COMPRA. EL USUARIO ESTÁ EN EL DERECHO DE ESCOGER SU PROPIA COMPRA.

*/

/* COSAS HECHAS: 

    *AGREGADA FUNCIÓN REALIZAR PAGO.
    *AGREGADA FUNCIÓN DE AGREGAR ITEM AL CARRITO.
    *AGREGADO AJUSTES EN LA RESTA DEL ITEM.
    *AGREGADA FUNCIÓN SUMAR ITEM AL CARRITO.
    *AGREGADA FUNCIÓN DE RESTAR ITEM DEL CARRITO.
    *AGREGADO AJUSTES EN LA SUMA DE CANTIDAD DE LOS CARRITOS.
    *AGREGADO CARRITO COMPLETO A UN LADO.
    */