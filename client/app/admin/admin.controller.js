'use strict';

export default class AdminController {
  /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.$http.get('/api/tasks/all').then((response) => {
            this.tasks = response.data;
        }).catch(() => {
            this.error = "Something went wrong";
        });
    }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}
