<template>
<v-container fluid fill-height class="ma-0 pa-0">
    <v-row no gutters justify="center" align="center">
        <v-card width="900" class="text-center">
            <v-card-text>
                <v-row align="center" justify="space-around">
                    <v-col cols=7 style="border-right:1px solid black">
                        <v-img margin-top="20px" height="200" width="400" :src=ImgUrl />
                    </v-col>

                    <v-col cols=5>
                        <v-card-title style="color:tomato;">PMS Sign Up</v-card-title>
                        <v-spacer></v-spacer>

                        <v-text-field text v-model="uname" label="Username" outlined dense 
                        prepend-inner-icon="mdi-account" clearable required :counter="10" 
                        :error-messages="unameErr" @input="$v.uname.$touch()" 
                        @blur="$v.uname.$touch()" >
                        </v-text-field>

                        <v-text-field    :type="show1 ? 'text' : 'password'" 
                        :append-icon="show1 ? 'mdi-eye':'mdi-eye-off'"  
                        @click:append="show1=!show1"
                         text v-model="pword"
                         label="Password" outlined dense 
                         prepend-inner-icon="mdi-lock" 
                         :counter="10" :error-messages="pwordErr" 
                         @input="$v.pword.$touch()" 
                         @blur="$v.pword.$touch()"></v-text-field>
                        <div align="right">
                        <v-btn color="primary" width="300" @click="mLogin()">Login</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-row>
</v-container>
</template>

<script>
import axios from "axios"
import {
    validationMixin
} from 'vuelidate'
import {
    required,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    data() {
        return {
            show1:false,
            uname: '',
            pword: '',
            ImgUrl: require('../assets/pms.png'),
            User: {},
            notificationSystem: {
                options: {
                    success: {
                        position: "bottomRight",
                        error: {
                            position: "bottomRight",
                            info: {
                                position: "bottomLeft",
                            }
                        }
                    }
                }
            }
        }
    },

    validations: {
        uname: {
            required,
            maxLength: maxLength(10)
        },
        pword: {
            required,
            maxLength: maxLength(10)
        }
    },

    computed: {
        unameErr() {
            const errors = []
            if (!this.$v.uname.$dirty) return errors
            !this.$v.uname.maxLength && errors.push('Name must be at most 10 characters long')
             !this.$v.uname.required && errors.push('UserName is required.')
            return errors
        },

        pwordErr() {
            const errors = []
            if (!this.$v.pword.$dirty) return errors
            !this.$v.pword.maxLength && errors.push('Password must be at most 10 characters long') 
            !this.$v.pword.required && errors.push('password is required.')
            return errors
        }
    },

    methods: {
        mLogin() {
            if (this.uname == '') {
                this.$toast.error('Error', 'Pls input Username',
                    this.notificationSystem.options.error)
            } else if (this.pword == '') {
                this.$toast.error('Error', 'Pls input Password',
                    this.notificationSystem.options.error)
            } else {
                let url = this.api + `/Login2/${this.uname}/${this.pword}`;
                console.log(url)
                axios
                    .get(url)
                    .then((res) => {
                        let data = res.data;
                        if (data != "") {
                            console.log(data)
                            this.$toast.success('Success', 'Access Granted',
                                this.notificationSystem.options.success)
                        } else {
                            this.$toast.error('Error', 'Access Denied',
                                this.notificationSystem.options.error)
                        }
                    })
                    .catch((res) => {
                        console.log(res);
                    });
            }
        }, 

       
    },
}
</script>
