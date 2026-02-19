<script>
import Addtocart from '../helpComponent/Addtocart.vue';
import HeaderView from '@/views/Client/HeaderView.vue';
import footerView from '@/views/Client/FooterView.vue';
export default {
  name: "Pdetail",
    components: {
        Addtocart,
        HeaderView,
        footerView
    },
  data() {
    return {
      selectedImage: 0,
      quantity: 1,
      activeTab: "description",
      isWishlisted: false,
      product: {
        sku: "NP720QED-KB2US Galaxy Book2",
        price: "KHR641,000.00",
        availability: "In Stock",
        category: "Electric",
        tags: ["Electric"],
        images: [
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80",
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
          "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
        ],
        description:
          "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.",
      },
      tabs: ["description", "custom tab", "reviews"],
      relatedProducts: [
        {
          name: "Beats Solo2 Wireless",
          price: "KHR160,000.00",
          oldPrice: null,
          sale: false,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
        },
        {
          name: "Ygoogle Speaker",
          price: "KHR67,000.00",
          oldPrice: null,
          sale: false,
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
        },
        {
          name: "Lamo Sanremo Edition",
          price: "KHR261,595.00",
          oldPrice: null,
          sale: false,
          image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80",
        },
        {
          name: "Ysamsung Camera",
          price: "KHR150,000.00",
          oldPrice: "KHR155,000.00",
          sale: true,
          image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=300&q=80",
        },
      ],
    };
  },
  methods: {
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity > 1) this.quantity--;
    },
    selectImage(index) {
      this.selectedImage = index;
    },
    toggleWishlist() {
      this.isWishlisted = !this.isWishlisted;
    },
    prevImage() {
      this.selectedImage =
        (this.selectedImage - 1 + this.product.images.length) %
        this.product.images.length;
    },
    nextImage() {
      this.selectedImage =
        (this.selectedImage + 1) % this.product.images.length;
    },
  },
};
</script>

