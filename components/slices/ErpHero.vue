<template>
	<div class = "row">
		<div class = "container-fluid  erp-hero" :style="{ backgroundImage: 'url(' + slice.primary.background_image.url + ')' }">
			<div class = "row align-items-center h-100 p-15">
				<div class = "col">
					<div class = "logo">
						<prismic-image :field="slice.primary.logo"/>
					</div>
  					<h1>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h1>
  					<template v-if="$prismic.richTextAsPlain(slice.primary.subheading)!=''">
  						<h2>{{ $prismic.richTextAsPlain(slice.primary.subheading) }}</h2>
  					</template>
  					<template v-if="$prismic.richTextAsPlain(slice.primary.link_text)!=''">
  						<prismic-link class="btn btn-white-outline btn-size-default" :field="slice.primary.link">
              				{{ $prismic.richTextAsPlain(slice.primary.link_text) }}
            			</prismic-link>
            		</template>
  				</div>		
  			</div>
  		</div>
  	</div>
</template>
	

<script>
	export default {
  		props: ['slice'],
  		name: 'erp-hero',
  		data () {
    		return {
      			field: {
        			link_text: null
      			}
    		};
  		},
	}
</script>

<style lang="scss">

	.erp-hero{
		text-align: center;		
		background: center top no-repeat;
		height:500px;
    	background-size: cover;
		color:#fff;
		img{
			max-width:115px;
			height:auto;
		}
		h1{
			font-size:48px;
			line-height:51px;
			margin-top:20px;
		}
		h2{
			font-size:24px;
			line-height:32px;
			padding-bottom:15px;
			margin-top:20px;
		}
		@media (min-width: 768px) {
				height:400px;
		}	
	}
</style>