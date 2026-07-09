<template>
  <v-app>
    <v-app-bar color="background">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawerVisible = !drawerVisible" />
      </template>

      <v-avatar image="/img/logo.svg" rounded="0" />

      <v-app-bar-title style="cursor: pointer" @click="router.push('/')">Sebastian Raubach</v-app-bar-title>

      <v-spacer />

      <v-menu>
        <template #activator="{ props }">
          <v-btn id="theme-button" :icon="mdiThemeLightDark" v-bind="props" />
        </template>
        <v-list>
          <v-list-subheader class="text-high-emphasis text-uppercase font-weight-black">Theme</v-list-subheader>
          <v-list-item :prepend-icon="mdiWhiteBalanceSunny" :active="store.storeTheme === 'light'" @click="store.setTheme('light')" title="Light"><template #append><v-icon :icon="mdiCheck" v-if="store.storeTheme === 'light'" /></template></v-list-item>
          <v-list-item :prepend-icon="mdiWeatherNight" :active="store.storeTheme === 'dark'" @click="store.setTheme('dark')" title="Dark"><template #append><v-icon :icon="mdiCheck" v-if="store.storeTheme === 'dark'" /></template></v-list-item>
          <v-list-item :prepend-icon="mdiBrightnessAuto" :active="store.storeTheme === 'system'" @click="store.setTheme('system')" title="System"><template #append><v-icon :icon="mdiCheck" v-if="store.storeTheme === 'system'" /></template></v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawerVisible"
      :location="$vuetify.display.mobile ? 'top' : undefined"
      temporary
    >
      <v-list nav>
        <v-list-item title="Home" to="/"><template #prepend><v-icon>{{ mdiHome }}</v-icon></template></v-list-item>
        <v-list-item title="Portfolio" to="/portfolio"><template #prepend><v-icon>{{ mdiDeveloperBoard }}</v-icon></template></v-list-item>
        <v-list-item title="Publications" to="/publications"><template #prepend><v-icon>{{ mdiNewspaperVariantMultiple }}</v-icon></template></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { coreStore } from '@/stores/app'
  import { ref, watchEffect } from 'vue'
  import { mdiDesktopTowerMonitor, mdiHome, mdiThemeLightDark, mdiWeatherNight, mdiWhiteBalanceSunny, mdiDeveloperBoard, mdiNewspaperVariantMultiple, mdiBrightnessAuto, mdiCheck } from '@mdi/js'
  import { useTheme } from 'vuetify'
  import { useDark } from '@vueuse/core'

  // Composition stuff
  const theme = useTheme()
  const store = coreStore()
  const router = useRouter()
  const isDark = useDark()

  // Refs
  const drawerVisible = ref<boolean>(false)

  // Listen for theme changes in the store
  watchEffect(() => {
    const str = isDark.value ? 'dark' : 'light'
    theme.setTransitionOrigin(document.querySelector('#theme-button'))
    theme.change(store.storeTheme === 'system' ? str : store.storeTheme, true)
    store.setSystemTheme(str)
  })
</script>

<style>
.text-wrap {
  text-wrap: auto;
}
</style>
