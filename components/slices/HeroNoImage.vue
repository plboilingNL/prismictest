<template>
		<div class = "row hero-no-image">
			<div class = "container-fluid">
				<div class = "container no-hero-content">
  				<h1>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h1>
  				<h2>{{ $prismic.richTextAsPlain(slice.primary.subheading) }}</h2>
  				<prismic-rich-text :field="item.content"/>
  			</div>
  		</div>
  	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'hero-no-image',
  data () {
    return {
      field: {
        link_text: null
      }
    };
  },
}
</script>