/**
 *  name: 'Задачи организации',
    description: 'Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
    image: 'assets/images/placeholder-blue.png',
    date: '2021-04-10 16:00:00'
 */
// Vue.component('card', {
//     props: ['items'],
//     template: `
//     <div class="col-3">
//     <div class="card">
//         <img class="card-img-top" src="assets/images/placeholder-blue.png" alt="placeholder">
//         <div class="card-body">
//         <p class="card-text">
//             <small class="text-muted">{{ items }}</small>
//         </p>

//         <h5 class="card-title">{{name}}</h5>
//         <p class="card-text">{{description}}</p>

//         <a href="#" class="btn btn-primary">Читать</a>
//         </div>
//     </div>
//     </div>
//     `
//     });


// Vue.component('container', {
//     props:['items'],
//     template: `
//         <div class="container">
//             <section class="py-5">
//                 <div class="mb-4 d-flex justify-content-between align-items-center">
//                     <h2>Актуальное</h2>
//                     <button class="btn btn-sm btn-primary">Все статьи</button>
//                 </div>

//                 <div class="row">
//                     <card></card>
//                 </div>
//             </section>

//             <section class="py-5">
//             <div class="mb-4 d-flex justify-content-between align-items-center">
//                 <h2>Случайная статья</h2>
//             </div>


//             <a href="#" class="card bg-dark text-white">
//                 <img class="card-img" src="assets/images/placeholder-blue.png" alt="placeholder">
//                 <div class="card-img-overlay">
//                 <h5 class="card-title">Название статьи</h5>
//                 </div>
//             </a>
//             </section>
//         </div>
//     `,
//     methods:
//     {
//         OnButtonLink(value)
//         {
//             this.link = value; // записываем
//         },
//     }
//   });
  Vue.component('manage', {
    props:['items'],
    template: `
    <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Управление статьями</h2>
        <button class="btn btn-sm btn-success">Добавить статью</button>
      </div>

      <table class="table">
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Действия</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Статья 1</td>
          <td>09.04.2021 16:00</td>
          <td>
            <button class="btn btn-primary btn-sm">Редактировать</button>
            <button class="btn btn-danger btn-sm">Удалить</button>
          </td>
        </tr>
      </table>
    </section>
  </div>
    `
  });

let app = new Vue({
    el: '#app',
    data:
    {
        nav_item: "home",
        items: articles,

    },
    methods:
    {
        pages(item)
        {
            /**
             * Функция управления с nav-элементами
             */
            this.nav_item = item;
            alert(item);
        },
    }
});
