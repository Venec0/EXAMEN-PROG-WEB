//VARIABLE QUE MANTIENE CARRITO VISIBLE

var Carritovisible=false;

//SE ESPERA A QUE LOS ELEMENTOS DE LA PÁGINA CARGUEN PARA QUE EJECUTE SCRIPT

if(document.readyState=='loading'){
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
        button.addEventListener('click',restarCantidad);

    //SE AGREGA FUNCIONALIDAD AL BOTÓN "AGREGAR AL CARRITO"

    var botonesAgregarAlCarrito = document.getElementsByClassName('buttom-item');
    for(var i=0;i<botonesAgregarAlCarrito.length; i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click',agregarAlCarritoClicked);
    }
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
    var imagenSrc = item.getElementsByClassName('img-item').src;
    console.log(imagenSrc);

    //FUNCIÓN QUE AGREGA EL ITEM AL CARRITO, SE MANDA POR PARÁMETROS LOS VALORES.

    agregarItemAlCarrito(titulo, precio, imagenSrc);
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('shopping-cart-items')[0];

    //SE CONTROLA QUE EL ITEM QUE ESTA INGRESANDO NO SE ENCUENTRA YA EN EL CARRITO.

    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('cart-item-title');
    for(var i=0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito [i].innerText==titulo){
            alert("EL ITEM YA SE ENCUENTRA EN EL CARRITO.");
        }
    }
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
}
/* COSAS POR HACER:

    TODO: AGREGAR FUNCIÓN DE AGREGAR ITEM AL CARRITO.
    TODO: AGREGAR FUNCIÓN REALIZAR PAGO.
    TODO: REDIRECCIONAMIENTO DE PÁGINAS.
    TODO: INCORPORAR UNA BASE DE DATOS CON Y QUE FUNCIONE CON EL LOGIN DEL USUARIO.
    TODO: AGREGAR FUNCIÓN AL CARRITO EL CUAL SE ENCARGA DE UN PEQUEÑO CARRITO EN <HEADER> EL CUAL SE ENCARGA DE DESPLEGAR
    TODO EL CARRITO COMPLETO A UN LADO.

*/

/* COSAS HECHAS: 
    
    *AGREGAR AJUSTES EN LA RESTA DEL ITEM.
    *AGREGAR FUNCIÓN SUMAR ITEM AL CARRITO.
    *AGREGAR FUNCIÓN DE RESTAR ITEM DEL CARRITO.
    *AGREGAR AJUSTES EN LA SUMA DE CANTIDAD DE LOS CARRITOS.

    */