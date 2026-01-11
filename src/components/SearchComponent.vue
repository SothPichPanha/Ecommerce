<script>
import 'primeicons/primeicons.css';
import DropdownComponent from './DropdownComponent.vue';
export default {
  name: 'SearchComponent',
  components: {
    DropdownComponent
  },
 data() {
  return {
    selectedItem: '',
  }
}

 
}
</script>
<template>
    <div class="border border-2 flex items-center p-2 pr-[30px] pl-2 rounded-md w-fit border-gray-300">
      <div class="flex gap-3 items-center mr-4">
        <DropdownComponent
  v-model="selectedItem"
  title="All Categories"
  :items="['Food', 'Drink', 'Snack']"
/>
      </div>

        <i class="pi pi-minus rotate-90" style="color: gray"></i>
        <input type="text" placeholder="Search for products" class="outline-none ml-2 mr-[100px] font-[Poppins]"/>
        <span class="pi pi-search"></span>    
    </div> 
</template>