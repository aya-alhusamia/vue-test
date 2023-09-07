<template>
  <q-page
    class="row"
    style="background: #e9e9e9; display: grid; grid-template-columns: 4fr 2fr"
  >
    <div
      class="col-xl-7 col-md-7 col-xs-7 gt-xs"
      style="height: calc(100vh - 70px)"
    >
      <q-img
        src="../assets/login3.png"
        spinner-color="white"
        sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
        style="
          height: 100%;
          max-width: 600px;

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
        height: calc(100vh - 70px);
        width: 100vw;
        margin: 10px 10px 10px;
        border-radius: 25px;
        max-width: 630px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        color: black;
      "
    >
      <div
        class="row"
        style="display: flex; flex-direction: column; margin-bottom: 20px"
      >
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <q-img
            class="q-mt-xl"
            style="margin-bottom: -50px"
            src="../assets/settings_black_24dp.svg"
            width="50px"
          />
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
            <div class="q-mb-sm">
              <q-input
                class="q-mb-xs"
                :type="passwordFieldType"
                v-model="password"
                label="Password"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              >
                <template v-slot:append>
                  <!-- <q-icon
                    name="close"
                    @click="switchVisibility"
                    class="cursor-pointer"
                  /> -->

                  <img
                    src="../assets/remove_red_eye_black_24dp.svg"
                    @click="switchVisibility"
                  />
                </template>
              </q-input>
            </div>
          </q-form>

          <div class="q-pa-sm row">
            <div class="q-mb-lg" style="width: 100%">
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
            <div style="display: flex; flex-direction: column; width: 100%">
              <q-btn
                label="Login"
                unelevated
                rounded
                style="width: 100%"
                color="black"
                class="text-white q-mb-md"
              ></q-btn>

              <q-btn
                no-caps
                unelevated
                rounded
                style="
                  width: 100%;
                  align-items: center;
                  background-color: #e9e9e9;
                "
                color="#e9e9e9"
                text-color="black"
                class="text-white q-pa-sm"
              >
                <q-img
                  src="/src/assets/google.png"
                  width="20px"
                  class="q-mr-sm"
                />
                <div>Log in with Google</div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { text } from '@fortawesome/fontawesome-svg-core';

export default {
  data() {
    return {
      check: false,
      email: '',
      password: '',
      passwordFieldType: 'password' || null,
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
