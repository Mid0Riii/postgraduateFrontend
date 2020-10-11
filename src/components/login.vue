<template>
    <el-row>
        <el-col
                :xs="{span:20,offset:2}">
            <div class="login-contain container" id="login-box"
                 v-bind:class="{'right-panel-active':!loginView}">
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1 style="font-size: 2rem">研究生信息平台</h1>
                        <div class="txtb">
                            <input type="text" placeholder="学号" v-on:focus="getFocus" v-on:blur="removeFocus"
                                   v-model="loginusername">
                        </div>
                        <div class="txtb">
                            <input type="password" placeholder="密码" v-on:focus="getFocus" v-on:blur="removeFocus"
                                   v-model="loginpassword">
                        </div>
                        <button style="margin-top: 30px" v-on:click="login">登录</button>
                    </form>
                </div>
            </div>
        </el-col>
    </el-row>

</template>

<script>
    import api from '../network/api';
    export default {
        name: "login",
        methods: {
            changeLogin: function () {
                this.loginView = true
            },
            changeSignup: function () {
                this.loginView = false
            },
            getFocus: function (event) {
                event.target.classList.add('focus')
            },
            removeFocus: function (event) {
                if (event.target.value === '') {
                    event.target.classList.remove('focus')
                }
            },
            login: function () {
                api.login({
                    "username": this.loginusername,
                    "password": this.loginpassword,
                }).then(res => {
                    let data = res.data.data;
                    this.$store.state.isLogin = true;
                    this.$store.state.token = data.token;
                    this.$router.push('/');
                    this.$message.success(res.data.message);
                    api.getStudent().then(res =>{
                        this.$store.state.student = res.data.data[0];
                    })
                })
                    .catch(error => {
                        this.$message.error(error);
                    });
            }
        },
        data() {
            return {
                loginView: true,
                loginusername: '',
                loginpassword: '',
                signupusername: '',
                signuppassword: '',
            }
        }
    }
</script>

<style scoped>
    .login-contain {
        margin-top: 15%;
    }

    .login-form {
        width: 350px;
        height: auto;
        /*top: 50%;*/
        /*margin-top: -160px;*/
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: linear-gradient(120deg, #3498db, #8e44ad);;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: -20px 0 50px;
    }

    h1 {
        font-weight: bold;
    }

    p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: .5px;
        margin: 20px 0 30px;
    }

    span {
        font-size: 12px;
    }

    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    .container {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
        position: relative;
        overflow: hidden;
        width: 375px;
        max-width: 100%;
        min-height: 360px;
    }

    .form-container form {
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 25px;
        height: 100%;
        justify-content: center;
        text-align: center;
    }

    .social-container a {
        border: 1px solid #ddd;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    }

    .social-container a:hover {
        background-color: #eee;

    }

    .txtb {
        margin-top: 2rem;
        border-bottom: 2px solid #adadad;
        position: relative;
    }

    .txtb input {
        font-size: 15px;
        color: #333;
        border: none;
        width: 100%;
        outline: none;
        background: none;
        padding: 0 3px;
        height: 35px;
    }

    .txtb span::before {
        content: attr(data-placeholder);
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        transition: .5s;
    }

    .txtb span::after {
        content: '';
        position: absolute;
        left: 0%;
        top: 100%;
        width: 0%;
        height: 2px;
        background-image: linear-gradient(120deg, #3498db, #8e44ad);
        transition: .5s;
    }

    .focus + span::before {
        top: -5px;
    }

    .focus + span::after {
        width: 100%;
    }

    button {
        border-radius: 20px;
        border: 1px solid #ff4b2b;
        background: #ff4b2b;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
    }

    button:active {
        transform: scale(.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background: transparent;
        border-color: #fff;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all .6s ease-in-out;
    }

    .form-container button {
        background: linear-gradient(120deg, #3498db, #8e44ad);
        border: none;
        background-size: 200%;
        color: #fff;
        transition: .5s;
    }

    .form-container button:hover {
        background-position: right;
    }

    .sign-in-container {
        left: 0;
        width: 100%;
        z-index: 2;
    }

    .sign-in-container form a {
        position: relative;
        left: 100px;
    }
    .sign-up-container button {
        margin-top: 20px;
    }

    .container.right-panel-active .sign-in-container {
        transform: translateY(100%);
    }

    .container.container.right-panel-active .overlay-container {
        transform: translateX(-100%);
    }

    .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    }

    .container.container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .container.container.right-panel-active .overlay-left {
        transform: translateY(0);
    }

    .container.container.right-panel-active .overlay-right {
        transform: translateY(20%);
    }

</style>
