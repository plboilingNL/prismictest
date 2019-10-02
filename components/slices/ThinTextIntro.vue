<template>
	<div class = "container thin-text-intro">
		<div class = "row">
			<div class = "col-lg-12">
  				<p class ="thin-text">{{ $prismic.richTextAsPlain(slice.primary.thin_text) }}</p>
  			</div>
  		</div>
  		<template v-if="$prismic.richTextAsPlain(slice.primary.vidyard_code)!=''">
  			<div class = "row">
  				<div class = "col">
					<div class = "embed-responsive embed-responsive-16by9 mx-auto">
          				<img
            				style="width: 100%; margin: auto; display: block;"
            				class="vidyard-player-embed"
            				:src= "'https://play.vidyard.com/' + $prismic.richTextAsPlain(slice.primary.vidyard_code) + '.jpg' "
            				:data-uuid= "$prismic.richTextAsPlain(slice.primary.vidyard_code)"
            				data-v="4"
            				data-type="inline"
          				/>
          			</div>
          		</div>
          	</div>
        </template>
        <template v-if="slice.primary.image.url != null">
        	<div class = "row">
        		<div class = "col">
        			<prismic-image :field="slice.primary.image"/>
        		</div>
        	</div>
        </template>	
        <div class = "plain-text">
        	<div class = "row">
				<div class = "col-lg-12">
					<prismic-rich-text :field="slice.primary.plain_text"/>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'thin-text-intro',
  data () {
    return {
      fields: {
        image: null,
      }
    };
  }
}
</script>

<style lang="scss">
	.thin-text-intro {
		padding-top:70px;
		margin-bottom:70px;

		.thin-text{
			text-align:center;
			font-weight:200;
			font-size:20px;
			line-height:40px;
			color:#555;
			margin-bottom:30px;
			@media (min-width: 768px) {
				font-size:24px;
			}
		}
		.embed-responsive-16by9{
			text-align:center;
			@media (min-width: 1200px) {
				max-width:600px;
			}
		}
		.embed-responsive-16by9::before{
			padding-top:0;
			
		}
		.plain-text{
			font-weight:300;
			h3{
				font-size:26px;
				font-weight:700;
				margin-top:30px;
				text-align:center;
				text-transform: uppercase
			}			
		}
	}	
</style>