<template>
<HeaderView />
  <div class="max-w-7xl mx-auto px-5 py-8 bg-white text-gray-800 mt-[200px]">

    <!-- ── Product Detail ── -->
    <div class="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-5 mb-12">

      <!-- Thumbnails -->
      <div class="flex md:flex-col flex-row gap-2">
        <div
          v-for="(img, i) in product.images"
          :key="i"
          @click="selectImage(i)"
          class="w-16 h-16 border rounded cursor-pointer overflow-hidden flex-shrink-0 transition-all duration-200"
          :class="selectedImage === i ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'"
        >
          <img :src="img" :alt="'thumb-' + i" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden min-h-64">
        <button
          @click="prevImage"
          class="absolute left-2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 text-xl transition"
        >&#8249;</button>

        <img
          :src="product.images[selectedImage]"
          alt="Main product"
          class="w-full h-72 object-contain p-4"
        />

        <button
          @click="nextImage"
          class="absolute right-2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 text-xl transition"
        >&#8250;</button>

        <button class="absolute bottom-3 right-3 bg-white/80 text-gray-500 text-sm px-2 py-0.5 rounded hover:bg-white transition border border-gray-100">
          ⤢
        </button>
      </div>

      <!-- Product Info -->
      <div class="flex flex-col gap-3">
        <!-- SKU -->
        <p class="text-xs text-gray-400 tracking-wide">{{ product.sku }}</p>

        <!-- Price -->
        <h1 class="text-2xl font-semibold text-gray-900">{{ product.price }}</h1>

        <!-- Short Description -->
        <p class="text-sm text-gray-500 leading-relaxed">{{ product.description }}</p>

        <!-- Qty + Cart + Icons -->
        <div class="flex items-center gap-2 flex-wrap mt-1">
          <!-- Quantity -->
          <div class="flex items-center border border-gray-200 rounded overflow-hidden">
            <button
              @click="decreaseQty"
              class="w-8 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 text-lg transition"
            >−</button>
            <span class="w-9 text-center text-sm font-medium select-none">{{ quantity }}</span>
            <button
              @click="increaseQty"
              class="w-8 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 text-lg transition"
            >+</button>
          </div>

          <!-- Add to Cart -->
          <button class="h-9 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-widest rounded transition">
            ADD TO CART
          </button>

          <!-- Wishlist -->
          <button
            @click="toggleWishlist"
            class="w-9 h-9 border rounded flex items-center justify-center text-base transition"
            :class="isWishlisted
              ? 'border-red-400 text-red-400'
              : 'border-gray-200 text-gray-400 hover:border-gray-400'"
          >♡</button>

          <!-- Share -->
          <button class="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:border-gray-400 transition text-sm">
            ⤢
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="flex flex-wrap gap-2">
          <span class="text-xs border border-gray-200 rounded px-2 py-1 bg-gray-50 text-red-600">🔒 McAfee SECURE</span>
          <span class="text-xs border border-gray-200 rounded px-2 py-1 bg-gray-50 text-green-700">✓ Norton</span>
          <span class="text-xs border border-gray-200 rounded px-2 py-1 bg-gray-50 text-gray-500">✓ VeriSign</span>
          <span class="text-xs border border-gray-200 rounded px-2 py-1 bg-gray-50 text-gray-500">✓ TRUSTe</span>
        </div>

        <!-- Ask a Question -->
        <a href="#" class="text-sm text-blue-500 hover:underline w-fit">Ask a Question</a>

        <!-- Meta -->
        <div class="text-sm leading-7 text-gray-600">
          <p>
            <span class="font-medium text-gray-700">Availability: </span>
            <span class="text-green-600">{{ product.availability }}</span>
          </p>
          <p>
            <span class="font-medium text-gray-700">Categories: </span>{{ product.category }}
          </p>
          <p>
            <span class="font-medium text-gray-700">Tags: </span>{{ product.tags.join(", ") }}
          </p>
        </div>

        <!-- Social Share -->
        <div class="flex gap-2">
          <a
            v-for="icon in ['f', '𝕏', 'P', 't', '✉']"
            :key="icon"
            href="#"
            class="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500 font-semibold transition no-underline"
          >{{ icon }}</a>
        </div>
      </div>
    </div>

    <!-- ── Tabs ── -->
    <div class="border-t border-gray-100 pt-8 mb-12">
      <!-- Tab Buttons -->
      <div class="flex gap-2 mb-7 flex-wrap">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-5 py-1.5 text-sm rounded-full border transition capitalize"
          :class="activeTab === tab
            ? 'border-gray-800 bg-white text-gray-900 font-medium'
            : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-400'"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Description -->
      <div v-if="activeTab === 'description'" class="space-y-5 text-sm text-gray-500 leading-relaxed">
        <div>
          <h3 class="text-base font-semibold text-gray-800 mb-1">Viverra a consectetur</h3>
          <p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p>
        </div>
        <div>
          <h3 class="text-base font-semibold text-gray-800 mb-1">Facilisis scelerisque mi</h3>
          <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p>
        </div>
        <div>
          <h3 class="text-base font-semibold text-gray-800 mb-1">Ullamcorper metus</h3>
          <p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished, particularly at a time when scientific techniques.</p>
        </div>
        <div>
          <h3 class="text-base font-semibold text-gray-800 mb-1">Dignissim a leo cum</h3>
          <p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished, ironically, at a time when scientific techniques.</p>
        </div>
      </div>

      <!-- Custom Tab -->
      <div v-if="activeTab === 'custom tab'" class="text-sm text-gray-500">
        <p>Custom tab content goes here.</p>
      </div>

      <!-- Reviews -->
      <div v-if="activeTab === 'reviews'" class="text-sm text-gray-500">
        <p>No reviews yet. Be the first to review this product.</p>
      </div>
    </div>

    <!-- ── You May Also Like ── -->
    <div>
      <h2 class="text-xl font-semibold text-center text-gray-900 mb-7">You may also like</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div
          v-for="(item, i) in relatedProducts"
          :key="i"
          class="group cursor-pointer border rounded-lg overflow-hidden relative transition-shadow hover:shadow-lg p-3"
        >
          <!-- Card Image -->
          <div class="relative bg-gray-50 rounded-lg overflow-hidden aspect-square mb-3">
            <span
              v-if="item.sale"
              class="absolute top-2 right-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide"
            >SALE</span>
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Name -->
          <p class="text-sm font-medium text-gray-800 mb-1">{{ item.name }}</p>

          <!-- Price -->
          <p class="text-sm text-gray-500">
            <span v-if="item.oldPrice" class="line-through text-gray-300 mr-1">{{ item.oldPrice }}</span>
            <span :class="item.sale ? 'text-red-500 font-semibold' : ''">{{ item.price }}</span>
          </p>
        </div>
      </div>
    </div>

  </div>
  <footerView />
</template>