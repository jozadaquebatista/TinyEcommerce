app.controller('dataHandleCtrl', function($scope){

    $scope.addItem = function(produto){
        $scope.listaPedidos.push(produto);
    }

    $scope.envio = function(){
        if($scope.listaPedidos.length > 0)
            alert('Enviado para o endereço: ' +
                $scope.userInfo[0].endereco
                + ', ' +
                $scope.userInfo[0].endereco_n);
    }

    $scope.valorTotal = function(){
        var total = 0;
        for(var pedido of $scope.listaPedidos){
            var produto = pedido;
            total += produto.price;
        }
        return total;
    }

    $scope.produtos = [
        {
            id: 11,
            name: 'produto01',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 10.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 12,
            name: 'produto02',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 50.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 13,
            name: 'produto03',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 25.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 14,
            name: 'produto04',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 2.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 15,
            name: 'produto05',
            price: 100.00,
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 16,
            name: 'produto06',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 7.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 17,
            name: 'produto07',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 40.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 18,
            name: 'produto08',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 77.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 19,
            name: 'produto09',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 77.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 20,
            name: 'produto10',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 77.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 21,
            name: 'produto11',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 77.00,
            getID: function(){
                return this.id
            }
        },
        {
            id: 22,
            name: 'produto12',
            img: 'http://lorempixel.com/g/80/80/people/',
            price: 77.00,
            getID: function(){
                return this.id
            }
        }
    ];

    $scope.userInfo = [{
        nome: "Jozadaque",
        sobrenome: "Batista",
        email: "jozadaquebatista@gmail.com",
        endereco: "Rua Duque de Caxias",
        endereco_n: 177,
        newsletter: false
    }];

});
