
var app= angular.module('ourModule',[]);
app.controller('ourController', function($scope){

$scope.toDoList=[];
$scope.addItem=function(newItem) {

  if ($scope.item.name===""){
  return;
}
  console.log(newItem);
  $scope.toDoList.push({name: newItem.name});
  $scope.item.name="";

}



$scope.removeItem=function(index){
  $scope.toDoList.splice(index,1);
}



});
