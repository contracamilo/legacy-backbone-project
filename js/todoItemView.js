var TodoItemView = Backbone.View.extend({

    tagName: 'li',
    
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified.');
        }
        
        this.model.on('change', this.render, this);
    },
    
    render: function () {
        this.$el.html(this.model.get('description'));
        return this;
    }
});