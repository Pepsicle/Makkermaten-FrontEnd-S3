<template>
    <br><br>
    <div class="row componenthealthcontainer">
        <div class="col-md-3">
            <form v-if="loaded">
                <input type="text" v-model="searchTerm" @change="filterByTerm()" placeholder="Search Component"/>
            </form>
            <div class="scrollListContainer">
                <select v-model="selectedComponent" class="form-select scrollList" multiple >
                    <option v-for="component in filterByTerm" :key="component.omschrijving">
                        <option value="component.omschrijving">{{ component.omschrijving }}</option>
                    </option>
                </select>
            </div>
        </div>
        <div class="col-md-9">
            <div>
                <Componentcomponent class="component" :loadedComponent="this.selectedComponent" />
            </div>
        </div>
    </div>
</template>

<script>
import ComponentDataService from '../Service/ComponentDataService'
import Componentcomponent from '../components/Component.vue'

export default {
    name: "ComponentHealth",
    components: {
        Componentcomponent,
    },
    data: () => ({
        selectedComponent: [],
        components: [],
        loaded: false,
        componentSelected: false,
        searchTerm: '',
    }),
    methods: {
        async GetAllComponents() {
            var temp = await ComponentDataService.GetAllComponents()
            this.components = temp.data
        },
    },
    async mounted() {
        this.GetAllComponents()
        this.loaded = true
    },
    computed: {
        filterByTerm() {
        return this.components.filter(component => {
            return component.omschrijving.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
    }
  }
}
</script>

<style scoped>
.scrollList{
    height: 80vh;
    max-width: 100vh;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
}

.componenthealthcontainer{
    height: 80vh;
    padding-top: 5vh;
    margin-left: 0.5%;
    width: 95%;
}

.component{
    padding: 1%;
}
</style>