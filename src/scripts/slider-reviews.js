import Vue from "vue";
import Flickity from 'vue-flickity';


new Vue ({
    el: "#slider-reviews-wiget",
    template: "#slider-reviews",
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                adaptiveHeight: true,
                groupCells: false,
                setGallerySize: false
            }
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.img}`);

                item.img = requiredPic
                return item
            })
        },
        next() {
          this.$refs.flickity.next();
        },
        
        previous() {
          this.$refs.flickity.previous();
        }
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredImages(data);
        
        
        
    }

})