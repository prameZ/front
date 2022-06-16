<template>
 <div class="container" id="fetchAlldiv">

    {{ list.username}}
   <br />
   <h3 align="center">Vue.js PHP fetchAll Data from Mysql Database</h3>
   <br />
   <div class="panel panel-default">
    <div class="panel-heading">
     <div class="row">
       <h3 class="panel-title"> Employee Records</h3>
     </div>
    </div>
    <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
           <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Edit</th>
            <th>Delete</th>
           </tr>
           <tr>
            <td>{{ list.username }}</td>
            <td>{{ list.password }}</td>
            <td>{{ list.email }}</td>
            <td><button type="button" name="edit" class="btn btn-primary btn-xs edit">Edit</button></td>
            <td><button type="button" name="delete" class="btn btn-danger btn-xs delete">Delete</button></td>
            
           </tr>
          </table>
        </div>
    </div>
   </div>
  </div>  
  
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            list: [],
            username: "",
            password: "",
        };
    },
    mounted() {
        this.pulldata()
    },
    methods: {
        pulldata() {
            axios.get("http://localhost:9000/pulldata").then((response) => {
                console.log(response.data)
                this.list = response.data;
                console.log(this.list);
            });
        },
        
        
    },
};
</script>