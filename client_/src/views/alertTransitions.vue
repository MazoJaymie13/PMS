<template>
        <v-container>
    <v-row align="center" justify="space-around">
            <v-col>
                <div class="text-center mb-4">
                <v-btn color="primary" @click="scale=!scale">scale</v-btn>
                </div> 
                <v-alert :value="scale" color="pink" dark border="top" transition="scale-transition" >
                    Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                </v-alert>
            </v-col>

            <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="fade=!fade">fade</v-btn>
                </div> 
                  <v-alert :value="fade" color="pink" dark border="top" transition="fade-transition" >
                        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum.  
                 </v-alert>
             </v-col> 

             <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="fab=!fab">FAB</v-btn>
                </div> 
                  <v-alert :value="fab" color="pink" dark border="top" transition="fab-transition" transform-origin="50px 50px">
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                        
                 </v-alert>
             </v-col> 
              <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="expand=!expand">EXPAND</v-btn>
                </div> 
                  <v-alert :value="expand" color="pink" dark border="top" transition="expand-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert>
             </v-col> 
             <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="scrollx=!scrollx">SCROLL-X</v-btn>
                </div> 
                  <v-alert :value="scrollx" color="pink" dark border="top" transition="scroll-x-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert> 
             </v-col> 
              <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="scrollxrev=!scrollxrev">SCROLL-X-REV</v-btn>
                </div> 
                  <v-alert :value="scrollxrev" color="pink" dark border="top" transition="scroll-x-reverse-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert> 
             </v-col> 
             <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="scrolly=!scrolly">SCROLL-Y</v-btn>
                </div> 
                  <v-alert :value="scrolly" color="pink" dark border="top" transition="scroll-y-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert>
             </v-col> 
              <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="scrollyrev=!scrollyrev">SCROLL-Y-REV</v-btn>
                </div> 
                  <v-alert :value="scrollyrev" color="pink" dark border="top" transition="scroll-y-reverse-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert>
             </v-col> 

                <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="slidex=!slidex">SLIDE-X</v-btn>
                </div> 
                  <v-alert :value="slidex" color="pink" dark border="top" transition="slide-x-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert> 
             </v-col> 
              <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="slidexrev=!slidexrev">SLIDE-X-REV</v-btn>
                </div> 
                  <v-alert :value="slidexrev" color="pink" dark border="top" transition="slide-x-reverse-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert> 
             </v-col> 
             <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="slidey=!slidey">SLIDE-Y</v-btn>
                </div> 
                  <v-alert :value="slidey" color="pink" dark border="top" transition="slide-y-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert>
             </v-col> 
              <v-col>
                <div class="text-center mb-4">
                    <v-btn color="primary" @click="slideyrev=!slideyrev">SLIDE-Y-REV</v-btn>
                </div> 
                  <v-alert :value="slideyrev" color="pink" dark border="top" transition="slide-y-reverse-transition" >
                         Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
                 </v-alert>
             </v-col> 
    </v-row>

    <v-text-field   label="Username" v-model="uname" :errormessage="errmsg" 
    outlined dense>
    </v-text-field>
        </v-container>
</template>
    


    <script>
        export default{

            data(){
                return{
                    fade:"true",
                    scale:"true",
                    fab:"true",
                    expand:"true",
                    scrollx:"true",
                    scrollxrev:"true",
                     scrolly:"true",
                      scrollyrev:"true",
                       slidex:"true",
                    slidexrev:"true",
                     slidey:"true",
                      slideyrev:"true",
                      uname:null
                }  
            },   
        }
    </script>

