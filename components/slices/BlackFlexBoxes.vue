<template>
    <div class = "container-fluid black-flex-boxes">
      	<div class = "row">
        	<div class = "col-sm p-0" v-for="(item, index) in slice.items" :key="'black-flex-box' + index">
        		<prismic-link :field="item.link">
        			<div class = "boxes text-center align-items-center">
          				<h4>{{ $prismic.richTextAsPlain(item.heading) }}</h4>
          				<p>{{ $prismic.richTextAsPlain(item.link_text) }}</p>
          			</div>
          		</prismic-link>
          	</div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'black-flex-boxes',
}
</script>

<style lang="scss">
	.black-flex-boxes{
		a:hover{
			text-decoration:none;
		}
		.boxes {
			border:1px solid #fff;
			color:#fff;
			background-color:#000;
			height:250px;
			padding-top:75px;
			&:hover{
				background-color:#00a7ea;
			}
			h4{
				color:#fff;
				font-size:20px;
				line-height:28px;
			}
  		}
  	}
</style>

