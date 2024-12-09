$(function() {
  var todoItems = new TodoItems([
		new TodoItem({ id:'1', description: 'Todo 1' }),
		new TodoItem({ id:'2', description: 'Todo 2' }),
  ]);

  var todoItemsView = new TodoItemsView({ model: todoItems });

	 $('body').append(todoItemsView.render().$el);
});