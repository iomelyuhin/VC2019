import Vue from "vue";
import Flickity from 'vue-flickity';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)


new Vue ({
    el: "#slider-reviews-wiget",
    template: "#slider-reviews",
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [],
            isActiveFeedback: false,
            isActiveContent: true,
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
        clearFeedback() {
            this.isActiveFeedback = false;
            this.isActiveContent = true;
            console.log(1111);
            
        },
        next() {
          this.$refs.flickity.next();
          this.isActiveFeedback = false;
          this.isActiveContent = true;
        },

        
        previous() {
          this.$refs.flickity.previous();
          this.isActiveFeedback = false;
          this.isActiveContent = true;
        },

        activateFeedback() {
            this.isActiveFeedback = true;
            this.isActiveContent = false;
        },
        activateContent() {
            this.isActiveFeedback = false;
            this.isActiveContent = true;
        }
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredImages(data);
        

        
    }

})