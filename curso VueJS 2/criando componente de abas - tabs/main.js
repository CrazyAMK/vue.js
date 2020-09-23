
Vue.component('tabs', {
    template: `
    <div class="element-root"> 
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
                    <a href="#" @click="selectTab(tab)">{{ tab.name}}</a>
                </li>
            </ul>
        </div>

        <div class="table-details">
            <slot></slot>
        </div>
    </div>
    `,
    //O template pode ter somente um elemento root no componente, neste caso temos o "element-root"
    data() {
        return {
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });

        }
    }

});


Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false }
    },
    data() {
        return {
            isActive: false
        };
    },
    mounted() {
        this.isActive = this.selected;
    },
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,
});


new Vue({
    el: '#root',
    data: {
    }
})