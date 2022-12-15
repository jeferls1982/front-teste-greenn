<template>
    <div class="">
        <div class=" block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{{item.titulo}}</h6>
            <hr>
            <div class="h-40 flex flex-col justify-between">
                <item-card-component title="Remetente" :text="item.remetente"></item-card-component>
                <item-card-component  title="Status" :text="getStatus"></item-card-component>
                <item-card-component title="Modificado em" :text="formatDate"></item-card-component>
            </div>
          
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import ItemCardComponent from '../components/ItemCardComponent.vue'
    export default {
        props:['item'],
        data(){
            return{
                status : "Enviado"
            }
        },
        components: { ItemCardComponent },
        computed:{
            getStatus(){
                if(this.item.status){
                    return this.item.status
                }
                return  this.status
            },
            formatDate(){                         
                return moment(this.item.modificado_em).format('D/M/YYYY, H:mm:ss');
            }
            

        }
            
   }
</script>

<style lang="scss" scoped>

</style>