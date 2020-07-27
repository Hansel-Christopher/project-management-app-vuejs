<template>
  <!-- Default form login -->
  <form id="form">
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
    <input ref="email" required id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" required class="grey-text">Password</label>
    <input ref="password" type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
    <div class="text-center mt-4">
     <!-- <router-link :to="{ name: 'dashboard' }"> -->
            <button @click.prevent="login()" class="btn btn-sm btn-app mt-2" type="submit">Login</button>
            <!-- </router-link> -->
     
    </div>
    
    <span style="float:right">New User? <router-link :to="{ name: 'register' }"
              >Sign up</router-link
            ></span>
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
                var email = this.$refs.email.value;
                var password = this.$refs.password.value;
                if (email == "" || password == ""){
                    alert('Invalid input');
                    return;
                }

                if(email != "Hansel" || password != "hansel23"){
                    alert('Invalid input');
                    return;
                }else{
                    this.$router.replace('/dashboard');
                }
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