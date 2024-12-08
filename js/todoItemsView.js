var TodoItemsView = Backbone.View.extend({ 
    tagName: 'ul',

    id: 'todoItems',

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified.');
        }

        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onRemoveTodoItem, this);
    },

    render: function () {
        var self = this;

        this.model.each(function (todoItem) {
            var view = new TodoItemView({model: todoItem});
            self.$el.append(view.render().$el);
        });
        return this;
    }
});