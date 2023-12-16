<template>
  <v-footer app inset outlined tile dark>
    <v-col cols="8">
      <v-row>
        <v-btn
          :key="item.title as any"
          class="text pt-2 black--text text--darken-2"
          v-for="item in linkFooter"
          variant="text"
        >
          {{ item.title }}
        </v-btn>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row>
        <div class="text-body-1 pt-2 black--text text--darken-2">
          Copyright © {{ new Date().getFullYear() }} <strong>Sistem perkuliahan</strong>
        </div>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const linkFooter = ref([
  {
    title: 'CONTACT',
    link: '/contact',
    markdownPath: './Markdown/GeneralInfo/contact.md',
    data_cy: 'bottom_item_contact'
  },
  {
    title: 'FAQ',
    link: '/faq',
    markdownPath: './Markdown/GeneralInfo/FAQ.vue',
    data_cy: 'bottom_item_faq'
  },
  {
    title: 'PRIVACY POLICY',
    link: '/privacy-policy',
    markdownPath: './Markdown/GeneralInfo/privacy_policy.md',
    data_cy: 'bottom_item_privacy_policy'
  },
  {
    title: 'TERM OF USE',
    link: '/term-of-use',
    markdownPath: './Markdown/GeneralInfo/term_of_use.md',
    data_cy: 'bottom_item_terms_of_use'
  },
  {
    title: 'GUIDE',
    link: '/guide',
    markdownPath: './Markdown/GeneralInfo/guide.vue',
    data_cy: 'bottom_item_guide'
  }
])
</script>
