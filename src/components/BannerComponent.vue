<script>
export default {
  name: 'BannerComponent',
}
</script>
<template>
    <div class="bg-[url(/image/Group_5909.jpg.png)] w-[330px] h-[240px] border border-gray-300 rounded-lg bg-cover bg-center">
        <div class="flex flex-col gap-2 mt-10 ml-10 text-black font-bold text-[20px] pt-[25px] ">
            <span>Osmo</span>
            <span>Pocket Series</span>
        </div>
        <div class="flex gap-4 items-center ml-10 pt-[30px]">
            <button class="bg-black text-white px-4 py-2 rounded-md flex gap-2 items-center hover:bg-gray-800 transition-colors duration-200 hover:scale-105">
                 <span>Shop now</span>
                <i class="pi pi-arrow-right"></i>
            </button>
           
        </div>
        
    </div>
</template>