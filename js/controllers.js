'use strict';

/* Controllers */


function LoginCtrl($scope, $http, $rootScope) {
    $scope.accountData = {
        username: '',
        password: ''
    }
    $scope.showLoginForm = true;
    $scope.loginMessage = "Logging in...";
    $scope.loginErrorMessage = "";
    $scope.doSubmit = function(){
        $scope.showLoginForm = false;
        $scope.loginMessage = "Logging in...";

        //send login request
        $scope.accountData.password = md5($scope.accountData.password);
        $http({
            method: 'POST',
            url: 'php/login.php',
            data: $scope.accountData
        }).success(function(data){
                if(data == 'success'){
                    $scope.showLoginForm = false;
                    $scope.loginMessage = "Success... Verifying...";
                    $rootScope.$broadcast("event:doCheckLogin");
                }else{
                    $scope.showLoginForm = true;
                    $scope.loginErrorMessage = data;
                    $scope.password = "";
                }
            }).error(function(data){
                $scope.showLoginForm = true;
                $scope.loginErrorMessage = data;
                $scope.password = "";
            });
    }
}

function ContentCtrl($scope, $http, $rootScope) {
    //If you do any sort of request here
    //that returns 401 you will get a login
    $scope.resultData = {username: 'fetching', email: 'fetching'};
    $http({
        method: 'GET',
        url: 'php/userdetails.php'
    }).success(function(data){
            if(data == 'error'){
                $scope.resultData.username = $scope.resultData.password = 'Error fetching data!';
            }
            else{
                $scope.resultData = data;
            }
        });
}

function CreateAccountCtrl($scope, $rootScope, $http) {
    $scope.accountData = {
        username: '',
        password: '',
        email: ''
    }
    $scope.showCreateForm = true;
    $scope.createMessage = "Creating account...";
    $scope.createErrorMessage = "";
    $scope.doSubmit = function(){
        $scope.showCreateForm = false;
        $scope.loginMessage = "Creating your account...";

        // Rawtext password so the server can check the password constraints.
        // If you want you could uncomment this and make it md5 encrypted.
        // $scope.accountData.password = md5($scope.accountData.password);

        $http({
            method: 'POST',
            url: 'php/createaccount.php',
            data: $scope.accountData
        }).success(function(data){
                if(data == 'success'){
                    $scope.showCreateForm = false;
                    $scope.createMessage = "Success... Continuing to site...";
                    $rootScope.$broadcast("event:doCheckLogin");
                }else{
                    $scope.showCreateForm = true;
                    $scope.createErrorMessage = data;
                    $scope.password = "";
                }
            }).error(function(data){
                $scope.showCreateForm = true;
                $scope.createErrorMessage = data;
                $scope.password = "";
            });
    }
}