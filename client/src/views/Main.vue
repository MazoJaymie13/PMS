<template>
    <div>
         <v-navigation-drawer  width="270" permanent  floating  color="grey">
                <v-list dense rounded>
                    <v-list-item v-for="item in NavItems" :key="item.title" link>
                        <v-list-item-icon>
                            <v-icon>  {{item.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                    <v-btn dark  block>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
            <!-- <v-card justify="space-around" align="center"> 
            </v-card> -->

    </div>
</template>
