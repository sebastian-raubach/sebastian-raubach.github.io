<template>
  <v-container>
    <h1 class="text-h4">Publications</h1>
    <v-divider class="my-4" />

    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="min(900px, 100%)"
    >
      <v-timeline align="start" side="end">
        <v-timeline-item
          v-for="year in byYear"
          :key="`timeline-year-${year.year}`"
          size="small"
        >
          <template #opposite>
            <div
              :class="`pt-1 headline font-weight-bold`"
              v-text="year.year"
            />
          </template>
          <div>
            <v-card
              v-for="pub in year.publications"
              :key="`timeline-year-${year.year}-pub-${pub.title}`"
              class="elevation-2 mb-3"
            >
              <v-card-title class="text-h5 text-wrap">
                {{ pub.title }}
              </v-card-title>
              <v-card-text v-html="pub.citation" class="text-wrap" />
              <v-card-text>
                <v-btn color="primary" :href="pub.doi">
                  View
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  interface Publication {
    year: number
    title: string
    citation: string
    doi: string
  }

  const publications = ref<Publication[]>([{
    title: 'Boosting photosynthesis opens new opportunities for agriculture sustainability and circular economy: The BEST-CROP research and innovation action',
    year: 2025,
    citation: 'Pesaresi, P., Bono, P., Corn, S., et al. (2025), Boosting photosynthesis opens new opportunities for agriculture sustainability and circular economy: The BEST-CROP research and innovation action. <o>Plant J</i> 2025; <b>121</b>.',
    doi: 'https://doi.org/10.1111/tpj.17264',
  }, {
    title: 'Towards smart and sustainable development of modern berry cultivars in Europe',
    year: 2022,
    citation: 'Senger, E., Osorio, S., Olbricht, K., et al. (2022), Towards smart and sustainable development of modern berry cultivars in Europe. <i>Plant J</i> 2022; <b>111</b>: 1238-1251.',
    doi: 'https://doi.org/10.1111/tpj.15876',
  }, {
    title: 'GridScore: a tool for accurate, cross-platform phenotypic data collection and visualization',
    year: 2022,
    citation: 'Raubach, S., Schreiber, M. &amp; Shaw, P.D. GridScore: a tool for accurate, cross-platform phenotypic data collection and visualization. <i>BMC Bioinformatics</i> 2022; <b>23</b>, 214.',
    doi: 'https://doi.org/10.1186/s12859-022-04755-2',
  }, {
    title: 'Quinoa Phenotyping Methodologies: An International Consensus',
    year: 2021,
    citation: 'Stanschewski, C.S., Rey, E., Fiene, G., et al. Quinoa Phenotyping Methodologies: An International Consensus. <i>Plants</i> 2021; <b>10</b>, 1759.',
    doi: 'https://doi.org/10.3390/plants10091759',
  }, {
    title: 'Development of High Yielding Cowpea [Vigna unguiculata (L.) Walp.] Lines with Improved Quality Seeds through Mutation and Pedigree Selection Methods',
    year: 2021,
    citation: 'Metwally, E., Sharshar, M., Masoud, A., et al. Development of High Yielding Cowpea [Vigna unguiculata (L.) Walp.] Lines with Improved Quality Seeds through Mutation and Pedigree Selection Methods. <i>Horticulturae</i> 2021; <b>7</b>, 271.',
    doi: 'https://doi.org/10.3390/horticulturae7090271',
  }, {
    title: 'Diversity analysis of 80,000 wheat accessions reveals consequences and opportunities of selection footprints',
    year: 2020,
    citation: 'Sansaloni, C., Franco, J., Santos, B. et al. Diversity analysis of 80,000 wheat accessions reveals consequences and opportunities of selection footprints. <i>Nat Commun</i>. 2020; <b>11</b>, 4572.',
    doi: 'https://doi.org/10.1038/s41467-020-18404-w',
  }, {
    title: 'DIVERSiplotter – A tool for field data visualisation based on the DIVERSify intercropping trials',
    year: 2020,
    citation: 'Raubach, S., Pappagallo, S., Karley, A., et al. DIVERSiplotter – A tool for field data visualisation based on the DIVERSify intercropping trials.',
    doi: 'https://doi.org/10.5281/zenodo.4783313',
  }, {
    title: 'From bits to bites: Advancement of the Germinate platform to support prebreeding informatics for crop wild relatives',
    year: 2020,
    citation: 'Raubach, S., Kilian, B., Dreher, K., et al. From bits to bites: Advancement of the Germinate platform to support genetic resources collections and prebreeding informatics for crop wild relatives. <i>Crop Science</i> 2021; <b>61</b>: 1538–1566.',
    doi: 'https://doi.org/10.1002/csc2.20248',
  }, {
    title: 'BrAPI—an application programming interface for plant breeding applications',
    year: 2019,
    citation: 'Selby, P., Abbeloos, R., Backlund, J.E., The BrAPI consortium et al. BrAPI—an application programming interface for plant breeding applications, <i>Bioinformatics</i> 2019; <b>35</b>, 20: 4147–4155.',
    doi: 'https://doi.org/10.1093/bioinformatics/btz190',
  }, {
    title: 'Germinate 3: Development of a Common Platform to Support the Distribution of Experimental Data on Crop Wild Relatives',
    year: 2017,
    citation: 'Shaw, P.D., Raubach, S., Hearne, S.J., Dreher, K., Bryan, G., McKenzie, G., Milne, I., Stephen, G. and Marshall, D.F., Germinate 3: Development of a Common Platform to Support the Distribution of Experimental Data on Crop Wild Relatives. <i>Crop Science</i> 2017; <b>57</b>: 1259-1273.',
    doi: 'https://doi.org/10.2135/cropsci2016.09.0814',
  }, {
    title: 'Spectral Subspace Clustering for Graphs with Feature Vectors',
    year: 2013,
    citation: 'Günnemann, S., Färber, I., Raubach, S. &amp; Seidl, T. Spectral Subspace Clustering for Graphs with Feature Vectors, <i>IEEE 13th International Conference on Data Mining</i>, 2013: 231-240',
    doi: 'https://doi.org/10.1109/ICDM.2013.110',
  }, {
    title: 'A tool for automated evaluation of algorithms',
    year: 2012,
    citation: 'Kranen, P., Wels, S., Rohlfs, T., Raubach, S., &amp; Seidl, T. A tool for automated evaluation of algorithms, <i>Proceedings of the 21st ACM international conference on Information and knowledge management (CIKM \'12)</i>, 2012; 2692–2694.',
    doi: 'https://doi.org/10.1145/2396761.2398728',
  }, {
    title: 'Flexible Fault Tolerant Subspace Clustering for Data with Missing Values',
    year: 2011,
    citation: 'Günnemann, S., Muller, E., Raubach, S. &amp; Seidl, T., Flexible Fault Tolerant Subspace Clustering for Data with Missing Values, <i>IEEE 11th International Conference on Data Mining</i>, 2011; 231-240.',
    doi: 'https://doi.org/10.1109/ICDM.2011.70',
  }])

  const byYear = computed(() => {
    const result = new Map<number, Publication[]>()

    publications.value.forEach((p: Publication) => {
      if (!result.has(p.year)) {
        result.set(p.year, [p])
      } else {
        result.get(p.year)?.push(p)
      }
    })

    return [...result.keys()].sort((a: number, b: number) => b - a).map((y: number) => {
      return {
        year: y,
        publications: result.get(y),
      }
    })
  })
</script>
