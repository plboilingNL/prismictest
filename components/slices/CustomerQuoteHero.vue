<template>
	<div class = "row customer-quote-hero align-items-center h-100">
		<div class = "container-fluid bg" :style="{ backgroundImage: 'url(' + slice.primary.background_image.url + ')' }">
			<div class = "container">
				<div class = "col-lg-12">
					<div class = "img-container">
  						<prismic-image :field="slice.primary.logo"/>
  					</div>
  					<h3>{{ $prismic.richTextAsPlain(slice.primary.quote) }}</h3>
          			<prismic-rich-text :field="slice.primary.customer_name"/> 
  					<prismic-link class="btn btn-primary" :field="slice.primary.link">
              			{{ $prismic.richTextAsPlain(slice.primary.link_text) }}
          			</prismic-link>
  				</div>
  			</div>
  		</div>
  	</div>
</template>

<script>
	export default {
		props: ['slice'],
  		name: 'customer-quote-hero',
	}
</script>

<style lang="scss">
	.customer-quote-hero{
		height:600px;
		text-align:center;
		color:#fff;

		.bg{
			background:center top no-repeat;
			background-size:cover;
			padding:70px 0;
		}
		.img-container{
			max-width:125px;
			background:#fff;
			margin:auto;
			margin-bottom:30px;
		}

		img{
			width:100%;
			height:auto;
		}

		h3{
			font-size:26px;
			line-height:46px;
			font-weight:500;
			color:#fff

		}
	}
</style>