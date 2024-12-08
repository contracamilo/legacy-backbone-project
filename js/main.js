$(function() {
  var todoItems = new TodoItems([
		new TodoItem({ description: 'Todo 1' }),
		new TodoItem({ description: 'Todo 2' }),
  ]);

  var todoItemsView = new TodoItemsView({ model: todoItems });

	 $('body').append(todoItemsView.render().$el);
});