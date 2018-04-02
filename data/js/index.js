var myApp = angular.module('studentInfo', ['ngAnimate']);
  myApp.controller('adminController', ['$scope', function ($scope) {
    $scope.admin_list = [
        {id:"u1610202", name: 'sardor allabergenov', email: 'hello@mail.com'}
      ];
    }]
  );
  myApp.controller('teacherController', ['$scope', function ($scope) {
      $scope.teacher_list = [
        {id:"u151041", name: 'Irfan ud-Din', email: 'hello@mail.com'}
      ];
    }]
  );
  myApp.controller('stInfoController', ['$scope', function ($scope) {
   	$scope.list = [     
   		{id: "U1610202", name:'sardor allabergenov', email:'hello@mail.com', gpa:'2.96'},
      {id: "U1610231", name:'shohsanam shirinkulova', email:'hello@mail.com', gpa:'4.28'},
      {id: "U1610183", name:'rahmatjon khasanov', email:'hello@mail.com', gpa:'4.31'},
      {id: "U1610127", name:'madina kurbanova', email:'hello@mail.com', gpa:'3.68'},
      {id: "U1610203", name:'sardor doniyorov', email:'hello@mail.com', gpa:'4.01'},];

    $scope.add = function (){

      angular.forEach($scope.list, function(attr){
        if($scope.id !== attr.id){
          if(angular.isDefined($scope.firstname) && $scope.id != '' && $scope.firstname != '' && $scope.surname != '' ){
            $scope.list.push({ id: 'U' + $scope.id, name: $scope.firstname +' '+ $scope.surname, email: $scope.email});
            $scope.id = '';
            $scope.firstname = '';
            $scope.surname = '';
            $scope.email = '';
          } 
        }
        else{
          alert("exists"); 
          $scope.id = '';
          $scope.firstname = '';
          $scope.surname = '';
          $scope.email = '';
        }
      });
      
	};
	$scope.orderByMe = function(students) {
        $scope.myOrderBy = students;
  }
  $scope.remove = function (index) {
    $scope.list.splice(index, 1);
  }
  }]
);
  myApp.filter('upperCase_name', function() {
    return function(x) {
      var i, c, txt = " ";
      for (i = 0; i < x.length; i++) {
          c = x[i];
          if (i == 0) {
              c = c.toUpperCase();
          }
          if(x[i-1] == ' '){
            c = c.toUpperCase();
          }
          txt += c;
        }
        return txt;
      };
    });

// Get the modal
var modal = document.getElementById('ask-modal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

/* ======= dropdown menu script ======= */
$('ul li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});
/* ======= end dropdown menu script ======= */

/* ======= active menu script ======= */
$(document).ready(function() { 
    $(".sidenav a").click(function ( e ) {
        e.preventDefault();
        $(".sidenav a.active").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active");
        
    });
});
/* ======= end active menu script ======= */


