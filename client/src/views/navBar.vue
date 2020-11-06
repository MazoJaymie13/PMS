<template>
<v-container  fluid border="" >


<v-card    class="mx-auto overflow-hidden"
    height="100%"
    width="100%">


                <v-toolbar dark class="mb-1">
                <v-text-field dense hide-details prepend-inner-icon="mdi-magnify" label="Search" solo-inverted clearable v-model="search" flat>
                </v-text-field>

                <div class="ma-5">
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-select dense v-model="sortby" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify">
                        </v-select>
                    </template>
                </div>

                <div class="mx-5">
                    <v-btn-toggle v-model="sortdesc" mandatory>
                        <v-btn dense large depressed color="blue" :value="false">
                            <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>

                        <v-btn dense large depressed color="blue" :value="true">
                            <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>

                    </v-btn-toggle>
                </div>
            </v-toolbar>


        <v-data-table    fixed-header  width="100%"
            height="500pt" :headers="headers" 
            :items="loadData" show-select v-model="selected" item-key="uname" 
            :single-select="singleselect" class="elevation-1">
        </v-data-table>

    

    <!-- ======FOOTER BUTTONS====== -->
        <template c-slot:footer>
            <v-toolbar>
                <v-toolbar-title color="indigo" dark flat></v-toolbar-title>
                <v-row v-row class="text-center" align="center" justify="center">

    <!-- ====ADD BUTTON=== -->

                <v-row justify="center" align="center">
                
                    <v-dialog v-model="userDialog" persistent max-width="600px">
                            
                            <template v-slot:activator="{on, attrs}">
                            <v-btn width="150"  color="orange lighten" v-bind="attrs" v-on="on" v-model="btnadd_user" @click="mUserLevels()">ADD
                            <v-icon>mdi-account-plus-outline</v-icon>
                            </v-btn>
                            </template>

                            <v-card>
                                <v-card-title color="orange" >
                                    User Profile
                                </v-card-title>

                                <v-card-text>
                                    <v-row>
                                        <v-text-field class="mr-3" width="50px" label="Username" outlined dense color="primary"></v-text-field>
                                        <v-text-field   width="50" label="Password" outlined dense color="primary"></v-text-field>
                                    </v-row>

                                    <v-select :items="userLevel" item-text="Userlevel" item-value="UserlevelID" label="User Level"></v-select>
                                    </v-card-text>

                                    <div    class="mr-2 pb-3" align="right" justify ="space-around">
                                        <v-btn  dark class="mr-2" align="right">Save</v-btn>
                                        <v-btn dark  @click="userDialog =false"  >Close</v-btn>
                                    </div>
                            </v-card>
                    </v-dialog>
                </v-row>
    <!-- ====EDIT BUTTON=== -->
                            <v-col>
                                    <v-btn width="150" v-model="btnedit_user" elevation="10" color="orange lighten">
                                            Edit
                                            <v-icon dark right>mdi-account-edit-outline</v-icon>
                                    </v-btn>
                            </v-col>
    <!-- ====DELETE BUTTON=== -->
                            <v-col>
                                    <v-btn width="150" v-model="btndelete_user" elevation="10" color="orange lighten">
                                            Delete
                                            <v-icon dark right>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                            </v-col>
    <!-- ====PRINT BUTTON=== -->
                            <v-col>
                                    <v-btn width="150" v-model="btnPrint_user" elevation="10" color="orange lighten">
                                            Print
                                            <v-icon dark right>mdi-printer</v-icon>
                                    </v-btn>
                            </v-col>
    <!-- ====EXPORT BUTTON=== -->       
                            <v-col>
                                    <v-btn width="150" v-model="btnExport_user" elevation="10" color="orange lighten">
                                            Export
                                            <v-icon dark right>mdi-file-export-outline</v-icon>
                                    </v-btn>
                            </v-col>    
                    </v-row>
                    </v-toolbar> 
                </template>
    <!-- </v-col>         -->
<!-- </v-row> -->
</v-card>
</v-container>
</template>














<script>
import axios from "axios"
export default {
    data() {
        return {
            sortdesc: false,
            singleselect: false,
            userDialog: false,
            chkuserlvl: false,
  
            group:null,
            btnadd_user: '',
            btnedit_user: '',
            btndelete_user: '',
            btnexport_user: '',
            btnprint_user: '',
            search: '',
            selected: [],
            sortby: 'uname',
            loadData: [{
                uname: 'test',
                pword: 'test',
                userlvl: 0,
                updateddate: '',
                updatedby: '',

            }],

            keys: [
                'Username',
                'Password',
                'Userlevel',
                'UpdatedDate',
                'UpdatedBy'
            ],
            headers: [{
                    text: 'Username',
                    value: 'uname',
                    align: 'start',
                    sortable: false
                },
                {
                    text: 'Password',
                    value: 'pword'
                },
                {
                    text: 'User level',
                    value: 'userlvl'
                },
                {
                    text: 'Updated Date',
                    value: 'updateddate'
                },
                {
                    text: 'UpdatedBy',
                    value: 'updatedby'
                }
            ],
            userLevel:[],
       
        }
    },


    created() {
        this.mUsers()
    },
    methods: {
        mUsers() {
            let url = this.api + `/m_Users`
            axios.get(url)
                .then(res => {
                    console.log(res.data)
                    this.loadData.splice(0)
                    let data = res.data
                    for (let x = 0; x < data.length; x++) {
                        // this.deserts.push(data[x]);
                        this.loadData.push({
                            uname: data[x].UserCode,
                            pword: data[x].Password,
                            userlvl: data[x].UserlevelID,
                            updateddate: data[x].UpdatedDate,
                            updatedby: data[x].UpdatedByCode,
                        });
                    }

                })
                .catch(err => {
                    console.log(err)
                })
        },



        mUserLevels() {
            let url = this.api + `/m_UserLevels`
            axios.get(url)
                .then(res => {
                    this.userLevel = res.data
                    console.log(this.userLevel)
                })
        },


    },
    watch: {
        group(){
            this.drawer=false
        }
    }
}
</script>
 