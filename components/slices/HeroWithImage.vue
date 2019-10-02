<template>
	<div class = "row">
		<div class = "container-fluid hero-with-image" :style="{ backgroundImage: 'url(' + slice.primary.background_image.url + ')' }">
			<div class = "row align-items-center h-100 p-15">
				<div class = "col">
  					<h1>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h1>
  					<h2>{{ $prismic.richTextAsPlain(slice.primary.subheading) }}</h2>
  					<template v-if="$prismic.richTextAsPlain(slice.primary.link_text)!=''">
  						<prismic-link class="btn" :field="slice.primary.link">
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
  		name: 'hero-with-image',
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
	.hero-with-image{
		text-align: center;		
		background: center top no-repeat;
		height:500px;
    	background-size: cover;
    	color:#fff;	
    	h1 {
    		font-size:28px;
    		line-height:54px;
			font-weight:700;
			color:$white;
    		@media (min-width: 768px) {
				font-size:48px;
				
			}
    	}
    	h2{
    		font-weight:300;
    		font-size:24px;
			line-height:44px;
			color:$white;
    		@media (min-width: 768px) {
				font-size:34px;
				
			}
		}
		@media (min-width: 768px) {
				height:400px;
		}
  	}
</style>