<template>
  <v-footer app class="bg-light" height="40">
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="24"
      />
    </a>

    <div
      class="text-caption"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Sebastian Raubach</span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  import { mdiGithub } from '@mdi/js'

  const items = [
    {
      title: 'GitHub Profile',
      icon: mdiGithub,
      href: 'https://github.com/sebastian-raubach/',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
