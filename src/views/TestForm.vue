<template>
  <div>
    <h2>Store Name & Age</h2>

    <form @submit.prevent="submitForm" class="flex gap-2 m-5">
      <input v-model="name" placeholder="Enter name" class="border-2 h-[50px] p-2"/>
      <input v-model="age" type="number" placeholder="Enter age" class="border-2"/>
      <button type="submit" class="border-2 border-gray-500 rounded-lg h-[50px] w-[100px] bg-white-500 text-[black] hover:scale(1.2s) hover:bg-blue-500 hover:text-white ">Save</button>
    </form>

    <p v-if="message">{{ message }}</p>

    <hr />

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      age: "",
      message: "",
      people: [] // ✅ ADD THIS
    };
  },

  mounted() {
    this.getPeople(); // ✅ Load data when page loads
  },

  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:8100/api/people",
          {
            name: this.name,
            age: this.age
          }
        );

        this.message = response.data.message;

        this.name = "";
        this.age = "";

        this.getPeople(); // ✅ Refresh table after save
      } catch (error) {
        console.error(error);
      }
    },

    async getPeople() {
      try {
        const response = await axios.get(
          "http://localhost:8100/api/people"
        );

        this.people = response.data; // ✅ STORE DATA HERE
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style scoped>
table {
  border-collapse: collapse; /* merge borders */
  width: 100%;
}

th, td {
  border: 1px solid #000; /* black border */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
