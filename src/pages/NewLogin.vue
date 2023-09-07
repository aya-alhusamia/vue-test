<template>
  <q-page
    class="row items-center justify-center"
    style="background-color: #e9e9e9; height: calc(100vh - 70px)"
  >
    <div class="col gt-sm full-height">
      <q-img
        src="../assets/login3.png"
        spinner-color="white"
        img-class="my-custom-image"
        class="rounded-borders responsive fit"
        fit="cover"
      />
    </div>
    <div
      class="col-xl-5 col-lg-5 col-md-7 col-sm-10 col-xs-12 full-height border-r25"
      :class="$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-sm'"
    >
      <div class="row justify-center bg-white full-height border-r25">
        <div class="col-12 q-pt-xl">
          <q-icon
            style="margin: auto; display: block"
            name="settings"
            size="xl"
            color="primary"
          />

          <div class="text-h3 text-center text-bold q-mt-lg">Welcom Back</div>
          <div class="text-center q-mt-sm">Please Enter Your details</div>

          <q-form class="q-gutter-sm q-pa-sm row justify-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-11">
              <q-input
                type="text"
                v-model="email"
                label="Email"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-11">
              <q-input
                class="q-mb-xs"
                :type="isPwd ? 'password' : 'text'"
                v-model="password"
                label="Password"
                :rules="[
                  (val) =>
                    (val && val.length >= 8 && val.length <= 20) ||
                    'pass should be longer ',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                  <!-- <img
                    src="../assets/remove_red_eye_black_24dp.svg"
                    @click="switchVisibility"
                  /> -->
                </template>
              </q-input>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-11">
              <q-select
                class="col-12"
                v-model="model"
                :options="listItems"
                label="Standerd"
                stack-label
              >
              </q-select>
            </div>
            <div
              class="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-11 q-pa-xs row justify-between items-center"
            >
              <q-checkbox v-model="check" label="Remember Me" />
              <a
                href=""
                class="float-right"
                style="text-decoration: none; color: #6d6969"
                >Forget Paswword?</a
              >
              <!-- <q-select
                v-model="model"
                :options="listItems"
                label="Standard"
                stack-label
                :dense="dense"
                :options-dense="denseOpts"
              />
              <ul>
                <li v-for="item in listItems" :key="item.id">
                  {{ item.name }}
                </li>
              </ul> -->
            </div>

            <q-toolbar class="justify-center">
              <q-btn
                label="Login"
                unelevated
                rounded
                color="primary"
                text-color="white"
                class="text-white bg-primary col-auto q-mx-sm"
                style="width: 120px"
              ></q-btn>
              <q-btn
                no-caps
                unelevated
                rounded
                color="secondary"
                text-color="primary"
                class="col-auto q-mx-sm"
                style="width: 220px"
              >
                <q-img
                  src="/src/assets/google.png"
                  width="20px"
                  class="q-mr-sm"
                />
                <div>Log in with Google</div>
              </q-btn>
            </q-toolbar>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from 'src/boot/axios';
import axios from 'axios';
import { log } from 'console';
export interface Company {
  name: string;
  countryCode: string;
  market_cap: string;
  id: number;
}

const check = ref(false);
const isPwd = ref(true);
const email = ref('');
const password = ref('');
const listItems = ref<string[]>([]);
const model = ref(null);

// async function getData() {
//   const res = await fetch('https://testapi.devtoolsdaily.com/companies/');
//   const finalRes = (await res.json()) as Company[];
//   finalRes.forEach((element: Company) => {
//     listItems.value.push(element.name);
//   });
// }

// getData();

// const getItems = async () => {
//   try {
//     const { res } = await api.get(
//       'https://testapi.devtoolsdaily.com/companies/'
//     );
//     listItems.value = res;
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// onMounted(() => {
//   getItems();
// });
// onMounted(() => {
//   axios.get('https://testapi.devtoolsdaily.com/companies/').then((res) => {
//     res.forEach(element => {
//       listItems.value=res.data;
//     });
//   });
// });
const getItem = async () => {
  try {
    const res = await axios.get('https://testapi.devtoolsdaily.com/companies/');
    const finalRes = (await res.data) as Company[];
    finalRes.forEach((el: Company) => {
      listItems.value.push(el.name);
    });
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  getItem();
});
</script>

<!-- <script lang="ts">
import { ref, computed } from 'vue';
export default {
  setup() {

const listItems=[]
    return {

      check: ref(false),
      isPwd: ref(true),
      email: ref(''),
      password: ref(''),
      regularExpression: ref(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*] $/
      ),
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      listItems: [],
      dense: ref(false),
      denseOpts: ref(false),



    };
  },
};
</script> -->
