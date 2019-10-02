<template>
	<div class = "row cta-with-bg" >
	<div class = "container-fluid" :style="{ backgroundImage: 'url(' + slice.primary.image.url + ')' }">
		<div class = "col-lg-12">
			<prismic-rich-text :field="slice.primary.text"/>
			<prismic-link class="btn" :field="slice.primary.link">
   	    		{{ $prismic.richTextAsPlain(slice.primary.link_text) }}
        	</prismic-link>
        </div>
	</div>
</div>
</template>
<script>
export default {
  props: ['slice'],
  name: 'cta-with-bg',
}
</script>