<template>
<v-container>
    
    <div class="text-center">
        <v-menu transition="scale-transition" origin="center center">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark color="primary" v-bind="attrs" v-on="on">
                    Scale Transitions
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title v-text="'Item' + n"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>

    <v-row justify="center" style="min height=160px;">
        <v-col class="shrink">

            <v-btn class="ma-2" color="primary" @click="expand=!expand">ExpandTransition</v-btn>

            <v-expand-transition>
                <v-card v-show="expand" height="100" width="100" class="mx-auto primary">
                </v-card>
            </v-expand-transition>
        </v-col>

        <v-col class="shrink">
            <v-btn class="ma-2" color="secondary" @click="expand2=!expand2">Expand X-transition
            </v-btn>

            <v-expand-x-transition>
                <v-card v-show="expand2" height="100" width="100" class="mx-auto secondary">
                </v-card>
            </v-expand-x-transition>
        </v-col>
    </v-row>

    <!-- fab Transitions -->
    <div class="text-center">
        <v-menu transition="fab-transition">
            <template v-slot:activator="{on, attrs}">
                <v-btn dark color="primary" v-bind="attrs" v-on="on">Fab Transition</v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" v-text="'Item' + n">
                </v-list-item>
            </v-list>

        </v-menu>
    </div>

    <!-- To Do List -->

</v-container>
</template>

<script>
export default {
    data() {
        return {
            expand: "true",
            expand2: "true",
        }

    },
}
</script>
