<template>
<div>
    <v-flex xs12>
        <label>Info Groups Members</label>
    </v-flex>
    <div>
        <v-flex xs12>
            <div>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Members</v-toolbar-title>
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-btn slot="activator" color="primary" dark class="mb-2">New Member</v-btn>
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
                                            <v-text-field v-model="selectItem.LastName" label="Last Name"></v-text-field>
                                        </v-flex>

                                        <v-flex xs12>
                                            <v-text-field v-model="selectItem.Email" label="Email"></v-text-field>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-dialog ref="dialog" :return-value.sync="selectItem.BirdDay" persistent lazy full-width width="290px">
                                                <v-text-field slot="activator" v-model="selectItem.BirdDay" label="Select Date" prepend-icon="event" readonly></v-text-field>
                                                <v-date-picker v-model="selectItem.BirdDay" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                                    <v-btn flat color="primary" @click="$refs.dialog.save(selectItem.BirdDay)">OK</v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-select :items="groups" v-model="selectItem.GroupId" item-text="Name" item-value="id" label="Select Group">
                                            </v-select>
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
                <v-data-table :headers="headers" :items="membersGroup" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.Name }}</td>
                        <td class="text-xs-right">{{ props.item.LastName }}</td>
                        <td class="text-xs-right">{{ props.item.BirdDay | moment("dddd, MMMM Do YYYY") }}</td>
                        <td class="text-xs-right">{{ props.item.GroupId }}</td>
                        <td class="text-xs-right">{{ props.item.Email }}</td>
                        <td class="justify-center layout px-0">
                            <v-icon small class="mr-2" @click="editItem(props.item)">
                                edit
                            </v-icon>
                            <v-icon small @click="deleteItem(props.item)">
                                delete
                            </v-icon>
                        </td>
                    </template>
                    <template slot="no-data">
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                </v-data-table>
            </div>
        </v-flex>
    </div>
</div>
</template>

<script>
import groupMember from '@/resources/group_member.js'
import group from '@/resources/group.js'

export default {
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    menu2: false,
    dialog: false,
    selectItem: {},
    headers: [{
      text: 'Name',
      value: 'name'
    },
    {
      text: 'Last Name',
      value: 'lastName'
    },
    {
      text: 'BirdDay',
      value: 'birdDay'
    },
    {
      text: 'GroupId',
      value: 'groupId'
    },
    {
      text: 'Email',
      value: 'email'
    }
    ],
    membersGroup: [],
    groups: [],
    editedIndex: -1
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Member' : 'Edit Member'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
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
      groupMember.getAll().then(response => {
        this.membersGroup = response
      }).catch((error) => {
        console.log('es un error')
        console.log(error)
      })

      group.getAll().then(response => {
        this.groups = response
      }).catch((error) => {
        console.log('es un error')
        console.log(error)
      })
    },
    editItem (item) {
      this.editedIndex = this.membersGroup.indexOf(item)
      this.selectItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.membersGroup.indexOf(item)

      this.membersGroup.splice(index, 1)

      groupMember.delete(item.id).then(() => {
        console.log('elemento borrado')
        this.membersGroup.splice(index, 1)
      }).catch((error) => {
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
      if (this.editedIndex > -1) {
        Object.assign(this.membersGroup[this.editedIndex], this.selectItem)
      } else {
        this.$Progress.start()
        this.membersGroup.push(this.selectItem)

        groupMember.create(this.$store.state.token, this.selectItem).then(() => {
          var user = {}
          user.email = this.selectItem.Email
          user.password = '1234'

          user.create(this.$store.state.token, user).then(() => {
            this.$Progress.finish()
          }).catch((error) => {
            console.log('es un error')
            console.log(error)
          })
        }).catch((error) => {
          console.log('es un error')
          console.log(error)
        })
      }
      this.close()
    }
  }
}
</script>
