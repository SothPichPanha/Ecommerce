<script>
import auth from '@/services/api.js';

export default {
  name: 'testlogin',

  data() {
    return {
      username: '',
      password: '',
      email: '',
      loading: false,
      errorMessage: ''
    }
  },

  methods: {
    async register() {
      this.loading = true;
      this.errorMessage = '';

      try {
        const response = await auth.register({
          name: this.username,
          email: this.email,
          password: this.password,
      
        });

        console.log(response.data);
        alert('Registration successful!');
      } catch (error) {
        console.error(error.response?.data || error);
        this.errorMessage = 'Registration failed';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<template >
    <div class="flex items-center justify-center min-h-screen">
         <div class="flex items-center justify-center bg-gray-100 border-2 border-gray-300 w-[900px] h-[500px] rounded-lg flex-col gap-4 ">
    
    <form @submit.prevent="register" class="flex flex-col gap-4 items-center">

      <div>
        <label>Username:</label>
        <input 
          v-model="username"
          type="text"
          placeholder="Enter your username"
          class="border-2 w-[300px] h-[40px] rounded-lg px-2 ml-2"
          required
        >
      </div>

      <div>
        <label>Email:</label>
        <input 
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="border-2 w-[300px] h-[40px] rounded-lg px-2 ml-2"
          required
        >
      </div>

      <div>
        <label>Password:</label>
        <input 
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="border-2 w-[300px] h-[40px] rounded-lg px-2 ml-2"
          required
        >
      </div>

      <button 
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        :disabled="loading"
      >
        {{ loading ? 'Registering...' : 'Register' }}
      </button>

      <p v-if="errorMessage" class="text-red-500">
        {{ errorMessage }}
      </p>

    </form>

  </div>
    </div>
 
</template>