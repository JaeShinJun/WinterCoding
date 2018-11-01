function TodoCtrl($scope) {

    $scope.todos = [
        {text: 'Learn AngularJS', done:false}, 
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        })
    };

    $scope.addTodo = function() {
        if($scope.formTodoText.length != 0) {
            $scope.todos.push({text:$scope.formTodoText, done:false});
            $scope.formTodoText = '';
        }
    };  
}