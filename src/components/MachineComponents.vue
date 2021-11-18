<template>
    <div v-if="loaded">
        <a v-for="(components, index) in components.data" :key="components.treeviewid">
            <h1> {{ this.components.data[index].omschrijving }} </h1>
        </a>
    </div>
</template>

<script>
import MachineComponents from '../Service/ComponentDataService'

export default
{
    async mounted(){
        this.components = await MachineComponents.GetComponentsById(this.machineName)
        this.loaded= true
    },
    data: () => ({
        components: [],
        loaded: false
    }),
    props: {
        machineName: {
            type: String,
            default: null
        },
    }
};
</script>
