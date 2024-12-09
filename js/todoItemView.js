var TodoItemView = Backbone.View.extend({

    tagName: 'li',

    id: `todoItem`,
    
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified.');
        }
        
        this.model.on('change', this.render, this);
    },

    events: {
        'click #toggle': 'onClickToggle',
        'click #delete': 'onClickDelete'
    },

    onClickToggle: function () {
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());
    },

    onClickDelete: function () {
        this.model.destroy();
    },
    
    render: function () {
        var checked = this.model.get('completed') ? 'checked' : '';
        this.$el.attr('id', `${this.model.id}`);
        this.$el.toggleClass('completed', this.model.get('completed'));
        this.$el.html(`
            <input id="toggle" type="checkbox" ${checked}> 
            ${this.model.escape('title')}
            <button id="delete">Delete</button>
            `)
        return this;

        
    }
});
