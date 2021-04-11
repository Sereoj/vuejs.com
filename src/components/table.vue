<template>
  <tr>
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.date}}</td>
      <td>
        <button class="btn btn-primary btn-sm">Редактировать</button>
        <button class="btn btn-danger btn-sm">Удалить</button>
      </td>
  </tr>
</template>
<script>
export default {
  name: "Table",
  props: ["item"],
};
</script>
