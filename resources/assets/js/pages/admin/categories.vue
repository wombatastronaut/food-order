<template>
  <card title="Categories">
    <form @submit.prevent="register" @keydown="form.onKeydown($event)">
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">Name</label>
        <div class="col-md-7">
          <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
          <has-error :form="form" field="name"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">Description</label>
        <div class="col-md-7">
          <textarea v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" name="description" cols="30" rows="10"></textarea>
          <has-error :form="form" field="description"/>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-7 offset-md-3 d-flex">
          <v-button :loading="form.busy">
            Submit
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'

export default {
  data: () => ({
    form: new Form({
      name: null,
      description: null
    })
  })
};
</script>
