function homeCtrl($location){
    ctrl = this;
    ctrl.$onInit =function(){
        console.log("...inside home init.....");
    }



var filename="formNo.pdf";

$scope.fileType = filename.split(".").pop();
console.log("  ..... filename.....");
}
angular.module('thumbnail') .component("home", {
    templateUrl: 'index.html',
    controller: homeCtrl,
    controllerAs: 'ctrl'
});