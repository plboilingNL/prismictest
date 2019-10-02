<template>
	<div class ="feature-with-image">
		<div class = "row alternate"   v-for="(item, index) in slice.items" :key="'feature-with-image' + index">
        	<div class = "container features">
        		<div class = "col-lg-12">
          			<h3>{{ $prismic.richTextAsPlain(item.heading) }}</h3>
          			<prismic-image :field="item.image"/>
          			<prismic-rich-text :field="item.content"/>
          		</div>
        	</div>
        </div>
    </div>
</template>

<script>
	export default {
  		props: ['slice'],
  		name: 'feature-with-image',
	}
</script>

<style lang="scss">
	.feature-with-image{
		color:#444;
		.alternate{
			padding:70px 0;
		}
		h3{
			font-size:26px;
			line-height:46px;
			font-weight:300;
			text-align: center;
		}
		.alternate:nth-child(odd) {
			background: #f7f7f7;
		}
		img{
			max-width:75%;
			height:auto;
			border:1px solid #ccc;
			margin: auto;
			margin-top:40px; 
			margin-bottom:40px;  
    		display: block;
		}
	}
</style>
