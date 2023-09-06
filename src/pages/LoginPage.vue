<template>
  <q-page>
    <q-card class="q-ma-xl">
      <div class="row">
        <div class="col-0 col-sm-5 rounded-left-borders xs-hide">
          <div class="">
            <q-img
              src="../assets/login2.avif"
              spinner-color="white"
              sizes="(max-width: 600px) 480px,
         800px"
              style="height: 400px; max-width: 400px z-index: 2;"
              img-class="my-custom-image"
              class="rounded-borders responsive"
            />
          </div>
        </div>

        <div class="col-12 col-sm-7">
          <div class="row q-ml-sm q-mt-sm sm-and-up-hide"></div>
          <div class="row q-pa-sm-sm q-pa-md">
            <div class="col-12">
              <q-card-section>
                <div class="q-mb-xl">
                  <div class="flex justify-center">
                    <div
                      class="text-h4 text-uppercase q-my-none text-weight-bold text-secondary fredoka"
                    >
                      Login
                    </div>
                  </div>
                </div>

                <q-form ref="form" class="q-gutter-md">
                  <q-input v-model="email" label="Email" name="Email" />
                  <div>
                    <!-- <q-input
                      v-model="password"
                      label="Password"
                      name="password"
                       type="password"
                    /> -->
                    <q-input
                      :type="passwordFieldType"
                      v-model="password"
                      label="Password"
                    >
                      <template v-slot:append>
                        <q-icon
                          name="close"
                          @click="switchVisibility"
                          class="cursor-pointer"
                        />
                      </template>
                    </q-input>
                  </div>

                  <div>
                    <q-btn
                      class="full-width fredoka"
                      color="secondary"
                      label="Login"
                      rounded
                      type="submit"
                    ></q-btn>

                    <div class="q-mt-lg">
                      <div class="q-pa-sm justify-center">
                        <q-checkbox v-model="check" label="Remember Me" />
                        <router-link
                          to="/"
                          class="float-right"
                          style="text-decoration: none"
                          >Forget Paswword</router-link
                        >
                      </div>
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      check: false,
      email: '',
      password: '',
      passwordFieldType: 'password',
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password';
    },
  },
};
</script>
// set emadeat
