$(document).ready   (
                    function () {
                        let platillosEnsalada = [{
                                                    'titulo' : 'Panzanella italiana',
                                                    'imagen' : 'resources/imagenes/panzanellaItaliana.jpg',
                                                    'ingredientes' : 'Tomate cherry rojo, Tomate cherry amarillo, Tomate pera, Cebolla morada, Picatostes (pan frito o al horno), Ajo, Aceite de oliva, Vinagre de Módena, Sal, Albahaca fresca y Aguacate.'
                                                }, 
                                                {
                                                    'titulo' : 'Coleslaw o Ensalada de Col',
                                                    'imagen' : 'resources/imagenes/coleslaw-EnsaladadeCol.jpg',
                                                    'ingredientes' : 'Col blanca, Zanahorias, Manzana, Mayonesa, Crema agria, Mostaza de Dijon, Vinagre y Cebolla.'
                                                },
                                                {
                                                    'titulo' : 'Ensalada César',
                                                    'imagen' : 'resources/imagenes/ensaladaCesar.jpg',
                                                    'ingredientes' : 'Lechuga romana, Queso parmesano, Vinagre de manzana, Salsa Perrins, Aceite, Zumo de limón, Picatostes, Huevo y Ajo.'
                                                },
                                                {
                                                    'titulo' : 'Ensalada Biof rumana',
                                                    'imagen' : 'resources/imagenes/ensaladaBiofRumana.jpg',
                                                    'ingredientes' : 'Patatas, Zanahorias, Mayonesa, Pechuga de pollo, Pepinillos encurtidos, Judías verdes planas, huevos duros y Aceitunas.'
                                                },
                                                {
                                                    'titulo' : 'Ensalada Shopska búlgara',
                                                    'imagen' : 'resources/imagenes/ensaladaShopskaBúlgara.jpg',
                                                    'ingredientes' : 'Tomates, Pepino, Cebolleta, Queso feta o sirene, Pimiento verde, Aceite de oliva, Vinagre, Pimienta negra molida, Sal y P erejil fresco.'
                                                }
                                                ];
                        for (let i=0; i<platillosEnsalada.length; i++){

                            let nameSalad = platillosEnsalada[i].titulo;
                            let imgSalad = platillosEnsalada[i].imagen;
                            let ingrSalad = platillosEnsalada[i].ingredientes;

                            let textoEnsaladas =    '<li>' +
                                                        '<h4> ' + 
                                                            nameSalad +
                                                        '</h4>' +
                                                        '<img src=\"' + imgSalad + '\" alt=\"\">' +
                                                        '<p>' + 
                                                            ingrSalad + 
                                                        '</p> ' +
                                                    '</li>';
                        $('#saladEx').append(textoEnsaladas )
                                                                        }

                                                                        

                                }
                    )



/*$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'tit': 'Café molido',
                            'srcIni' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.jpg' }, 
                           {'tit':'Capuchino',
                           'srcIni' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'tit': 'Café Mocca',
                           'srcIni' : 'resources/images/cafe_mocca.jpg',
                           'srcFin': 'resources/images/mocca_mini.png' }, 
                           {'tit': 'Bebida',
                           'srcIni' : 'resources/images/cafe_bebida.png',
                           'srcFin': 'resources/images/cafe_bebida_mini.png'}, 
                           {'tit': 'Café Negro',
                           'srcIni' : 'resources/images/cafe_negro.jpg',
                           'srcFin': 'resources/images/cafe_negro_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenIni = listadoTarjetas[i].srcIni;
        let titArticle = listadoTarjetas[i].tit;

        let textoHtml = '<article class=\"miTarjeta\">' +
                        '<figure> ' +
                        '<img src=\"' + imagenIni + '\" alt=\"\">' +
                       '<figcaption>' + titArticle + '</figcaption> ' +
                        '</figure> ' +
                       ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                    '</article>  ';
        
        $('#listaTarjetas').append(textoHtml);
    }
    */