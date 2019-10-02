<template>
	<div class = "container thin-text-below">
		<div class = "row">
			<div class = "col-lg-12">
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
        		<h3>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h3>
  				<prismic-rich-text :field="slice.primary.content"/>			
  			</div>
  		</div>
  	</div>
</template>

<script>
	export default {
  		props: ['slice'],
  		name: 'thin-text-below',
	}
</script>

<style lang="scss">
	.thin-text-below {
		padding-top:70px;
		margin-bottom:70px;
		text-align:center;
		font-weight:200;
		font-size:20px;
		line-height:40px;
		color:#444;
		margin-bottom:30px;
		@media (min-width: 768px) {
			font-size:24px;
		}
		h3{
			font-size:26px;
			line-height:46px;
			font-weight:700;
		}
		.embed-responsive-16by9{
			text-align:center;
			margin-bottom:30px;
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