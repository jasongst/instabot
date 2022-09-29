<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row justify-center">
        <h4 class="text-h4 text-white text-bold q-my-md">Instabot v1</h4>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="username"
                type="text"
                label="Nom d'utilisateur"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Mot de passe"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="Login"
              @click="login()"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import businessApi from '../api/index';

const username = ref('');
const password = ref('');

const login = async () => {
  await businessApi.auth.logIn(username.value, password.value);
};
</script>

<style scoped>
.q-page {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 2%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.q-card {
  width: 360px;
  border-radius: 10px;
}
</style>
