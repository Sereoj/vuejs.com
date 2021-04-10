<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Изменение статьи</h2>
      </div>

      <form>
        <div class="mb-3">
          <label>Название</label>
          <input
            type="text"
            class="form-control"
            placeholder="Придумайте название статьи"
          />
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea
            class="form-control"
            placeholder="Напишите описание статьи"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input type="file" class="form-control" />

          <img
            src="assets/images/placeholder-blue.png"
            class="w-100 mt-4"
            alt="preview"
          />
        </div>

        <button class="btn btn-success">Сохранить</button>
      </form>
    </section>
  </div>
</template>