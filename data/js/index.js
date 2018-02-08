var myApp = angular.module('studentInfo', []);
  myApp.controller('stInfoController', ['$scope', function ($scope) {

   	$scope.list = [     
   		{id: "1610202", firstname:'sardor', surname: 'allabergenov', email:'hello@mail.com', gpa:'2.96'},
      {id: "1610231", firstname:'Shohsanam',surname: 'Shirinkulova', email:'hello@mail.com', gpa:'4.28'},
      {id: "1610183", firstname:'Rahmatjon',surname: 'Khasanov', email:'hello@mail.com', gpa:'4.31'},
      {id: "1610127", firstname:'Madina', surname: 'Kurbanov', email:'hello@mail.com', gpa:'3.68'},
      {id: "1610203", firstname:'Sardor', surname: 'Doniyorov', email:'hello@mail.com', gpa:'4.01'},];

  myApp.filter('myFormat', function() {
    return function(students) {
      var i, c, txt = " ";
      for (i = 0; i < students.length; i++) {
          c = students[i];
          if (i == 0) {
              c = c.toUpperCase();
          }
          if(students[i-1] == ' '){
            c = c.toUpperCase();
          }
          txt += c;
        }
        return txt;
      };
    });
    $scope.add = function (){
      if (angular.isDefined($scope.firstname) && $scope.id != '' && $scope.firstname != '' && $scope.surname != ''  && $scope.email != '' && $scope.gpa != ''){
        $scope.list.push({ id: $scope.id, firstname: $scope.firstname, surname: $scope.surname, email: $scope.email, gpa: $scope.gpa});
  	    $scome.id = '';
        $scope.firstname = '';
        $scope.surname = '';
        $scope.email = '';
        $scope.gpa = '';
	  }
	};
	$scope.orderByMe = function(students) {
        $scope.myOrderBy = students;
  }

  $scope.remove = function (index) {
    $scope.list.splice(index, 1);
  }
  }]
);

$(document).ready(function(){
    $("#datepicker").focus(function(){
        $(this).datepicker();
    });
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

/* ======= end active menu script ======= */
$(document).ready(function() { 
    $(".sidenav a").click(function ( e ) {
        e.preventDefault();
        $(".sidenav a.active").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active");
        $(activeTab).show(); //Fade in the active content  
    });
});