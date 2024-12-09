var todoItemTemplate = _.template(`
    <label for="toggle">
        <input id="toggle" type="checkbox" <%= checked %>> 
        <%= title %>
    </label>
    <button id="delete"><span>Delete</span></button>
`);

var todoItemsTemplate = _.template(`
        <header>
            <input type="text" autofocus id="newTodoItem" />
            <button id="add">Add</button>
        </header>
        <ul id="todoItems"></ul>
    `);