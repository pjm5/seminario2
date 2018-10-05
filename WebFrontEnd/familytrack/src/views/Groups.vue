<template>
<div>
    <v-flex xs12>
        <label>Info Groups</label>
    </v-flex>
    <div>
        <v-flex xs12>
            <div>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Groups</v-toolbar-title>
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-btn slot="activator" color="primary" dark class="mb-2">New Group</v-btn>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field v-model="selectItem.Name" label="Name"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="selectItem.Description" label="Description"></v-text-field>
                                        </v-flex>

                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table :headers="headers" :items="groups" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.Name }}</td>
                        <td class="text-xs-right">{{ props.item.Description }}</td>
                        <td class="justify-center layout px-0">
                            <v-icon small class="mr-2" @click="editItem(props.item)">
                                edit
                            </v-icon>
                            <v-icon small @click="deleteItem(props.item)">
                                delete
                            </v-icon>
                        </td>
                    </template>
                </v-data-table>
            </div>
        </v-flex>
    </div>
</div>
</template>

<script>
import group from '@/resources/group.js'

export default {
  data: () => ({
    dialog: false,
    selectItem: {
      name: '',
      description: ''
    },
    groups: [],
    headers: [
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Description',
        value: 'description',
        sortable: false
      }
    ],
    editedIndex: -1
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  mounted () {
    this.initialize()
    if (!this.$store.state.IsAuthenticated) {
      console.log('group-welcome- before')
      this.$router.push({
        path: 'welcome'
      })
    }
  },
  methods: {
    initialize () {
      group
        .getAll()
        .then(response => {
          this.groups = response
        })
        .catch(error => {
          console.log('es un error')
          console.log(error)
        })
    },
    editItem (item) {
      this.editedIndex = this.groups.indexOf(item)
      this.selectItem = Object.assign({}, item)
      this.dialog = true

      /*
             * FALTACODIGO:
             */
    },
    deleteItem (item) {
      const index = this.groups.indexOf(item)

      group
        .delete(item.id)
        .then(() => {
          console.log('elemento borrado')
          this.groups.splice(index, 1)
        })
        .catch(error => {
          console.log('es un error')
          console.log(error)
        })
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.selectItem = Object.assign({}, this.selectItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      console.log(this.$store.state.token)
      if (this.editedIndex > -1) {
        Object.assign(this.groups[this.editedIndex], this.selectItem)
      } else {
        group
          .create(this.$store.state.token, this.selectItem)
          .then(() => {
            this.groups.push(this.selectItem)
          })
          .catch(error => {
            console.log('es un error')
            console.log(error)
          })
      }

      this.close()
    }
  }
}
</script>
