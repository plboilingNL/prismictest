<template> 
  <div class = "container page-bottom-cta">
  	<div class = "col-lg-12">
  		<h4 class="text-center">{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h4>
  		<prismic-rich-text :field="slice.primary.content"/>
  		<prismic-link class="btn btn-primary" :field="slice.primary.link">
            {{ $prismic.richTextAsPlain(slice.primary.link_text) }}
        </prismic-link>
    </div>
</div>
</template>

<script>
	export default {
  		props: ['slice'],
  		name: 'page-bottom-cta',
	}
</script>

<style lang="scss">
	.page-bottom-cta {
		padding:70px 0;

		h4{
			font-size:20px;
			line-height:30px;
			font-weight:700;
		}
	}
</style>

