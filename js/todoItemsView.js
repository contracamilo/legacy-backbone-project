var TodoItemsView = Backbone.View.extend({ 
    tagName: 'div', // Cambiado a 'div' para contener la estructura completa

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified.');
        }

        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onRemoveTodoItem, this);
    },

    onAddTodoItem: function (todoItem) {
        var view = new TodoItemView({ model: todoItem });
        this.$('#todoItems').append(view.render().$el);
    },

    onRemoveTodoItem: function (todoItem) {
        this.$('li#' + todoItem.id).remove();
    },

    events: {
        'click #add': 'onClickAdd',
        'keypress #newTodoItem': 'onKeyPress'
    },

    onClickAdd: function () {
        var $textBox = this.$('#newTodoItem');

        if($textBox.val()){
            var todoItem = new TodoItem({ title: $textBox.val() });
            todoItem.save();
            this.model.add(todoItem);
            $textBox.val('');
        }
    },

    onKeyPress: function (e) {
        if (e.keyCode == 13) {
            this.onClickAdd();
        }
    },

    render: function () {
        this.$el.empty(); 
        this.$el.html(todoItemsTemplate());
    
        return this;
    }
});