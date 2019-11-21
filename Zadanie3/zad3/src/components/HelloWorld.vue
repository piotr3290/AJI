<template>
  <div class="hello">
    <h2>Todos:</h2>
    <ol>
      <li v-for="todo in todos"
          v-bind:key="todo.id">
        <label>
          <input type="checkbox"
                 v-on:change="toggle(todo)"
                 v-bind:checked="todo.done">

          <del v-if="todo.done">
            {{ todo.text }}
          </del>
          <span v-else>
          {{ todo.text }}
        </span>
        </label>
      </li>
    </ol>
  </div>
</template>


<script>

  export default {
    name: 'HelloWorld',
    data: function () {
      return{
        todos: [
          { id:1, text: "Learn JavaScript", done: false },
          { id:2, text: "Learn Vue", done: false },
          { id:3, text: "Play around in JSFiddle", done: true },
          { id:4, text: "Build something awesome", done: true }
        ]
      }},
    methods: {
      toggle: function(todo){
        todo.done = !todo.done
      }}
  }
</script>

<style scoped>

  li {
    margin: 8px 0;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 15px;
  }

  del {
    color: rgba(0, 0, 0, 0.3);
  }
</style>
