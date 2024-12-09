$(function() {
  var todoItems = new TodoItems();

  todoItems.fetch({
    success: function() {
      console.log('Todo items fetched: ', todoItems);
    }
  });

  var todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);

	
});