<template>
    <div class = "row">
        <div class = "container-fluid">
            <prismic-link class="blue-row" :field="slice.primary.link">
                <div>
                    <h2>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h2>
                    <p><span class = "white-outline">{{ $prismic.richTextAsPlain(slice.primary.link_text) }}</span></p>
                </div>
            </prismic-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['slice'],
        name: 'blue-row-with-link',
    }
</script>

<style lang="scss">
	a.blue-row {
        background-color: $semantic-blue;
        display: block;
        color:#fff;
        text-align: center;
        padding-top:5%;
        padding-bottom:5%;
        &:hover {
            text-decoration:none;
        }
        h2{
        	font-weight:500;
        	font-size:24px;
        	line-height:44px;
            margin-bottom:30px;
            color:#fff;
        	@media (min-width: 768px) {
				font-size:34px;
			}
        }
        .white-outline{
        	border:1px solid #fff;
        	padding:8px 35px;
        	font-size:14px;
        	font-weight:500;
        } 	    
    }
</style>