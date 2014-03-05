/*global yotodo, Backbone*/

yotodo.Collections.TodosCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

    initialize: function () {
        this.model = yotodo.Models.TodoModel;
    }

});