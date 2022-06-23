<template>

  <section class="src-components-api-rest">
    <div class="jumbotron">
      <h1>Obtener objetos desde MockApi</h1>
      
      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRcb()" >Pedir XHR (cb)</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRpromise()">Pedir XHR (promise)</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Pedir Fetch</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()" >Pedir Axios</button>
      <button class="btn btn-danger my-3 mr-3" @click="posts=[]" >Reset</button>

      <br>

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>eMail</th>
            <th>Nro teléfono</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.nombre }}</td>
              <td>{{ post.email }}</td>
              <td>{{ post.telefono }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{posts.length}} posts.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron posts</h4>





    </div>  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-api-rest',
    props: [],
    mounted () {

    },
    data () {
      return {
        url:'https://62b4a8ed530b26da4cc33b3a.mockapi.io/usuarios',
        posts:[],
      }
    },
    methods: {
      async getPostsAxios() {
          
        try {
          let { data } = await this.axios(this.url)
          this.posts = data
        }
        catch(error) {
          console.error('Error Axios', error)
        }   
      },

    wrapperXHRpromise() {
        return new Promise((resolve,reject) => {
         
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              //console.log(respuesta)
              resolve(respuesta)
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
              let error = {
                title: 'ERROR XHR cb (status)',
                status: xhr.status
              }
              reject(error)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
              let error = {
                title: 'ERROR XHR cb (ajax)',
                info: e
              }
              reject(error)
          })

          xhr.send()
        })
      },
      
      getPostsXHRcb() {
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              //console.log(respuesta)
              this.posts = respuesta
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
          })

          xhr.send()
      }, 
    async getPostsXHRpromise() {
       
          try {
            let respuesta = await this.wrapperXHRpromise()
            //console.log(respuesta)
            this.posts = respuesta
          }
          catch(error) {
            console.error('Error XHRpromise', error)
          }
      },
    async getPostsFetch() {
    
        try {
          let response = await fetch(this.url)
          //console.log(response)
          let respuesta = await response.json()
          this.posts = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
      },    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-api-rest {

  }
</style>
