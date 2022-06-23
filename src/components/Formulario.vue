<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h1>Formulario de alta</h1>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
        <label for="nombre">Nombre</label>
            <input 
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            
            />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">El campo nombre es requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo de {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo tiene un máximo de {{nombreMaxLength}} caracteres.
            </div>
          </field-messages>
        </validate>

        <validate tag="div">
              <label for="edad">Edad</label>
                  <input 
                  type="number"
                  id="edad"
                  name="edad"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formData.edad" 
                  required 
                  :min="edadMin"
                  :max="edadMax"
                  
                  />

                <field-messages name="edad" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">El campo edad es requerido</div>
                  <div slot="min" class="alert alert-danger mt-1">
                   La edad mínima es de {{edadMin}} años.
                  </div>
                 <div slot="max" class="alert alert-danger mt-1">
                  La edad máximas es de {{edadMax}} años.
                 </div>
                </field-messages>
         </validate>


        <validate tag="div">
                      <label for="mail">Correo electrónico</label>
                          <input 
                          type="email"
                          id="email"
                          name="email"
                          class="form-control"
                          autocomplete="off"
                          v-model.trim="formData.email" 
                          required 
                                                   
                          />

                        <field-messages name="email" show="$dirty">
                          <div slot="required" class="alert alert-danger mt-1">El campo correo electrónico es requerido</div>
                          <div slot="email" class="alert alert-danger mt-1">La dirección de correo electrónico es inválida</div>
                        
                        </field-messages>
                </validate>


        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>
      <hr>    

      <h2>Tabla de información</h2>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table talbe-dark" >
          <tr>
              <th>{{tituloNombre}}</th>
              <th>{{tituloEdad}}</th>
              <th>{{tituloMail}}</th>
          </tr>
         
          <tr v-for="(usuario,index) in usuarios" :key="index">
             <td>{{usuario.nombre}} </td>
             <td>{{usuario.edad}}</td>
             <td>{{usuario.email}}</td> 
          </tr>        
         
        
        </table>
      </div>
      <div v-else>
        <h5>No hay datos cargados</h5>
      </div>
      
    </div>  
</section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        usuarios: [],
        nombreMinLength:5,
        nombreMaxLength:15,
        edadMin:18,
        edadMax:120,
        tituloNombre:"Nombre",
        tituloEdad:"Edad",
        tituloMail:"Correo Electrónico"
      }
    },
    methods: {
      getInitialData(){
        return{
          nombre:'',
          edad:'',
          email:'',
        }
      },
      enviar(){
        // console.log ({...this.formData})

        const usuario = {
          nombre : this.formData.nombre,
          edad: this.formData.edad,
          email:this.formData.email
        }
        this.usuarios.push(usuario)
        console.log(this.usuarios)
        this.formData=this.getInitialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
