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
                                                    'titulo' : 'Magret de pato con salsa de grosellas',
                                                    'imagen' : 'resources/imagenes/magretdePatoconSalsadeGrosellas.jpg',
                                                    'ingredientes' : 'Magret de pato, Grosellas, Vino tinto, Caldo de pollo, Mantequilla, Azúcar, Tomillo, Patatas baby, Sal y Pimienta.'
                                                }, 
                                                {
                                                    'titulo' : 'Rollo de pavo con salsa de cebolla y pasas',
                                                    'imagen' : 'resources/imagenes/rollodepavo.jpg',
                                                    'ingredientes' : 'Pechuga de pavo, Cebollas grandes, Uvas pasas, Salsa de soja, Salsa worcester, Ajos en polvo, Caldo de carne, Harina de maíz, Ramitas de perejil, Sal, Pimienta y Aceite de oliva virgen extra.'
                                                },
                                                {
                                                    'titulo' : 'Tacos de pechuga de pavo salteados con mayonesa de pimiento',
                                                    'imagen' : 'resources/imagenes/tacosdePechugadePavo.jpg',
                                                    'ingredientes' : 'Pechuga de pavo, Tomates cherry, Pimiento rojo, Aceite de oliva, Vinagre de jerez, Huevo, Sal y Pimienta.'
                                                },
                                                {
                                                    'titulo' : 'Guiso de muslos de pollo con verduras',
                                                    'imagen' : 'resources/imagenes/GuisodeMuslosdePolloconVerduras.jpg',
                                                    'ingredientes' : 'Muslos de pollo, Cebolla, Ajo, Pimiento rojo, Pimiento verde, Berenjena, Zanahorias, Tomates, Aceitunas verdes, Azúcar, Caldo de pollo, Menta, Sal, Pimienta negra y Aceite de oliva.'
                                                },
                                                {
                                                    'titulo' : 'Pechuga de pollo con cebolletas',
                                                    'imagen' : 'resources/imagenes/PechugadePolloconCebolletas.jpg',
                                                    'ingredientes' : 'Pechuga de pollo, Cerveza negra, Caldo de pollo, Harina de maíz, Azúcar moreno, Cebollitas francesas, Aceite de oliva, Sal, Pimienta, Orégano, Comino y Romero.'
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
                                                    'titulo' : 'Brocheta de carne adobada con verduras',
                                                    'imagen' : 'resources/imagenes/brochetadecarne.jpg',
                                                    'ingredientes' : 'Carne de ternera, Orégano, Comino, Guindilla, Nuez moscada, Ajo, Pimentón dulce, Pimentón picante, Pimienta negra en grano, Cebolla, Kétchup, Champiñones, Tomates cereza y Calabacín.'
                                                }, 
                                                {
                                                    'titulo' : 'Croquetas de carne de cocido',
                                                    'imagen' : 'resources/imagenes/croquetasdeCarne.jpg',
                                                    'ingredientes' : 'Carne de cocido, Cebolleta, Mantequilla, Harina, Leche, Nuez moscada molida, Pimienta negra, Sal, Harina, Huevos, Pan rallado casero, Aceite de oliva virgen extra.'
                                                },
                                                {
                                                    'titulo' : 'Arroz con carne y judías verdes',
                                                    'imagen' : 'resources/imagenes/arrozconCarneyJudíasVerdes.jpg',
                                                    'ingredientes' : 'Arroz, Costilla de cerdo, Cebolla, Conejo, Garbanzos, Tomates, Ajo, Judías verdes, Hoja de laurel, Perejil, Pimentón dulce, Azafrán, Aceite de oliva, Pimienta negra y Sal.'
                                                },
                                                {
                                                    'titulo' : 'Espaguetis con carne y champiñones',
                                                    'imagen' : 'resources/imagenes/espaguetisconCarneyChampinones.jpg',
                                                    'ingredientes' : 'Espaguetis, Carne, Champiñones, Pimiento verde, Cebolla, Diente de ajo, Tomates, Orégano, Queso parmesano, Aceite y Sal.'
                                                },
                                                {
                                                    'titulo' : 'Rollo de carne picada al horno',
                                                    'imagen' : 'resources/imagenes/rollodeCarne.jpg',
                                                    'ingredientes' : 'Carne de ternera, Carne de cerdo, Cebolla, Huevo, Limón, Pan rallado, Tomate, Azúcar, Patata, Nuez moscada, Aceite y Perejil.'
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
                                                    'titulo' : 'Gambas rebozadas crujientes',
                                                    'imagen' : 'resources/imagenes/gambasRebozadasCrujientes.jpg',
                                                    'ingredientes' : 'Gambas o langostinos, Huevos, Pan rallado, Salsa agridulce, Aceite de oliva, Sal y Perejil.'
                                                }, 
                                                {
                                                    'titulo' : 'Tostas de patata y calamar',
                                                    'imagen' : 'resources/imagenes/tostasdePatatayCalamar.jpg',
                                                    'ingredientes' : 'Pan alemán, Calamar, Patatas pequeñas, Berros, Tallos de cebollino, Harina, Aceite para freír, Sal, Pimienta, Salsa: Mayonesa, Limón, Piel rallada de limón y Mostaza.'
                                                },
                                                {
                                                    'titulo' : 'Albóndigas de salmón en salsa verde',
                                                    'imagen' : 'resources/imagenes/albóndigasdeSalmónenSalsaVerde.jpg',
                                                    'ingredientes' : 'Salmón, Zanahoria, Cebolleta, Huevo, Pan rallado, Perejil, Ajo, Avellanas, Cava, Caldo de verduras, Aceite de oliva Y Sal.'
                                                },
                                                {
                                                    'titulo' : 'EBrochetas de atún rojo con salsa de mostaza y miel',
                                                    'imagen' : 'resources/imagenes/brochetasdeAtún.jpg',
                                                    'ingredientes' : 'Atún rojo, Huevos, Panko, Rábanos, Mostaza a la antigua, Mostaza de dijon, Miel y Aceite de oliva suave.'
                                                },
                                                {
                                                    'titulo' : 'Salmón en salsa verde de almendra',
                                                    'imagen' : 'resources/imagenes/salmonenSalsaVerde.jpg',
                                                    'ingredientes' : 'Salmón, Sal, Pimienta, Aceite de oliva, Salsa: Caldo de pescado, Perejil, Almendras, Harina de maíz, Vino blanco y Sal.'
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
                                                    'titulo' : 'Sidra de manzana y jengibre',
                                                    'imagen' : 'resources/imagenes/sidradeManzanayJengibre.jpg',
                                                    'ingredientes' : 'Zumo de manzana, Jengibre, Vinagre de manzana, Sirope de agave y Agua con gas fría.'
                                                }, 
                                                {
                                                    'titulo' : 'Bebida fría de chocolate y helado',
                                                    'imagen' : 'resources/imagenes/bebidaFriadeChocolateyHelado.jpg',
                                                    'ingredientes' : 'Leche, Cacao en polvo, Chocolate bolas, Caramelo líquido, Nata para montar, Azúcar avainillado y Virutas de chocolate.'
                                                },
                                                {
                                                    'titulo' : 'Coco chai',
                                                    'imagen' : 'resources/imagenes/cocoChai.jpg',
                                                    'ingredientes' : 'Leche de coco, Agua, Azúcar de coco, Canela en polvo, Cardamomo molido, Clavo de olor, Anís verde, Pimienta, Vainilla en polvo o en esencia.'
                                                },
                                                {
                                                    'titulo' : 'Smoothie de plátano y kale',
                                                    'imagen' : 'resources/imagenes/smoothiedePlatanoyKale.jpg',
                                                    'ingredientes' : 'Plátanos, Col kale y Agua.'
                                                },
                                                {
                                                    'titulo' : 'Smoothie de espinacas y manzana',
                                                    'imagen' : 'resources/imagenes/smoothiedeEspinacasyManzanas.jpg',
                                                    'ingredientes' : 'Espinacas, Manzanas, Jengibre, Agua, Sal, Levadura nutricional.'
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
                                                    'titulo' : 'Irish coffee helado',
                                                    'imagen' : 'resources/imagenes/irishCoffeeHelado.jpg',
                                                    'ingredientes' : 'Tofes blandos, Caramelo líquido, Galleta de barquillo, Helado De Café: Nata para montar, Leche condensada, Café soluble descafeinado, Cremas, Café soluble, Nata para montar, Azúcar y Whisky.'
                                                }, 
                                                {
                                                    'titulo' : 'Vasitos de fresones y queso cremoso',
                                                    'imagen' : 'resources/imagenes/vasitosdeQuesoyFrambuesa.jpg',
                                                    'ingredientes' : 'Queso mascarpone, Azúcar, Huevos, Fresones y Gelatina.'
                                                },
                                                {
                                                    'titulo' : 'Vasitos de cheesecake con arándanos y grosellas',
                                                    'imagen' : 'resources/imagenes/vasitosdeCheesecake.jpg',
                                                    'ingredientes' : 'Galletas digestive, Queso blanco para untar, Nata para montar, Azúcar, Mermelada de arándanos, Arándanos, Grosellas, Hojas de menta, Canela, Azúcar avainillado y Azúcar moreno.'
                                                },
                                                {
                                                    'titulo' : 'Panna cotta con coulis de arándanos',
                                                    'imagen' : 'resources/imagenes/pannacottaconCoulisdeArandanos.jpg',
                                                    'ingredientes' : 'Pannacotta: Leche entera, Nata para montar, Azúcar, Vainilla, Gelatina, Menta, Coulis de arándanos: Arándanos, Azúcar.'
                                                },
                                                {
                                                    'titulo' : 'Corte de dulce de leche con galletas caseras',
                                                    'imagen' : 'resources/imagenes/cortedeDulcedeLeche.jpg',
                                                    'ingredientes' : 'Helado: Huevo, Leche, Azúcar, Vainilla, Nata para montar, Piñones tostados, Dulce de leche: Azúcar, Agua, Leche, Mantequilla, Zumo de limón, Galletas: Mantequilla, Azúcar, Huevo, Pepitas de chocolate negro, Azúcar avainillado, Harina tamizada.'
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