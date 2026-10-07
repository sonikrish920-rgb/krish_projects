let main = {

    variables: {
        gameActive: true,
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        pieces: {
            w_king: {
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'w_king'

            },
            w_queen: {
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'w_queen'
            },
            w_bishop1: {
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_bishop2: {
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_knight1: {
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_knight2: {
                position: '7_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_rook1: {
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_rook2: {
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_pawn1: {
                position: '1_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn2: {
                position: '2_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn3: {
                position: '3_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn4: {
                position: '4_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn5: {
                position: '5_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn6: {
                position: '6_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn7: {
                position: '7_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn8: {
                position: '8_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },

            b_king: {
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 'b_king'
            },
            b_queen: {
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'b_queen'
            },
            b_bishop1: {
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_bishop2: {
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_knight1: {
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_knight2: {
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_rook1: {
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_rook2: {
                position: '8_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_pawn1: {
                position: '1_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn2: {
                position: '2_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn3: {
                position: '3_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn4: {
                position: '4_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn5: {
                position: '5_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn6: {
                position: '6_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn7: {
                position: '7_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn8: {
                position: '8_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            }

        }
    },

    methods: {
        renderPiece: function (pieceName) {
            let piece = main.variables.pieces[pieceName];
            let colorClass = pieceName.slice(0, 1) == 'w' ? 'white' : 'black';
            return '<span class="piece ' + colorClass + '">' + piece.img + '</span>';
        },

        gamesetup: function () {
            $('.gamecell').attr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                let cell = $('#' + main.variables.pieces[gamepiece].position);
                cell.html(main.methods.renderPiece(gamepiece));
                cell.attr('chess', gamepiece);
            }
        },

        moveoptions: function (selectedpiece) {

            let position = {
                x: '',
                y: ''
            };
            position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
            position.y = main.variables.pieces[selectedpiece].position.split('_')[1];

            // these options need to be var instead of let
            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1, c2, c3, c4, c5, c6, c7, c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selectedpiece].type) {
                case 'w_king':

                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{
                            x: 1,
                            y: 1
                        }, {
                            x: 1,
                            y: 0
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: 0,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }, {
                            x: -1,
                            y: 0
                        }, {
                            x: -1,
                            y: 1
                        }, {
                            x: 0,
                            y: 1
                        }, {
                            x: 2,
                            y: 0
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{
                            x: 1,
                            y: 1
                        }, {
                            x: 1,
                            y: 0
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: 0,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }, {
                            x: -1,
                            y: 0
                        }, {
                            x: -1,
                            y: 1
                        }, {
                            x: 0,
                            y: 1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_king':

                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
                        coordinates = [{
                            x: 1,
                            y: 1
                        }, {
                            x: 1,
                            y: 0
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: 0,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }, {
                            x: -1,
                            y: 0
                        }, {
                            x: -1,
                            y: 1
                        }, {
                            x: 0,
                            y: 1
                        }, {
                            x: 2,
                            y: 0
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{
                            x: 1,
                            y: 1
                        }, {
                            x: 1,
                            y: 0
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: 0,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }, {
                            x: -1,
                            y: 0
                        }, {
                            x: -1,
                            y: 1
                        }, {
                            x: 0,
                            y: 1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    /*
                      coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                      });
                    */
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_queen':

                    c1 = main.methods.w_options(position, [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }]);
                    c2 = main.methods.w_options(position, [{
                        x: 1,
                        y: -1
                    }, {
                        x: 2,
                        y: -2
                    }, {
                        x: 3,
                        y: -3
                    }, {
                        x: 4,
                        y: -4
                    }, {
                        x: 5,
                        y: -5
                    }, {
                        x: 6,
                        y: -6
                    }, {
                        x: 7,
                        y: -7
                    }]);
                    c3 = main.methods.w_options(position, [{
                        x: -1,
                        y: 1
                    }, {
                        x: -2,
                        y: 2
                    }, {
                        x: -3,
                        y: 3
                    }, {
                        x: -4,
                        y: 4
                    }, {
                        x: -5,
                        y: 5
                    }, {
                        x: -6,
                        y: 6
                    }, {
                        x: -7,
                        y: 7
                    }]);
                    c4 = main.methods.w_options(position, [{
                        x: -1,
                        y: -1
                    }, {
                        x: -2,
                        y: -2
                    }, {
                        x: -3,
                        y: -3
                    }, {
                        x: -4,
                        y: -4
                    }, {
                        x: -5,
                        y: -5
                    }, {
                        x: -6,
                        y: -6
                    }, {
                        x: -7,
                        y: -7
                    }]);
                    c5 = main.methods.w_options(position, [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]);
                    c6 = main.methods.w_options(position, [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }]);
                    c7 = main.methods.w_options(position, [{
                        x: -1,
                        y: 0
                    }, {
                        x: -2,
                        y: 0
                    }, {
                        x: -3,
                        y: 0
                    }, {
                        x: -4,
                        y: 0
                    }, {
                        x: -5,
                        y: 0
                    }, {
                        x: -6,
                        y: 0
                    }, {
                        x: -7,
                        y: 0
                    }]);
                    c8 = main.methods.w_options(position, [{
                        x: 0,
                        y: -1
                    }, {
                        x: 0,
                        y: -2
                    }, {
                        x: 0,
                        y: -3
                    }, {
                        x: 0,
                        y: -4
                    }, {
                        x: 0,
                        y: -5
                    }, {
                        x: 0,
                        y: -6
                    }, {
                        x: 0,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_queen':

                    c1 = main.methods.b_options(position, [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }]);
                    c2 = main.methods.b_options(position, [{
                        x: 1,
                        y: -1
                    }, {
                        x: 2,
                        y: -2
                    }, {
                        x: 3,
                        y: -3
                    }, {
                        x: 4,
                        y: -4
                    }, {
                        x: 5,
                        y: -5
                    }, {
                        x: 6,
                        y: -6
                    }, {
                        x: 7,
                        y: -7
                    }]);
                    c3 = main.methods.b_options(position, [{
                        x: -1,
                        y: 1
                    }, {
                        x: -2,
                        y: 2
                    }, {
                        x: -3,
                        y: 3
                    }, {
                        x: -4,
                        y: 4
                    }, {
                        x: -5,
                        y: 5
                    }, {
                        x: -6,
                        y: 6
                    }, {
                        x: -7,
                        y: 7
                    }]);
                    c4 = main.methods.b_options(position, [{
                        x: -1,
                        y: -1
                    }, {
                        x: -2,
                        y: -2
                    }, {
                        x: -3,
                        y: -3
                    }, {
                        x: -4,
                        y: -4
                    }, {
                        x: -5,
                        y: -5
                    }, {
                        x: -6,
                        y: -6
                    }, {
                        x: -7,
                        y: -7
                    }]);
                    c5 = main.methods.b_options(position, [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]);
                    c6 = main.methods.b_options(position, [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }]);
                    c7 = main.methods.b_options(position, [{
                        x: -1,
                        y: 0
                    }, {
                        x: -2,
                        y: 0
                    }, {
                        x: -3,
                        y: 0
                    }, {
                        x: -4,
                        y: 0
                    }, {
                        x: -5,
                        y: 0
                    }, {
                        x: -6,
                        y: 0
                    }, {
                        x: -7,
                        y: 0
                    }]);
                    c8 = main.methods.b_options(position, [{
                        x: 0,
                        y: -1
                    }, {
                        x: 0,
                        y: -2
                    }, {
                        x: 0,
                        y: -3
                    }, {
                        x: 0,
                        y: -4
                    }, {
                        x: 0,
                        y: -5
                    }, {
                        x: 0,
                        y: -6
                    }, {
                        x: 0,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'w_bishop':

                    c1 = main.methods.w_options(position, [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }]);
                    c2 = main.methods.w_options(position, [{
                        x: 1,
                        y: -1
                    }, {
                        x: 2,
                        y: -2
                    }, {
                        x: 3,
                        y: -3
                    }, {
                        x: 4,
                        y: -4
                    }, {
                        x: 5,
                        y: -5
                    }, {
                        x: 6,
                        y: -6
                    }, {
                        x: 7,
                        y: -7
                    }]);
                    c3 = main.methods.w_options(position, [{
                        x: -1,
                        y: 1
                    }, {
                        x: -2,
                        y: 2
                    }, {
                        x: -3,
                        y: 3
                    }, {
                        x: -4,
                        y: 4
                    }, {
                        x: -5,
                        y: 5
                    }, {
                        x: -6,
                        y: 6
                    }, {
                        x: -7,
                        y: 7
                    }]);
                    c4 = main.methods.w_options(position, [{
                        x: -1,
                        y: -1
                    }, {
                        x: -2,
                        y: -2
                    }, {
                        x: -3,
                        y: -3
                    }, {
                        x: -4,
                        y: -4
                    }, {
                        x: -5,
                        y: -5
                    }, {
                        x: -6,
                        y: -6
                    }, {
                        x: -7,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'b_bishop':

                    c1 = main.methods.b_options(position, [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }]);
                    c2 = main.methods.b_options(position, [{
                        x: 1,
                        y: -1
                    }, {
                        x: 2,
                        y: -2
                    }, {
                        x: 3,
                        y: -3
                    }, {
                        x: 4,
                        y: -4
                    }, {
                        x: 5,
                        y: -5
                    }, {
                        x: 6,
                        y: -6
                    }, {
                        x: 7,
                        y: -7
                    }]);
                    c3 = main.methods.b_options(position, [{
                        x: -1,
                        y: 1
                    }, {
                        x: -2,
                        y: 2
                    }, {
                        x: -3,
                        y: 3
                    }, {
                        x: -4,
                        y: 4
                    }, {
                        x: -5,
                        y: 5
                    }, {
                        x: -6,
                        y: 6
                    }, {
                        x: -7,
                        y: 7
                    }]);
                    c4 = main.methods.b_options(position, [{
                        x: -1,
                        y: -1
                    }, {
                        x: -2,
                        y: -2
                    }, {
                        x: -3,
                        y: -3
                    }, {
                        x: -4,
                        y: -4
                    }, {
                        x: -5,
                        y: -5
                    }, {
                        x: -6,
                        y: -6
                    }, {
                        x: -7,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    break;
                case 'w_knight':

                    coordinates = [{
                        x: -1,
                        y: 2
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 1,
                        y: -2
                    }, {
                        x: -1,
                        y: -2
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: -1
                    }, {
                        x: -2,
                        y: -1
                    }, {
                        x: -2,
                        y: 1
                    }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_knight':

                    coordinates = [{
                        x: -1,
                        y: 2
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 1,
                        y: -2
                    }, {
                        x: -1,
                        y: -2
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: -1
                    }, {
                        x: -2,
                        y: -1
                    }, {
                        x: -2,
                        y: 1
                    }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_rook':

                    c1 = main.methods.w_options(position, [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]);
                    c2 = main.methods.w_options(position, [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }]);
                    c3 = main.methods.w_options(position, [{
                        x: -1,
                        y: 0
                    }, {
                        x: -2,
                        y: 0
                    }, {
                        x: -3,
                        y: 0
                    }, {
                        x: -4,
                        y: 0
                    }, {
                        x: -5,
                        y: 0
                    }, {
                        x: -6,
                        y: 0
                    }, {
                        x: -7,
                        y: 0
                    }]);
                    c4 = main.methods.w_options(position, [{
                        x: 0,
                        y: -1
                    }, {
                        x: 0,
                        y: -2
                    }, {
                        x: 0,
                        y: -3
                    }, {
                        x: 0,
                        y: -4
                    }, {
                        x: 0,
                        y: -5
                    }, {
                        x: 0,
                        y: -6
                    }, {
                        x: 0,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_rook':

                    c1 = main.methods.b_options(position, [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]);
                    c2 = main.methods.b_options(position, [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }]);
                    c3 = main.methods.b_options(position, [{
                        x: -1,
                        y: 0
                    }, {
                        x: -2,
                        y: 0
                    }, {
                        x: -3,
                        y: 0
                    }, {
                        x: -4,
                        y: 0
                    }, {
                        x: -5,
                        y: 0
                    }, {
                        x: -6,
                        y: 0
                    }, {
                        x: -7,
                        y: 0
                    }]);
                    c4 = main.methods.b_options(position, [{
                        x: 0,
                        y: -1
                    }, {
                        x: 0,
                        y: -2
                    }, {
                        x: 0,
                        y: -3
                    }, {
                        x: 0,
                        y: -4
                    }, {
                        x: 0,
                        y: -5
                    }, {
                        x: 0,
                        y: -6
                    }, {
                        x: 0,
                        y: -7
                    }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_pawn':

                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{
                            x: 0,
                            y: 1
                        }, {
                            x: 0,
                            y: 2
                        }, {
                            x: 1,
                            y: 1
                        }, {
                            x: -1,
                            y: 1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    } else if (main.variables.pieces[selectedpiece].moved == true) {

                        coordinates = [{
                            x: 0,
                            y: 1
                        }, {
                            x: 1,
                            y: 1
                        }, {
                            x: -1,
                            y: 1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'b_pawn':

                    // calculate pawn options
                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{
                            x: 0,
                            y: -1
                        }, {
                            x: 0,
                            y: -2
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    } else if (main.variables.pieces[selectedpiece].moved == true) {

                        coordinates = [{
                            x: 0,
                            y: -1
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: -1,
                            y: -1
                        }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

            }
        },

        options: function (startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;

            coordinates = coordinates.filter(val => {
                let pos = {
                    x: 0,
                    y: 0
                };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            });

            switch (piecetype) {

                case 'w_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });

                    break;
                case 'b_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });

                    break;
                case 'w_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });

                    break;

                case 'b_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });

                    break;

                case 'w_pawn':

                    coordinates = coordinates.filter(val => {
                        let sp = {
                            x: 0,
                            y: 0
                        };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) { // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'b'); // return coordinates with opponent pieces on them
                        } else { // else if the coordinate is in the center;
                            if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null') {
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }

                    });

                    break;

                case 'b_pawn':

                    coordinates = coordinates.filter(val => {
                        let sp = {
                            x: 0,
                            y: 0
                        };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) { // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'w'); // return coordinates with opponent pieces on them
                        } else { // else if the coordinate is in the center;
                            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null') {
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }
                    });

                    break;
            }

            return coordinates;
        },

        w_options: function (position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function (val) { // convert the x,y into actual grid id coordinates;
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = {
                    x: 0,
                    y: 0
                };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        console.log(val + '-3')
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        b_options: function (position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function (val) { // convert the x,y into actual grid id coordinates;
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = {
                    x: 0,
                    y: 0
                };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        flag = true;
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        capture: function (target) {
            let selectedpiece = {
                name: $('#' + main.variables.selectedpiece).attr('chess'),
                id: main.variables.selectedpiece
            };


            //new cell
            $('#' + target.id).html(main.methods.renderPiece(selectedpiece.name));
            $('#' + target.id).attr('chess', selectedpiece.name);
            //old cell
            $('#' + selectedpiece.id).html('');
            $('#' + selectedpiece.id).attr('chess', 'null');
            //moved piece
            main.variables.pieces[selectedpiece.name].position = target.id;
            main.variables.pieces[selectedpiece.name].moved = true;
            // captured piece
            main.variables.pieces[target.name].captured = true;
            /*
            // toggle highlighted coordinates
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            // set the selected piece to '' again
            main.variables.selectedpiece = '';
            */

        },

        move: function (target) {

            let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');

            // new cell
            $('#' + target.id).html(main.methods.renderPiece(selectedpiece));
            $('#' + target.id).attr('chess', selectedpiece);
            // old cell
            $('#' + main.variables.selectedpiece).html('');
            $('#' + main.variables.selectedpiece).attr('chess', 'null');
            main.variables.pieces[selectedpiece].position = target.id;
            main.variables.pieces[selectedpiece].moved = true;

            /*
            // toggle highlighted coordinates
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            // set the selected piece to '' again
            main.variables.selectedpiece = '';
            */
        },

        endturn: function () {

            if (!main.variables.gameActive) {
                return;
            }

            // toggle highlighted coordinates
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            main.variables.selectedpiece = '';

            if (main.variables.turn == 'w') {
                main.variables.turn = 'b';
                $('#turn').html("Black's Turn");
            } else {
                main.variables.turn = 'w';
                $('#turn').html("White's Turn");
            }

            $('#turn').addClass('turnhighlight');
            window.setTimeout(function () {
                $('#turn').removeClass('turnhighlight');
            }, 1500);

            main.methods.checkGameState();

        },

        togglehighlight: function (options) {
            options.forEach(function (element, index, array) {
                $('#' + element).toggleClass("green shake-little neongreen_txt");
            });
        },

        getPiecePosition: function (pieceName) {
            return main.variables.pieces[pieceName] ? main.variables.pieces[pieceName].position : null;
        },

        getPieceAt: function (id) {
            return $('#' + id).attr('chess');
        },

        legalMoveOptions: function (pieceName) {
            let legalMoves = main.methods.computeMoves(pieceName, false).filter(function(targetId) {
                let moveState = main.methods.simulateMove(pieceName, targetId);
                let safe = !main.methods.isInCheck(pieceName.slice(0, 1));
                main.methods.undoMove(moveState);
                return safe;
            });
            main.variables.highlighted = legalMoves;
            main.methods.togglehighlight(legalMoves);
        },

        isInCheck: function (color) {
            let kingType = color == 'w' ? 'w_king' : 'b_king';
            let kingPosition = main.methods.getPiecePosition(kingType);
            if (!kingPosition) {
                return true;
            }

            let attackerColor = color == 'w' ? 'b' : 'w';
            let attackedSquares = [];

            Object.keys(main.variables.pieces).forEach(function (pieceName) {
                let piece = main.variables.pieces[pieceName];
                if (piece.captured || pieceName.slice(0, 1) != attackerColor) {
                    return;
                }

                let options = main.methods.computeMoves(pieceName, true);
                attackedSquares = attackedSquares.concat(options);
            });

            return attackedSquares.indexOf(kingPosition) !== -1;
        },

        computeMoves: function (pieceName, attackOnly) {
            let piece = main.variables.pieces[pieceName];
            if (!piece || piece.captured) {
                return [];
            }

            let position = {
                x: parseInt(piece.position.split('_')[0]),
                y: parseInt(piece.position.split('_')[1])
            };
            let coordinates = [];
            let startpoint = piece.position;
            let type = piece.type;

            switch (type) {
                case 'w_king':
                case 'b_king':
                    coordinates = [{x:1,y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:1}].map(function(val){
                        return (position.x + val.x) + '_' + (position.y + val.y);
                    });
                    if (!attackOnly) {
                        let color = type.slice(0, 1);
                        let row = color == 'w' ? 1 : 8;
                        let rook = main.variables.pieces[color + '_rook2'];
                        let transit = '6_' + row;
                        let castleTarget = '7_' + row;
                        if (!piece.moved && rook && !rook.captured && !rook.moved &&
                            rook.position == '8_' + row && $('#6_' + row).attr('chess') == 'null' &&
                            $('#7_' + row).attr('chess') == 'null' && !main.methods.isInCheck(color)) {
                            let moveState = main.methods.simulateMove(pieceName, transit);
                            let transitIsSafe = !main.methods.isInCheck(color);
                            main.methods.undoMove(moveState);
                            if (transitIsSafe) {
                                coordinates.push(castleTarget);
                            }
                        }
                    }
                    return main.methods.filterKingMoves(coordinates, type, attackOnly);

                case 'w_queen':
                    return main.methods.combineLinearMoves(position, type, ['diag','diag','diag','diag','rank','file','rank','file']);
                case 'b_queen':
                    return main.methods.combineLinearMoves(position, type, ['diag','diag','diag','diag','rank','file','rank','file']);
                case 'w_bishop':
                case 'b_bishop':
                    return main.methods.combineLinearMoves(position, type, ['diag','diag','diag','diag']);
                case 'w_rook':
                case 'b_rook':
                    return main.methods.combineLinearMoves(position, type, ['rank','file','rank','file']);
                case 'w_knight':
                case 'b_knight':
                    coordinates = [{x:-1,y:2},{x:1,y:2},{x:1,y:-2},{x:-1,y:-2},{x:2,y:1},{x:2,y:-1},{x:-2,y:-1},{x:-2,y:1}].map(function(val){
                        return (position.x + val.x) + '_' + (position.y + val.y);
                    });
                    return main.methods.filterUniqueMoves(startpoint, coordinates, type);
                case 'w_pawn':
                    coordinates = [{x:0,y:1},{x:0,y:2},{x:1,y:1},{x:-1,y:1}].map(function(val) {
                        return (position.x + val.x) + '_' + (position.y + val.y);
                    });
                    return main.methods.filterPawnMoves(startpoint, coordinates, type, attackOnly);
                case 'b_pawn':
                    coordinates = [{x:0,y:-1},{x:0,y:-2},{x:1,y:-1},{x:-1,y:-1}].map(function(val) {
                        return (position.x + val.x) + '_' + (position.y + val.y);
                    });
                    return main.methods.filterPawnMoves(startpoint, coordinates, type, attackOnly);
            }

            return [];
        },

        filterKingMoves: function (coordinates, type, attackOnly) {
            coordinates = coordinates.filter(function(val) {
                let pos = val.split('_');
                return pos[0] >= 1 && pos[0] <= 8 && pos[1] >= 1 && pos[1] <= 8;
            });
            if (attackOnly) {
                return coordinates;
            }
            return coordinates.filter(function(val) {
                let occupant = $('#' + val).attr('chess');
                return occupant == 'null' || occupant.slice(0,1) != type.slice(0,1);
            });
        },

        filterUniqueMoves: function (startpoint, coordinates, type) {
            return coordinates.filter(function(val) {
                let pos = val.split('_');
                if (pos[0] < 1 || pos[0] > 8 || pos[1] < 1 || pos[1] > 8) {
                    return false;
                }
                let occupant = $('#' + val).attr('chess');
                return occupant == 'null' || occupant.slice(0,1) != type.slice(0,1);
            });
        },

        combineLinearMoves: function (position, type, directions) {
            let isDiagonal = type.endsWith('bishop') || type.endsWith('queen');
            let isStraight = type.endsWith('rook') || type.endsWith('queen');
            let vectors = [];
            let output = [];
            if (isDiagonal) {
                vectors.push({x: 1, y: 1}, {x: 1, y: -1}, {x: -1, y: 1}, {x: -1, y: -1});
            }
            if (isStraight) {
                vectors.push({x: 1, y: 0}, {x: -1, y: 0}, {x: 0, y: 1}, {x: 0, y: -1});
            }

            vectors.forEach(function(vector) {
                for (let distance = 1; distance <= 7; distance++) {
                    let x = position.x + vector.x * distance;
                    let y = position.y + vector.y * distance;
                    if (x < 1 || x > 8 || y < 1 || y > 8) {
                        break;
                    }
                    let coordinate = x + '_' + y;
                    let occupant = $('#' + coordinate).attr('chess');
                    if (occupant == 'null') {
                        output.push(coordinate);
                        continue;
                    }
                    if (occupant.slice(0, 1) != type.slice(0, 1)) {
                        output.push(coordinate);
                    }
                    break;
                }
            });
            return output;
        },

        filterPawnMoves: function (startpoint, coordinates, type, attackOnly) {
            let sp = {
                x: parseInt(startpoint.split('_')[0]),
                y: parseInt(startpoint.split('_')[1])
            };

            return coordinates.filter(function(val) {
                let coordinate = val.split('_');
                let occupant = $('#' + val).attr('chess');

                if (coordinate[0] < 1 || coordinate[0] > 8 || coordinate[1] < 1 || coordinate[1] > 8) {
                    return false;
                }

                let diagonalMove = coordinate[0] != sp.x;
                if (attackOnly) {
                    return diagonalMove;
                }

                if (diagonalMove) {
                    if (type == 'w_pawn') {
                        return occupant != 'null' && occupant.slice(0,1) == 'b';
                    }
                    return occupant != 'null' && occupant.slice(0,1) == 'w';
                }

                if (type == 'w_pawn' && coordinate[1] == sp.y + 2 &&
                    (sp.y != 2 || $('#' + sp.x + '_' + (sp.y + 1)).attr('chess') != 'null')) {
                    return false;
                }
                if (type == 'b_pawn' && coordinate[1] == sp.y - 2 &&
                    (sp.y != 7 || $('#' + sp.x + '_' + (sp.y - 1)).attr('chess') != 'null')) {
                    return false;
                }
                return occupant == 'null';
            });
        },

        simulateMove: function (pieceName, targetId) {
            let piece = main.variables.pieces[pieceName];
            let startId = piece.position;
            let capturedPieceName = $('#' + targetId).attr('chess');
            let capturedPiece = null;

            if (capturedPieceName && capturedPieceName != 'null') {
                capturedPiece = capturedPieceName;
                main.variables.pieces[capturedPiece].captured = true;
            }

            $('#' + startId).html('');
            $('#' + startId).attr('chess', 'null');
            $('#' + targetId).html(piece.img);
            $('#' + targetId).attr('chess', pieceName);
            piece.position = targetId;

            return {
                pieceName: pieceName,
                startId: startId,
                targetId: targetId,
                capturedPiece: capturedPiece
            };
        },

        undoMove: function (moveState) {
            let piece = main.variables.pieces[moveState.pieceName];
            $('#' + moveState.targetId).html('');
            $('#' + moveState.targetId).attr('chess', 'null');
            $('#' + moveState.startId).html(piece.img);
            $('#' + moveState.startId).attr('chess', moveState.pieceName);
            piece.position = moveState.startId;

            if (moveState.capturedPiece) {
                let captured = main.variables.pieces[moveState.capturedPiece];
                captured.captured = false;
                captured.position = moveState.targetId;
                $('#' + moveState.targetId).html(captured.img);
                $('#' + moveState.targetId).attr('chess', moveState.capturedPiece);
            }
        },

        hasLegalMove: function (color) {
            let pieces = Object.keys(main.variables.pieces).filter(function(name) {
                let piece = main.variables.pieces[name];
                return !piece.captured && name.slice(0,1) == color;
            });

            for (let i = 0; i < pieces.length; i++) {
                let pieceName = pieces[i];
                let moves = main.methods.computeMoves(pieceName, false);
                for (let j = 0; j < moves.length; j++) {
                    let targetId = moves[j];
                    let moveState = main.methods.simulateMove(pieceName, targetId);
                    let stillInCheck = main.methods.isInCheck(color);
                    main.methods.undoMove(moveState);
                    if (!stillInCheck) {
                        return true;
                    }
                }
            }
            return false;
        },

        showMessage: function (text, duration) {
            let box = $('#messageBox');
            box.text(text).addClass('visible');
            if (duration !== false) {
                window.setTimeout(function () {
                    box.removeClass('visible');
                }, duration || 2200);
            }
        },

        playSound: function () {
            try {
                let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                let oscillator = audioCtx.createOscillator();
                let gain = audioCtx.createGain();
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
                oscillator.connect(gain);
                gain.connect(audioCtx.destination);
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.12);
            } catch (e) {
                // ignore audio errors in unsupported browsers
            }
        },

        checkGameState: function () {
            let currentTurn = main.variables.turn;
            let opponent = currentTurn == 'w' ? 'b' : 'w';
            if (main.methods.isInCheck(currentTurn)) {
                if (!main.methods.hasLegalMove(currentTurn)) {
                    main.variables.gameActive = false;
                    let winner = opponent == 'w' ? 'White' : 'Black';
                    $('#turn').html(winner + ' Wins by Checkmate!');
                    main.methods.showMessage(winner + ' wins by checkmate.', false);
                    return;
                }
                let checked = currentTurn == 'w' ? 'White' : 'Black';
                main.methods.showMessage(checked + ' is in check!', 2600);
                main.methods.playSound();
                return;
            }
            if (!main.methods.hasLegalMove(currentTurn)) {
                main.variables.gameActive = false;
                $('#turn').html('Stalemate. Game Over.');
                main.methods.showMessage('Draw by stalemate.', false);
            }
        }

    }
};

$(document).ready(function () {
    main.methods.gamesetup();
    let initialPieces = JSON.parse(JSON.stringify(main.variables.pieces));

    $('#themeSelect').on('change', function() {
        $('#themeStylesheet').attr('href', './' + this.value);
    });

    $('#newGame').on('click', function() {
        main.variables.pieces = JSON.parse(JSON.stringify(initialPieces));
        main.variables.turn = 'w';
        main.variables.selectedpiece = '';
        main.variables.highlighted = [];
        main.variables.gameActive = true;
        $('#turn').text("It's White's Turn!");
        $('#messageBox').removeClass('visible').addClass('hidden').text('');
        main.methods.gamesetup();
    });

    $('.gamecell').click(function (e) {
        if (!main.variables.gameActive) {
            return;
        }

        var selectedpiece = {
            name: '',
            id: main.variables.selectedpiece
        };

        if (main.variables.selectedpiece == '') {
            selectedpiece.name = $('#' + this.id).attr('chess');
            selectedpiece.id = this.id;
        } else {
            selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
        }

        var target = {
            name: $(this).attr('chess'),
            id: this.id
        };

        if (main.variables.selectedpiece == '' && target.name.slice(0, 1) == main.variables.turn) { // show options

            // moveoptions
            main.variables.selectedpiece = this.id;
            main.methods.legalMoveOptions($(this).attr('chess'));

        } else if (main.variables.selectedpiece != '' && target.name == 'null') { // move selected piece piece

            if (main.variables.highlighted.indexOf(target.id) == -1) {
                return;
            }

            if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king') {

                let isWhiteKing = selectedpiece.name == 'w_king';
                let canCastle = !main.variables.pieces[selectedpiece.name].moved;
                let kingTarget = target.id;
                let canCastleWhite = isWhiteKing && canCastle && !main.variables.pieces['w_rook2'].moved && kingTarget == '7_1' && $('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null';
                let canCastleBlack = !isWhiteKing && canCastle && !main.variables.pieces['b_rook2'].moved && kingTarget == '7_8' && $('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null';

                if (canCastleWhite) {
                    let k_position = '5_1';
                    let k_target = '7_1';
                    let r_position = '8_1';
                    let r_target = '6_1';

                    main.variables.pieces['w_king'].position = k_target;
                    main.variables.pieces['w_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['w_king'].img);
                    $('#' + k_target).attr('chess', 'w_king');

                    main.variables.pieces['w_rook2'].position = r_target;
                    main.variables.pieces['w_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['w_rook2'].img);
                    $('#' + r_target).attr('chess', 'w_rook2');

                    main.methods.endturn();

                } else if (canCastleBlack) {
                    let k_position = '5_8';
                    let k_target = '7_8';
                    let r_position = '8_8';
                    let r_target = '6_8';

                    main.variables.pieces['b_king'].position = k_target;
                    main.variables.pieces['b_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['b_king'].img);
                    $('#' + k_target).attr('chess', 'b_king');

                    main.variables.pieces['b_rook2'].position = r_target;
                    main.variables.pieces['b_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['b_rook2'].img);
                    $('#' + r_target).attr('chess', 'b_rook2');

                    main.methods.endturn();

                } else {
                    main.methods.move(target);
                    main.methods.endturn();
                }

            } else {

                main.methods.move(target);
                main.methods.endturn();

            }

        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) != target.name.slice(0, 1)) { // capture a piece

            if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) { // if it's not trying to capture pieces not in its movement range

                // capture
                main.methods.capture(target)
                main.methods.endturn();

            }

        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) == target.name.slice(0, 1)) { // toggle move options

            // toggle
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.selectedpiece = target.id;
            main.methods.legalMoveOptions(target.name);

        }

    });

    $('body').contextmenu(function (e) {
        e.preventDefault();
    });

});