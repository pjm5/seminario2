<template>
<v-parallax src="https://seminario2app.herokuapp.com/inicio.jpg" height="1000">
    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center" mt-5>
                    <h1>Family Tracker</h1>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 mt-3>
                    <blockquote class="blockquote text-xs-center">
                        Family Tracker is a GPS tracking application that allows you to track the location of Android and Apple cell phones and tablets and send free text messages between them.

                        It is one of the first cross platform applications, which takes a full advantage of the capabilities of the two most popular mobile operating systems to date.
                    </blockquote>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
                    <v-btn color="primary" to="/register">Sign Up</v-btn>
                    <v-btn to="/login">Sign In</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</v-parallax>
</template>

<script>
export default {
  data: () => ({}),
  mounted () {

  }
}
</script>
