<template>
  <v-container>
    <h1 class="text-h4">Portfolio</h1>
    <v-divider class="my-4" />

    <h4>Categories</h4>
    <p>Select categories to filter down the portfolio.</p>
    <v-chip-group
      v-model="selectedCategories"
      class="mb-4"
      column
      multiple
    >
      <v-chip v-for="cat in allCategories" :key="`allcats-${cat}`" class="text-capitalize" filter>{{ cat }}</v-chip>
    </v-chip-group>

    <v-row>
      <v-col
        v-for="project in filteredProjects"
        :key="`project-card-${project.name}`"
        class="mb-3"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
      >
        <v-card
          class="mx-auto fill-height d-flex flex-column"
        >
          <v-img
            class="ma-5"
            contain
            max-height="200px"
            :src="`/img/projects/${project.logo}`"
          />

          <v-card-title>
            {{ project.name }}
          </v-card-title>

          <v-card-subtitle class="text-wrap">
            {{ project.description }}
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group column>
              <v-chip v-for="cat in project.categories" :key="`project-card-${project.name}-${cat}`" class="text-capitalize">{{ cat }}</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions class="mt-auto">
            <v-btn
              color="primary"
              text="More information"
              @click="project.show = !project.show"
            />

            <v-spacer />

            <v-btn
              :icon="project.show ? mdiChevronUp : mdiChevronDown"
              @click="project.show = !project.show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="project.show">
              <v-divider />

              <v-card-text>
                <v-row>
                  <v-col v-if="project.website" cols="auto">
                    <v-btn color="primary" :href="project.website" :icon="mdiWeb" />
                  </v-col>
                  <v-col v-if="project.repository" cols="auto">
                    <v-btn color="secondary" :href="project.repository" :icon="mdiGithub" />
                  </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { mdiChevronDown, mdiChevronUp, mdiGithub, mdiWeb } from '@mdi/js'

  interface Project {
    name: string
    description: string
    categories: string[]
    website: string | undefined
    repository: string | undefined
    logo: string
    show: boolean
  }

  const projects = ref<Project[]>([{
    name: 'Germinate',
    description: 'Plant genetic resources database',
    categories: ['work', 'app', 'phenotyping', 'genotyping', 'germplasm', 'database', 'pedigree'],
    website: 'https://germinate.hutton.ac.uk',
    repository: 'https://github.com/germinateplatform',
    logo: 'germinate.svg',
    show: false,
  }, {
    name: 'GridScore NEXT',
    description: 'Modern phenotyping app',
    categories: ['work', 'phenotyping', 'app', 'pwa'],
    website: 'https://gridscore.hutton.ac.uk',
    repository: 'https://github.com/cropgeeks/gridscore-next-client',
    logo: 'gridscore.svg',
    show: false,
  }, {
    name: 'Helium',
    description: 'Pedigree visualization tool',
    categories: ['work', 'app', 'pedigree'],
    website: 'https://helium.hutton.ac.uk',
    repository: undefined,
    logo: 'helium.svg',
    show: false,
  }, {
    name: 'Pick-a-Mix',
    description: 'Intercropping data visualization tool',
    categories: ['work', 'app', 'database', 'intercropping', 'visualization'],
    website: 'https://ics.hutton.ac.uk/pick-a-mix/',
    repository: 'https://github.com/cropgeeks/pick-a-mix-client',
    logo: 'pickamix.svg',
    show: false,
  }, {
    name: 'Humbug',
    description: 'Barcode generation tool',
    categories: ['work', 'app', 'barcode'],
    website: 'https://cropgeeks.github.io/humbug/',
    repository: 'https://github.com/cropgeeks/humbug',
    logo: 'humbug.svg',
    show: false,
  }, {
    name: 'SGONE',
    description: 'Easily identify potential duplicates in your data',
    categories: ['work', 'app', 'duplicate'],
    website: 'https://cropgeeks.github.io/sgone/',
    repository: 'https://github.com/cropgeeks/sgone',
    logo: 'sgone.svg',
    show: false,
  }, {
    name: 'DIVERSiplotter',
    description: 'A tool for field data visualization based on the intercropping trials',
    categories: ['work', 'app', 'database', 'intercropping', 'visualization'],
    website: 'https://ics.hutton.ac.uk/diversify/',
    repository: 'https://github.com/cropgeeks/diversify-web',
    logo: 'diversiplotter.svg',
    show: false,
  }, {
    name: 'Frickl',
    description: 'Self-hosted photo library',
    categories: ['private', 'app', 'database', 'photo', 'library'],
    website: 'https://sebastian-raubach.github.io/frickl-web/',
    repository: 'https://github.com/sebastian-raubach/frickl-web',
    logo: 'frickl.svg',
    show: false,
  }, {
    name: 'UNICON',
    description: 'Universal unit converter',
    categories: ['private', 'app', 'pwa'],
    website: 'https://unicon.pages.dev/',
    repository: 'https://github.com/sebastian-raubach/unicon',
    logo: 'unicon.svg',
    show: false,
  }, {
    name: 'ClosestHillMap',
    description: 'Map interactively showing the closest x locations to a position on the map',
    categories: ['private', 'app', 'pwa', 'geography'],
    website: 'https://sebastian-raubach.github.io/closest-hill-map/',
    repository: 'https://github.com/sebastian-raubach/closest-hill-map',
    logo: 'chm.svg',
    show: false,
  }, {
    name: 'SGUD',
    description: 'A tool to rate anything, coffee, beers, parking spaces',
    categories: ['private', 'app', 'rating'],
    website: undefined,
    repository: 'https://github.com/sebastian-raubach/sgud-client',
    logo: 'sgud.svg',
    show: false,
  }, {
    name: 'HikeTime',
    description: 'Hike time estimator based on flat walking speed and climbing speed',
    categories: ['private', 'app', 'pwa', 'hiking'],
    website: 'https://sebastian-raubach.github.io/hiketime/',
    repository: 'https://github.com/sebastian-raubach/hiketime',
    logo: 'hiketime.svg',
    show: false,
  }, {
    name: 'WeatherMatrix',
    description: 'Tool to display weather data on an LED matrix',
    categories: ['private', 'led-matrix', 'raspberry-pi'],
    website: undefined,
    repository: 'https://github.com/sebastian-raubach/rpi-led-weather/',
    logo: 'weathermatrix.svg',
    show: false,
  }])

  projects.value.forEach((p: Project) => {
    p.categories.sort((a: string, b: string) => a.localeCompare(b))
  })

  const searchString = ref<string | undefined>()
  const selectedCategories = ref<number[]>([])

  const filteredProjects = computed(() => {
    if (projects.value && projects.value.length > 0) {
      return projects.value.filter((p: Project) => {
        if (!searchString.value && selectedCategories.value.length < 1) {
          return true
        }

        if (searchString.value && p.name.includes(searchString.value)) {
          return true
        }
        if (selectedCategories.value.length > 0) {
          const catValues = allCategories.value.filter((cat: string, index: number) => selectedCategories.value.includes(index))
          for (const cat of p.categories) {
            if (catValues.includes(cat)) {
              return true
            }
          }
        }

        return false
      })
    } else {
      return projects.value
    }
  })

  const allCategories = computed(() => {
    const cats: Set<string> = new Set<string>()

    projects.value.forEach((p: Project) => {
      p.categories.forEach((c: string) => cats.add(c))
    })

    return [...cats].sort((a: string, b: string) => a.localeCompare(b))
  })
</script>

<style>

</style>
