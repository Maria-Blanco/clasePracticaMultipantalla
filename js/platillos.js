//FALTA CAMBIAR LA INFO DE TODOS MENOS ENSALADA!!!!!!!!!!!
$(document).ready   (
                    function () {
                        //ENSALADAS
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
                        //AVES
                        let platillosAves = [{
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
                        for (let i=0; i<platillosAves.length; i++){

                            let nameAve = platillosAves[i].titulo;
                            let imgAve = platillosAves[i].imagen;
                            let ingrAve = platillosAves[i].ingredientes;

                            let textoAves =    '<li>' +
                                                    '<h4> ' + 
                                                        nameAve +
                                                    '</h4>' +
                                                    '<img src=\"' + imgAve + '\" alt=\"\">' +
                                                    '<p>' + 
                                                        ingrAve + 
                                                    '</p> ' +
                                                '</li>';

                        $('#avesEx').append(textoAves)
                                                                        }
                        //RED MEAT
                        let platillosRedMeat = [{
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
                        for (let i=0; i<platillosRedMeat.length; i++){

                            let nameRedMeat = platillosRedMeat[i].titulo;
                            let imgRedMeat = platillosRedMeat[i].imagen;
                            let ingrRedMeat = platillosRedMeat[i].ingredientes;

                            let textoRedMeat =    '<li>' +
                                                        '<h4> ' + 
                                                            nameRedMeat +
                                                        '</h4>' +
                                                        '<img src=\"' + imgRedMeat + '\" alt=\"\">' +
                                                        '<p>' + 
                                                            ingrRedMeat + 
                                                        '</p> ' +
                                                    '</li>';

                        $('#redMeatEx').append(textoRedMeat)
                                                                        }
                        //MARISCOS
                        let platillosFish = [{
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
                        for (let i=0; i<platillosFish.length; i++){

                            let nameFish = platillosFish[i].titulo;
                            let imgFish = platillosFish[i].imagen;
                            let ingrFish = platillosFish[i].ingredientes;

                            let textoFish =    '<li>' +
                                                    '<h4> ' + 
                                                        nameFish +
                                                    '</h4>' +
                                                    '<img src=\"' + imgFish + '\" alt=\"\">' +
                                                    '<p>' + 
                                                        ingrFish + 
                                                    '</p> ' +
                                                '</li>';
                                                
                        $('#fishEx').append(textoFish)
                                                                        }
                        //BEBIDAS
                        let platillosDrinks = [{
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
                        for (let i=0; i<platillosDrinks.length; i++){

                            let nameDrinks = platillosDrinks[i].titulo;
                            let imgDrinks = platillosDrinks[i].imagen;
                            let ingrDrinks = platillosDrinks[i].ingredientes;

                            let textoDrinks =    '<li>' +
                                                        '<h4> ' + 
                                                            nameDrinks +
                                                        '</h4>' +
                                                        '<img src=\"' + imgDrinks + '\" alt=\"\">' +
                                                        '<p>' + 
                                                            ingrDrinks + 
                                                        '</p> ' +
                                                    '</li>';

                        $('#drinksEx').append(textoDrinks )
                                                                        }
                        //POSTRES
                        let platillosPostre = [{
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
                        for (let i=0; i<platillosPostre.length; i++){

                            let namePostre = platillosPostre[i].titulo;
                            let imgPostre = platillosPostre[i].imagen;
                            let ingrPostre = platillosPostre[i].ingredientes;

                            let textoPostre =    '<li>' +
                                                    '<h4> ' + 
                                                        namePostre +
                                                    '</h4>' +
                                                    '<img src=\"' + imgPostre + '\" alt=\"\">' +
                                                    '<p>' + 
                                                        ingrPostre + 
                                                    '</p> ' +
                                                '</li>';
                                                
                        $('#postreEx').append(textoPostre)
                                                                        }
                                }
                    )



/*$(document).ready(function () {

    // programar Slider 
    let listaImg = $('#sliderImg img').length;
    let posicionImg = 1;

    $('#sliderImg img').hide();
    $('#sliderImg img:first-child').show(); // Visualizo la 1era imagen

    //Funcion de Delay, para que despues de 4s visualice la siguiente imagen.
    setInterval(function (){
        //posicionImg = posicionImg + 1;         
        //posicionImg++;
        //Evaluamos si ya no hay mas imagenes
        if (posicionImg < listaImg ){
            posicionImg++;
        } else {
            posicionImg = 1;
        }
        $('#sliderImg img').hide();
        $('#sliderImg img:nth-child(' + posicionImg + ')').show();
    }, 4000);

    //****************************** Boton Toggle******************************** 
    $('.btn-Toggle').click(function (){
        $('#miMenu').toggle(1500);
    });
});
    */