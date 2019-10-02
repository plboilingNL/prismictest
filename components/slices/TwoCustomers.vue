<template>
	<div class = "row two-customers" >
		<div class = "col-lg-6" :style="{ backgroundImage: 'url(' + slice.primary.customer_left_background_image.url + ')' }">
			<prismic-rich-text :field="slice.primary.customer_left_text"/>
			<prismic-link class="btn" :field="slice.primary.customer_left_link">
              	{{ $prismic.richTextAsPlain(slice.primary.customer_left_link_text) }}
            </prismic-link>
		</div>
		<div class = "col-lg-6" :style="{ backgroundImage: 'url(' + slice.primary.customer_right_background_image.url + ')' }">
			<prismic-rich-text :field="slice.primary.customer_right_text"/>
			<prismic-link class="btn" :field="slice.primary.customer_right_link">
              	{{ $prismic.richTextAsPlain(slice.primary.customer_right_link_text) }}
            </prismic-link>
		</div>
	</div>
</template>


<script>
export default {
  props: ['slice'],
  name: 'two-customers',
}
</script>