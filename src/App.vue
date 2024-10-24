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
          <v-btn icon v-bind="props">
            <v-icon>{{ mdiThemeLightDark }}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-subheader class="text-high-emphasis text-uppercase font-weight-black">Theme</v-list-subheader>
          <v-list-item :active="store.theme === 'light'" @click="store.setTheme('light')">
            <template #prepend>
              <v-icon>{{ mdiWhiteBalanceSunny }}</v-icon>
            </template>
            <v-list-item-title>Light</v-list-item-title>
          </v-list-item>
          <v-list-item :active="store.theme === 'dark'" @click="store.setTheme('dark')">
            <template #prepend>
              <v-icon>{{ mdiWeatherNight }}</v-icon>
            </template>
            <v-list-item-title>Dark</v-list-item-title>
          </v-list-item>
          <v-list-item :active="store.theme === 'system'" @click="store.setTheme('system')">
            <template #prepend>
              <v-icon>{{ mdiDesktopTowerMonitor }}</v-icon>
            </template>
            <v-list-item-title>System</v-list-item-title>
          </v-list-item>
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
  import { ref, watch, watchEffect } from 'vue'
  import { mdiDesktopTowerMonitor, mdiHome, mdiThemeLightDark, mdiWeatherNight, mdiWhiteBalanceSunny, mdiDeveloperBoard, mdiNewspaperVariantMultiple } from '@mdi/js'
  import { useTheme } from 'vuetify'

  // Composition stuff
  const theme = useTheme()
  const store = coreStore()
  const router = useRouter()

  // Refs
  const systemTheme = ref<string>('dark')
  const drawerVisible = ref<boolean>(false)

  // Listen for theme changes in the store
  let media: MediaQueryList
  watch(() => store.theme, (value: string) => {
    if (value === 'system') {
      // If currently system, get prefered scheme and listen to changes
      media = window.matchMedia('(prefers-color-scheme: dark)')
      media.addEventListener('change', onThemeChange)
      onThemeChange()
    } else if (media) {
      // Else, remove listener
      media.removeEventListener('change', onThemeChange)
    }
  }, { immediate: true })
  function onThemeChange () {
    systemTheme.value = media!.matches ? 'dark' : 'light'
  }
  // Listen for changes to the theme and update Vuetify global theme
  watchEffect(() => {
    theme.global.name.value = store.theme === 'system' ? systemTheme.value : store.theme
  })
</script>

<style>
.text-wrap {
  text-wrap: auto;
}
</style>
