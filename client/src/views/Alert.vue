<template>
    <v-container>

        <div>
        <h2>Border</h2>
        <v-alert  type="success"  width ="50%"  border="top" color="red lighten-2"   dark >
            Im an alert with top border and red color
        </v-alert >
        
        <v-alert   width ="50%"  border="right" color="blue-grey" dark>
            Im an alert with right border with blue grey color
        </v-alert>

        <v-alert width="50%" border="bottom" color="pink darken-1" dark>
            Im an alert with bottom border and pink color
        </v-alert>

        <v-alert width ="50%" border="left" color="indigo" dark>
            Im an alert with left border and an indigo color
        </v-alert>
    <br>
        <h2>Colored-Border</h2>
            <v-alert border="left" colored-border color="deep purple accent-4" elevation="2">
            Left Border 
            </v-alert>
            <v-alert  border="top" colored-border type="info" elevation="2">
               Top Border  type="Info"
            </v-alert>
            <v-alert border="bottom"  colored-border type="warning" elevation="2">
                Bottom Border  type="warning"
            </v-alert>
         
            <v-alert v-alert border="right" colored-border type ="error" elevation="2">
                   Right Border  type ="error" 
            </v-alert>

              <v-alert v-alert border="right" colored-border type ="success" elevation="2">
                   Right Border   type ="success"
            </v-alert>
     <br>
            <h2>Dense</h2>
            <v-alert width="50%" dense type="info">Im a Dense alert with <strong>type</strong> of Info </v-alert>
            <v-alert  width="50%" dense text type="warning" border="left">Im a Dense alert with <strong>text prop</strong>  and a <strong>type</strong> of warning </v-alert>
            <v-alert width="50%"  border="left" type="warning">Im a dense alert with a 
                <strong>border</strong>  prop and  a <strong>type</strong> of warning
            </v-alert>
            <v-alert width="50%" outlined type="error" >
                    Im a densed alert with <strong>outlined</strong> prop and <strong>type</strong>of error
            </v-alert>
            </div>
        
            <h2>Dismissible</h2>
            <v-alert  width="50%" v-model="alert" border="left" color="deep purple accent-4" dark dismissible >Test Dismissible 
            </v-alert>

            <div class="text-center">
                <v-btn 
                v-if="!alert"
                color="deep purple accent-4 "
                dark 
                @click ="alert=true"
                > Reset</v-btn>
            </div>
          
           
        <br>

        <h2>Icon</h2>
        <v-alert width="50%" color="green lighten-1" dark  icon="mdi-firework">testing icons1: firework  </v-alert>
            <v-alert width="50%" color="green lighten-1" dark  icon="mdi-vuetify">testing icons2: Vuetify  </v-alert>
            <v-alert width="50%" color="green lighten-1" dark  icon="mdi-floppy">testing icons2: floppy  </v-alert>
            <v-alert width="50%" color="green lighten-1" dark  icon="mdi-account">testing icons2: account  </v-alert>
          
          <h2>OUTLINED</h2>
          <v-alert outlined type="info" text> test  </v-alert>
            <v-alert outlined type="error" text> test  </v-alert>
            <v-alert outlined  text dismissible v-model="alert2"> test  </v-alert>
            <div>
                <v-btn
                v-if="!alert2"
                @click="alert2=true">reset2
                </v-btn>
             </div>
        <br>
        <h2>Prominent</h2>
        <v-alert prominent type="error">
        <v-row align="center">
            <v-col class="grow"> TEST 'GROW CLASS' </v-col>
            <v-col class="shrink">
                <v-btn>Take Action</v-btn>
             </v-col>
        </v-row>
        </v-alert>

        <v-alert color="blue-grey" dark dense icon="mdi-school" prominent>Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros et</v-alert>
        <v-alert prominent text type="info">testing ;lalalalal</v-alert>
        <br>
        <h2>Text Prop</h2>
<!--No.1 Prominent-->
        <v-alert text type="info">
            <h3 class="headline" > Lorem Ipsum</h3>

            <div>Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
                <v-divider  class="my-4 info" style="opacity:0.22"></v-divider>
            </div>

            <v-row align="center" no-gutter>
                <v-col class="grow"> Proin magna. Vivamus in erat ut urna cursus</v-col>
                <v-spacer></v-spacer>
                <v-col class="shrink">
                    <v-btn color="infor" outlined>Okay</v-btn>
                </v-col>
            </v-row>
        </v-alert>

<!--No.2 Prominent-->
        <v-alert    text outlined  color="deep-orange" icon="mdi-fire"> Nullam tincidunt adipiscing enim.</v-alert>
<!--No.3 Prominent-->
         <v-alert text dense color="teal" icon="mdi-clock-fast" border="left">Vestibulum ullamcorper mauris at ligula.</v-alert> 
<!--No.4 Prominent-->
    <v-alert text prominent  type="error" >   Praesent blandit laoreet nibh.</v-alert>
   
   <br>
   <h2>Transition</h2>


   

   
   
    </v-container>  
</template>




<script>
export default {
    data(){
        return{
            alert:"true",
            alert2:"true",
            Toggle:"true"
        }
      
    },

}
</script>