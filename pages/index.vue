<!-- pages/blog/_slug/index.vue -->

<template>
<slices-block :slices="slices"/>
</template>

<script>
	import Prismic from 'prismic-javascript'
	import { initApi, generatePageData } from '@/prismic.config'
	// Imports for all components
	import SlicesBlock from '~/components/SlicesBlock.vue'

	export default {
		
  		//name: 'products',
    	components: {
  			SlicesBlock,
  		},

		head () {
    		return {
        		title: (this.content.meta_title),
      			meta: [{ name: 'description', content: (this.content.meta_description) }]
    		}
		},

  		asyncData(context) {
    		if (context.payload) {
      			return generatePageData('homepage', context.payload)
    		} else {
      			return initApi().then(api => {
        			return api
          			.query(Prismic.Predicates.at('document.type', 'homepage'))
          			.then(response => {
            			return generatePageData('homepage', response.results[0].data)
        			})
      			})
    		}
  		}
	}
</script>