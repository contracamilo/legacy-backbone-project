var todoItemTemplate = _.template(`
    <input id="toggle" type="checkbox" <%= checked %>> 
    <%= title %>
    <button id="delete">Delete</button>
`);