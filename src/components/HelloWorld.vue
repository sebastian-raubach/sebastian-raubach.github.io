<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="min(900px, 100%)"
    >
      <v-img
        class="mb-4"
        height="150"
        src="/img/logo.svg"
      />

      <div class="text-center">
        <h1 class="text-h2 font-weight-bold"><span class="text-primary">Sebastian</span> <span class="text-secondary">Raubach</span></h1>
        <div class="text-h5 font-weight-light mb-n1">Research Software Engineer</div>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="primary"
            :prepend-icon="mdiRocketLaunchOutline"
            rounded="lg"
            variant="tonal"
          >
            <template #append>
              <v-avatar image="/img/sebastian.jpg" size="160" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Welcome</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Thanks for visiting my home page. Have a look around to see the kind of work I do both professionally and as a hobby.
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            class="py-4"
            rounded="lg"
            subtitle="Learn more about me and the work I do"
            title="About me"
          >
            <v-card-text class="text-wrap">
              <p class="mb-2">I am a Research Software Engineer (RSE) working as part of the Information & Computational Sciences (ICS) Department at the James Hutton Institute. I am responsible for the conceptualisation, management and development of cutting-edge mobile applications, databases and web applications for funders as well as commercial breeding companies. My role is to drive the development of software solutions for plant genetic resources collections, phenotypic data collection and visualization tools.</p>
              <p>In my spare time I like to develop tools for my personal use while trying to create them in a generic way to ensure their utility for others.</p>
            </v-card-text>
            <template #prepend>
              <v-icon color="aboutme" :icon="mdiInformation" />
            </template>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            class="py-4"
            rounded="lg"
            subtitle="Explore a selection of my projects"
            title="Portfolio"
            to="portfolio"
          >
            <template #prepend>
              <v-icon color="portfolio" :icon="mdiDeveloperBoard" />
            </template>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            class="py-4"
            rounded="lg"
            subtitle="See a list of my publications"
            title="Publications"
            to="publications"
          >
            <template #prepend>
              <v-icon color="publications" :icon="mdiNewspaperVariantMultiple" />
            </template>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            :append-icon="mdiOpenInNew"
            class="py-4"
            href="https://github.com/sebastian-raubach"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="See my open-source work on GitHub"
            target="_blank"
            title="GitHub Profile"
          >
            <template #prepend>
              <v-icon color="github" :icon="mdiGithub" />
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { mdiGithub, mdiOpenInNew, mdiDeveloperBoard, mdiRocketLaunchOutline, mdiNewspaperVariantMultiple, mdiInformation } from '@mdi/js'
</script>

<style>
</style>