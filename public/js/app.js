var app = angular.module('Todo', []);

app.run(function($rootScope) {
});

app.controller('NoteController', function($scope, $location){
   $scope.smite = Date();
   $scope.newCount = '';
   $scope.uRang = false;


   $scope.addNote = function (){
      $scope.nowtime = 'yesterday';
   };

   $scope.updateCart = function(n, v, index){
      $scope.cart[index]['COUNT'] = this.newCount;
   }

   $scope.addToCart = function(){
     $scope.cart.push(this.entry);
     $scope.entry = {};
   }

   $scope.cart = [
     {'FESTIVAL': 'SXSW','AMOUNT':'160','COUNT': 4},
     {'FESTIVAL': 'GLASTO','AMOUNT':'230','COUNT':1},
     {'FESTIVAL': 'LOLAPOLOOZA','AMOUNT':'240','COUNT':4},
     {'FESTIVAL': 'COCHELLA','AMOUNT':'670','COUNT':3}
   ];

});

