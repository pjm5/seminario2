<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md12>
        <v-card>
          <v-card-title primary-title>
            <h3>My Profile</h3>
          </v-card-title>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    v-model="selectItem.username"
                    label="User Name"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Email Address"
                    v-model="selectItem.email"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="First Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Last Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Adress" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Country" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="Postal Code" type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea class="purple-input" label="About Me" value="description"/>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" round color="success">Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import user from "@/resources/user.js"

export default {
  data: () => ({
    selectItem: {}
  }),
  created () {
    user
      .getById(this.$store.state.token, this.$store.state.user.id)
      .then(response => {
        this.selectItem = response;
      })
      .catch(error => {
        console.log("es un error")
        console.log(error)
      })
  }
}
</script>
