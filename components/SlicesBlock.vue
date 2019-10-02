<template>
    <div>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'hero_with_image'">
                <hero-with-image :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'thin_text_intro'">
                <thin-text-intro :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'black_flex_boxes'">
                <black-flex-boxes :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'blue_row_with_link'">
                <blue-row-with-link :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'feature_with_image'">
                <feature-with-image :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'customer_quote_hero'">
                <customer-quote-hero :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'page_bottom_cta'">
                <page-bottom-cta :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'hero_no_image'">
                <page-bottom-cta :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'erp_hero'">
                <erp-hero :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'thin_text_below'">
                <thin-text-below :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'text_content'">
                <text-content :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'two_customers'">
                <two-customers :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'cta_with_bg'">
                <cta-with-bg :slice="slice"/>
            </template>
            <template v-if="slice.slice_type === 'cta_left_text_right'">
                <cta-left-text-right :slice="slice"/>
            </template>
        </section>        
    </div>
</template>

<script>
// Imports for all slices

const ThinTextIntro = () => import("./slices/ThinTextIntro.vue");
const HeroWithImage = () => import("./slices/HeroWithImage.vue");
const BlackFlexBoxes = () => import("./slices/BlackFlexBoxes.vue");
const BlueRowWithLink = () => import("./slices/BlueRowWithLink.vue");
const FeatureWithImage = () => import("./slices/FeatureWithImage.vue");
const CustomerQuoteHero = () => import("./slices/CustomerQuoteHero.vue");
const PageBottomCta = () => import("./slices/PageBottomCTA.vue");
const HeroNoImage = () => import("./slices/HeroNoImage.vue");
const ErpHero = () => import("./slices/ErpHero.vue");
const ThinTextBelow = () => import("./slices/ThinTextBelow.vue");
const TextContent = () => import("./slices/TextContent.vue");
const TwoCustomers = () => import("./slices/TwoCustomers.vue");
const CtaWithBg = () => import("./slices/CTAwithBG.vue");
const CtaLeftTextRight = () => import("./slices/CtaLeftTextRight.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    ThinTextIntro,
    HeroWithImage,
    BlackFlexBoxes,   
    BlueRowWithLink,
    FeatureWithImage,
    CustomerQuoteHero,
    PageBottomCta,
    HeroNoImage,
    ErpHero,
    ThinTextBelow,
    TextContent,
    TwoCustomers,
    CtaWithBg,
    CtaLeftTextRight,
  },
}
</script>