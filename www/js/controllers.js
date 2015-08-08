angular.module('starter.controllers', ['ionic', 'ionic-datepicker'])

.controller('TaskCtrl', function($scope, $ionicModal) {

  $scope.data = [{
    showDelete: true
  }, {
    showReorder: true
  }];


  $scope.tasks = [{
    id: 0,
    name: 'Wash the dishes',
    duedate: '15th August 2015',
  }, {
    id: 1,
    name: 'Do Geography Assignment',
    duedate: '12th August 2015',
  }, {
    id: 2,
    name: 'Do English Oral',
    duedate: '10th August 2015',
  }, {
    id: 3,
    name: 'Finish Maths homework',
    duedate: '8th August 2015',
  }, {
    id: 4,
    name: 'Research on Nelson Mandela',
    duedate: '6th August 2015',
  }, {
    id: 5,
    name: 'Eat a pie',
    duedate: '19th February 2016',
  }, {
    id: 6,
    name: 'Get a PhD',
    duedate: '1st December 3050',
  }];

  $scope.task = {
    name: '',
    duedate: ''
  };
  //delete/move code
  $scope.onTaskDelete = function(task) {
    $scope.tasks.splice($scope.tasks.indexOf(task),1);
  };

  $scope.moveTask = function(task, fromIndex, toIndex) {
    $scope.tasks.splice(fromIndex, 1);
    $scope.tasks.splice(toIndex, 0, task);
  };
  // modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function() {
    $scope.tasks.push($scope.task);
    $scope.taskModal.hide();
    $scope.task.name = "";
    $scope.task.duedate = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  $scope.currentDate = new Date();
  $scope.title = "Custom Title";

$scope.datePickerCallback = function (val) {
    if(typeof(val)==='undefined'){      
        console.log('Date not selected');
    }else{
        console.log('Selected date is : ', val);
    }
};
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});