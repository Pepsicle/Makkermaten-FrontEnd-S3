<template>
    <a v-for="(components, index) in components.data" :key="components.treeviewid">
        <h1> {{ this.components.data[index].omschrijving }} </h1>
    </a>
</template>

<script>
import MachineComponents from '../Service/ComponentDataService'

export default
{
    async mounted(){
        this.components = await MachineComponents.GetComponentsById(this.machineName)
        console.log(this.components)
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
