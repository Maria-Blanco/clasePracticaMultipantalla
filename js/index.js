$(document).ready(function () {


                                let listaImg = $('#slider img').length;
                                let posicionImg = 1;
                                console.log(listaImg)

                                $('#slider img').hide();
                                $('#slider img:first-child').show(); 

                                setInterval(function (){
                                    if (posicionImg < listaImg ){
                                        posicionImg++;
                                    } else {
                                        posicionImg = 1;
                                    }
                                    $('#slider img').hide();
                                    $('#slider img:nth-child(' + posicionImg + ')').show();
                                }, 4000);
                                

                                $('button').click(function(){
                                                                $('header ul').toggle();
                                                            });
                            });