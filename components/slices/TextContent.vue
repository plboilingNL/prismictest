<template>
	<div class = "row text-content">
		<div class = "container">
			<div class = "col-lg-12">
				<prismic-rich-text :field="slice.primary.content"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  		props: ['slice'],
  		name: 'text-content',
}
 </script>

 <style lang="scss">
 	.text-content{
 		h4{
 			font-size:20px;
 			line-height:30px;
 			font-weight:700;
 		}

 	}
 </style>
