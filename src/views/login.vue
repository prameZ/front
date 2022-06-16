<template>
  <div id="nav2">
    <router-link to="/">Home</router-link> |

    
  </div>
    <div id="app">
        <!-- {{ list }}  -->
        <div class="vue-tempalte">
            <h3>Sign In 3</h3>
            <div class="form-group">
                <label>Username</label>
                <input type="user" v-model="username" />
            </div>
            <h1></h1>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" />
            </div>
            <h1></h1>
            <button type="submit" @click="submit()">Sign In</button>
            <h1></h1>
            <div class="social-icons">
                <ul>
                    <li>
                        <a href="#"><i class="fa fa-google"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                </ul>
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
        this.home()
    },
    methods: {
        home() {
            axios.get("http://localhost:9000/home").then((response) => {
                console.log(response.data)
                // this.list = response.data;
                console.log(this.list);
            });
        },
        submit() {
            console.log('submit')
            const body = {
                username: this.username,
                password: this.password
            }
            axios.post("http://localhost:9000/auth2", body).then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    alert('success')
                    this.list = response.data;
                    // success = {
                    //     success: true,
                    //     message: "success",
                    //     data: {
                    //         username: username,
                    //         token: token,
                    //         email: email
                    //     }
                    // }
                    // set coo0kie field data
                    this.$router.push('/dashboard')
                }
                else{
                    alert('not success')
                }

                
                // console.log(this.list);
            });
            // if (this.list.username == this.username) {
            //      if (this.list.password == this.password) {
            //         alert('ddddd')
            //      }
            //  }
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>