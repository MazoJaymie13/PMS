<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col align="center">
        <v-card color="orange" width="300" elevation="10" radius="5">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field
              @keyup.enter="Login()"
              label="ID"
              dense
              type="number"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Password"
              dense
              v-model="password"
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :label="`Remember Password: ${checkbox.toString()}`" >
            </v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="red lighten">Cancel</v-btn> -->
            <v-btn color="primary" @click="mLogin()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >

import axios from "axios";
export default {
  data() {
    return {
      checkbox: true,
      username: null,
      password: null,
      notificationSystem: {
        options: {
          success: {
            position: "bottomRight",
          },
          error: {
            position: "bottomRight",
          },
          info: {
            position: "bottomLeft",
          },
        },
      },
    };
  },

  methods: {
    mLogin() {

      if (this.username == 0 )
            {
             this.$toast.error('Error','Please input username!', this.notificationSystem.options.error)
           }
      else if(this.password == "")
           {
                this.$toast.error('Error' , 'Please input Password', this.notificationSystem.options.error)
           }
      else {
             let url = this.api + `/login/${this.username}/${this.password}`;

      axios
        .get(url)
        .then((res) => {
          let data = res.data;
          if (data != "") {
            console.log(data)
            this.$toast.success('Success', 'Acces Granted!!', this.notificationSystem.options.success)
          }
           else 
           {
            this.$toast.error('Failed', 'Access has been denied!!', this.notificationSystem.options.error)
          }
        })
        .catch((res) => {
          console.log(res);
        });
           }
    },
  },
};
</script>
