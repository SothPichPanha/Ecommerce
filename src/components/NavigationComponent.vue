<script>
import DropdownComponent from './DropdownComponent.vue';
export default {
  name: 'NavigationComponent',
  components: {
    DropdownComponent
  },
  data() {
    return {
        selectedItem: '',
        selectedItem1: '',
        selectedItem2: '',
        selectedItem3: '',
        selectedItem4: '',
        selectedItem5: '',
        selectedItem0: '',

    }
    }
}
</script>
<template>

<div class="bg-[#2453D3] h-[60px] flex items-center px-4">
  <div class="bg-[#113EBA] w-[190px] h-[60px] flex items-center justify-center ml-[58px]">
      <DropdownComponent v-model="selectedItem0" :icons="false" color="white" itemColor="black" title="All Categories" :items="['item1', 'item2', 'item3']" />
  </div>

  <div class="flex items-center gap-[50px] ml-[50px]">
    <span class="text-white hover:text-green-500">Home</span>
    <DropdownComponent v-model="selectedItem1" :icons="false" color="white" itemColor="black" title="Pages" :items="['item1', 'item2', 'item3']" />
    <DropdownComponent v-model="selectedItem2" :icons="false" color="white" itemColor="black" title="Shop" :items="['item1', 'item2', 'item3']" />
    <DropdownComponent v-model="selectedItem3" :icons="false" color="white" title="Product" :items="['item1', 'item2', 'item3']" />
    <DropdownComponent v-model="selectedItem4" :icons="false" color="white" title="Demo" :items="['item1', 'item2', 'item3']" />
 
  </div>
  <div class="flex ml-auto text-white gap-2 items-center mr-[50px]">
    <i class="pi pi-bell"></i>
    <span> Hotline: <span class="text-[#FAFF00]">(+100) 123456789</span></span>
  </div>
</div> 
   
</template>
