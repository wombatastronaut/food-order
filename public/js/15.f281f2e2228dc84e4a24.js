webpackJsonp([15],{bINP:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("2gGM"),a=e.n(o),s={data:function(){return{form:new a.a({name:null,category:null,description:null,quantity:null,price:null})}}},i={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("card",{attrs:{title:"Categories"}},[e("form",{on:{submit:function(r){return r.preventDefault(),t.register(r)},keydown:function(r){t.form.onKeydown(r)}}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(r){r.target.composing||t.$set(t.form,"name",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v("Category")]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("category")},attrs:{name:"category"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"category",r.target.multiple?e:e[0])}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"category"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v("Description")]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("description")},attrs:{name:"description",cols:"30",rows:"10"},domProps:{value:t.form.description},on:{input:function(r){r.target.composing||t.$set(t.form,"description",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"description"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v("Quantity")]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("quantity")},attrs:{type:"text",name:"quantity"},domProps:{value:t.form.quantity},on:{input:function(r){r.target.composing||t.$set(t.form,"quantity",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"quantity"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v("Price")]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"text",name:"price"},domProps:{value:t.form.price},on:{input:function(r){r.target.composing||t.$set(t.form,"price",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[e("v-button",{attrs:{loading:t.form.busy}},[t._v("\n          Submit\n        ")])],1)])])])},staticRenderFns:[]},l=e("VU/8")(s,i,!1,null,null,null);r.default=l.exports}});
//# sourceMappingURL=15.f281f2e2228dc84e4a24.js.map