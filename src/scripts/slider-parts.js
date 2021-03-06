import Vue from "vue";
import Flickity from 'vue-flickity';


new Vue ({
    el: "#slider-parts-wiget",
    template: "#slider-parts",
    components: {
        Flickity
    },
    data() {
        return {
            parts: [],
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                adaptiveHeight: true,
                groupCells: true

            }
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/${item.logo}`);

                item.logo = requiredPic
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
        const data = require("../data/parts.json");
        this.parts = this.makeArrWithRequiredImages(data);
        
    }

})