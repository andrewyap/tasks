angular.module('starter.services', ['ionic-datepicker'])


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Shopping List',
    lastText: 'Are you on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

angular.module('starter.services', ['ionic-datepicker'])


.factory('TaskService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [{
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

  var selectedTaskId = undefined;

  return {
    tasks: tasks,

    selectedTaskId: selectedTaskId,

    add: function(task) {
      console.log("received task: " + JSON.stringify(task));
      tasks.push(task);
    },

    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
