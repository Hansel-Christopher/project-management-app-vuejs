<template>
  <!-- Default form login -->
  <form id="form">
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Name</label>
    <input id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginEmailEx" class="grey-text">Email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
    <div class="text-center mt-4">
        <router-link :to="{ name: 'login' }">
      <button class="btn btn-sm btn-app mt-2" type="submit">Register</button>
     </router-link>
    </div>
   
  </form>
  <!-- Default form login -->
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {

                // if(this.input.username != "" && this.input.password != "") {
                //     if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                //         this.$emit("authenticated", true);
                //         this.$router.replace({ name: "secure" });
                //     } else {
                //         console.lo(g"The username and / or password is incorrect");
                //     }
                // } else {
                //     console.log("A username and password must be present");
                // }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    #form{
            width: 30%;
    /* text-align: center; */
    margin-left: auto;
    margin-right: auto;
    }
</style>