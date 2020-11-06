<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-row no-gutters justify="center" align="center">
      <v-card width="900" class="text-center">
        <v-card-text>
          <v-row align="center" justify="space-around">
            <v-col cols="7">
              <img :src="imgurl" />
            </v-col>

            <v-col cols="5" style="border-left: 1px solid black">
              <div class="second">
                <v-card-title>
                  <v-spacer></v-spacer> PMS Sign Up <v-spacer></v-spacer
                ></v-card-title>
                <v-text-field
                 color="primary"
                  dense
                  outlined
                  class="mt-5"
                  label="Username"
                  required
                  prepend-inner-icon="mdi-account"
                
                >
                </v-text-field>

                <v-text-field
                color="primary"
                  prepend-inner-icon="mdi-lock"
                  dense
                  outlined
                  label="Password"
                  required
                >
                </v-text-field>
                <v-btn class="my-5" width="350" color="primary">Login</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>


    <template>
  <div class="text-center">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="teal"
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="purple"
    >
      <v-icon dark>
        mdi-android
      </v-icon>
    </v-btn>
  </div>
</template>

  </v-container>
</template>


<script>
export default {
  data() {
    return {
      imgurl: require("../assets/pms.png"),
    };
  },
};
</script>

<style scoped>
.first {
  color: tomato;
  /* border-right: 1px solid black; */
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 12pt;
  height: 450px;
}
.second {
  color: chocolate;
}
</style>

