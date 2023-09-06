<template>
  <q-page class="row" style="background: #e9e9e9">
    <div class="col-xl-7 col-md-7 col-xs-7 gt-xs">
      <q-img
        src="../assets/login3.png"
        spinner-color="white"
        style="
          height: 555px;
          max-width: 500px;
          justify-content: center;
          margin-left: 20%;
        "
        img-class="my-custom-image"
        class="rounded-borders responsive"
      />
    </div>
    <div
      class="col-xl-5 col-md-5 col-xs-11 q-pa-sm"
      style="
        background: #ffffff;
        height: 90vh;
        margin-top: 10px;
        border-radius: 25px;
        max-width: 630px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
      "
    >
      <div class="row" style="display: flex; flex-direction: column">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
          "
        >
          <span>icon</span>
        </div>
        <div class="text-h3 text-center text-bold q-pt-xl q-mt-xl">
          Welcom Back
        </div>
        <div class="text-center q-mt-md">Please Enter Your details</div>
      </div>
      <div class="row" style="display: flex; flex-direction: column">
        <div class="">
          <q-form class="q-gutter-sm">
            <q-input
              type="text"
              v-model="email"
              label="Email"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <div>
              <q-input
                :type="passwordFieldType"
                v-model="password"
                label="Password"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
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
          </q-form>

          <div class="q-pa-sm row">
            <div style="width: 80%">
              <q-checkbox
                v-model="check"
                label="Remember Me"
                style="margin-top: -10%"
              />
              <a
                href=""
                class="float-right"
                style="
                  text-decoration: none;
                  margin-top: -5%;
                  margin-left: -40%;
                  color: #6d6969;
                "
                >Forget Paswword?</a
              >
            </div>
            <div style="display: flex; flex-direction: column">
              <q-btn
                label="Login"
                unelevated
                rounded
                style="width: 250%"
                color="black"
                class="text-white q-mb-md"
              ></q-btn>
              <q-btn
                label="Login with Google"
                unelevated
                rounded
                style="
                  width: 250%;
                  align-items: center;
                  background-color: #e9e9e9;
                "
                color="#e9e9e9"
                text-color="black"
                class="text-white q-pa-sm"
              ></q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
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
