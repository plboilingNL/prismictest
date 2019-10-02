<template> 
	<div>
    	<div class = " container-fluid " v-for="(item, index) in slice.items" :key="'cta-left-text-right' + index">
        	<div class = "row align-items-center cta-left-text-right">
            	<div class = "col-lg-6 cta" :style="{ backgroundImage: 'url(' + item.image.url + ')' }">
                	<prismic-rich-text :field="item.heading"/>
                	<prismic-link class="btn btn-white-outline btn-size-default" :field="item.link">
                    	{{ $prismic.richTextAsPlain(item.link_text) }}
                	</prismic-link>
            	</div>
            	<div class = "col-lg-6 content">
                	<prismic-rich-text :field="item.content"/>
            	</div>
        	</div>
    	</div>
	</div>
</template>

<script>
	export default {
  		props: ['slice'],
  		name: 'cta-left-text-right',
	}
</script>

<style lang="scss">
	.cta-left-text-right{
		height:100%;
		
		.cta{
			background: center top no-repeat;
			background-size:cover;
			color:#fff;
			text-align:center;
			min-height:300px;
			@media (min-width: 992px) {
			height:500px;
		}
			

			h3{
				font-size:26px;
				font-weight:700;
				line-height:46px;
			}
		}
		.content{
			font-size:22px;
			line-height:46px;
			font-weight:300;
			height:100%;			
		}
	}
</style>