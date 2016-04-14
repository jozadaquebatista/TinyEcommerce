app.controller('dataHandleCtrl', function($scope){

    $scope.userInfo = ["Jozadaque",
                       "Batista",
                       "jozadaquebatista@gmail.com"];


    $scope.addItem = function(produto){
        $scope.listaPedidos.push(produto);
    }

    $scope.produtos = [
        {
            id: 1111,
            name: 'produto01',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 2222,
            name: 'produto02',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 3333,
            name: 'produto03',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 4444,
            name: 'produto04',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 5555,
            name: 'produto05',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 6666,
            name: 'produto06',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 7777,
            name: 'produto07',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        },
        {
            id: 88888,
            name: 'produto08',
            img: 'http://lorempixel.com/g/80/80/people/',
            getID: function(){
                return this.id
            }
        }
    ];
});
